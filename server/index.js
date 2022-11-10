import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import dotenv from "dotenv";

//is using my auth0 credentials to allow me to access user info
dotenv.config();

const app = express();
const PORT = 8080;

//config cors middleware
app.use(cors());

//parsing incoming JSON data
app.use(bodyParser.json());

//pg promise instance
const pgp = pgPromise({});

//this is porting over my whole database
const db = pgp("postgres://localhost:5432/com_keep");

// GET from users
app.get("/users", async function (req, res, next) {
  try {
    const users = await db.any("SELECT * FROM users", [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//GET request for MTG api
app.get("api/cards", cors(), async (req, res) => {
  const url = `https://api.magicthegathering.io/v1/cards?name=${searchTerm}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    //error response
    res.send(data);
  } catch (err) {
    console.error("status:", err);
  }
});

//end point for route
app.get("/", (request, response) => {
  response.json({ info: "hello from my backend" });
});

//POST for incoming data from front end. will post to DB table users
app.post("/api/users", cors(), async (req, res) => {
  console.log(req.body, "this is req body");
  const newUser = {
    //data being received from front end 
    lastname: req.body.family_name,
    firstname: req.body.given_name,
    email: req.body.email,
    sub: req.body.sub,
  };
  //if else statement that will check if user is new user or returning user.
  const queryEmail = "SELECT * FROM users WHERE email=$1 LIMIT 1";
  const valuesEmail = [newUser.email];
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if (resultsEmail.length > 0) {
    //console.log(`Welcome back, Planeswalker ${resultsEmail.firstname} !`)
  } else {
    //Values that are being inserted into table if new user
    const query =
      "INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *";
    const values = [
      newUser.lastname,
      newUser.firstname,
      newUser.email,
      newUser.sub,
    ];
    const result = await db.query(query, values);
  }
});

app.listen(PORT, () =>
  console.log(`Hello from backend! server is running on port ${PORT}`)
);