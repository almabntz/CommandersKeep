import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import pgPromise from "pg-promise";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

//is using my auth0 credentials to allow me to access user info
dotenv.config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REACT_BUILD_DIR = path.join(__dirname, "..", "client", "build");
app.use(express.static(REACT_BUILD_DIR));

const PORT = process.env.PORT || 8080;

//config cors middleware
app.use(cors());

//parsing incoming JSON data
app.use(bodyParser.json());

//pg promise instance
const pgp = pgPromise({});

//this is porting over my whole database
const db = pgp("postgres://localhost:5432/com_keep");



//GET from user_collection
app.get("/user_collection", async function (req, res, next) {
  try {
    const userCollection = await db.any("SELECT * FROM user_collection", [
      true,
    ]);
    res.send(userCollection);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//POST request for user_collection
app.post("/user_collection", async (req, res) => {
  const updateCollection = {
    id: req.body.id,
    name: req.body.name,
    manaCost: req.body.manaCost,
    originalText: req.body.originalText,
    cmc: req.body.cmc,
    imageUrl: req.body.imageUrl,
    user_id: req.body.user_id
  };
  console.log(updateCollection);

  try {
    const insertCollection = await db.any(
      "INSERT INTO user_collection(id, name, manacost, originaltext, cmc, imageurl, user_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        updateCollection.id,
        updateCollection.name,
        updateCollection.manaCost,
        updateCollection.originalText,
        updateCollection.cmc,
        updateCollection.imageUrl,
        "3",
      ]
    );
    console.log(insertCollection);
    res.send(insertCollection);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

//DELETE request for user collection
app.delete("/user_collection/:id", async (req, res) => {
  const cardId = req.params.id;
  console.log(cardId);
  try{
    await db.many("DELETE FROM user_collection WHERE id=$1", [cardId]);
    res.send({ status: "success"});
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
  //response.json({ info: "hello from my backend" });
  response.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

// GET from users
app.get("/users", async function (req, res, next) {
  try {
    const users = await db.any("SELECT * FROM users", [true]);
    res.send(users);
  } catch (e) {
    return res.status(400).json({ e });
  }
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
    console.log(`Welcome back, Planeswalker ${resultsEmail.firstname} !`);
    res.json({user_id:resultsEmail[0].id}) //current or new user is found
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
    res.json({user_id:result[0].id}) //adds user to db
  }
});

app.listen(PORT, () =>
  console.log(`Hello from backend! server is running on port ${PORT}`)
);