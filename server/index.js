import express from 'express';
import cors from 'cors';
//import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';
import dotenv from 'dotenv'

dotenv.config()

const app = express();
const PORT = 8080;

//config cors middleware
app.use(cors());

app.use(bodyParser.json());

//pg promise instance
const pgp = pgPromise({});

// `https://api.magicthegathering.io/v1/cards?name=${searchTerm}` <--- searchTerm is passed from api, probs like req.searchTerm or something

//------------------------DB CRUD----------------------------------------------------------------------------------
//this is porting over my whole database 
const db = pgp('postgres://localhost:5432/com_keep');

// GET from users
app.get('/users', async function (req, res, next) {

    try {
      const users = await db.any('SELECT * FROM users', [true]);
      res.send(users);
    } catch (e) {
      return res.status(400).json({ e });
    }
  });
//------------------------API CRUD----------------------------------------------------------------------------------

//GET request for MTG api
app.get("api/cards", cors(), async (req,res) => {
     const url = `https://api.magicthegathering.io/v1/cards?name=${"vampire"}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        //error response
        res.send(data);
    } catch (err) {
        console.error("status:", err);
    }
});

//end point for route
app.get('/', (request, response) => {
    response.json({ info: 'hello from my backend'})
});


//TEST CODE

app.post('/api/users', cors(), async (req, res) => {
  console.log(req.body, "this is req body")
  const newUser = {
  lastname: req.body.family_name,
  firstname: req.body.given_name,
  email: req.body.email,
  sub: req.body.sub
  
  }
  //console.log(newUser);
  
  const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
  const valuesEmail = [newUser.email]
  const resultsEmail = await db.query(queryEmail, valuesEmail);
  if(resultsEmail.length>0){
  console.log(`Thank you ${resultsEmail.firstname} for comming back`)
  } else{
    console.log("This is ELSE")
  const query = 'INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
  const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.sub]
  const result = await db.query(query, values);
  console.log(result, "This is the end of else");
  
  }
  
  });

//END TEST CODE




















//POST request for my DB in User
// create the POST request
// app.post('/users', async (req, res) => {
  
//   console.log(req.body)

//   const newUser = {
//     lastname: req.body.family_name,
//     firstname: req.body.given_name,
//     email: req.body.email,
//     sub: req.body.sub
//   };
  
// //inserts data into DB table Users
  
// const queryEmail = 'SELECT * FROM users WHERE email=$1 LIMIT 1';
// const valuesEmail = [newUser.email]
// const resultsEmail = await db.query(queryEmail, valuesEmail);
// if(resultsEmail.rows[0]){
//   console.log(`Thank you ${resultsEmail.rows[0].firstname} for comming back`)
// } else{
// const query = 'INSERT INTO users(lastname, firstname, email, sub) VALUES($1, $2, $3, $4) RETURNING *'
// const values = [newUser.lastname, newUser.firstname, newUser.email, newUser.sub]
// const result = await db.query(query, values);
// console.log(result.rows[0]);

// console.log("This is new user BACKEND", newUser)
// }

// });


app.listen(PORT, () => console.log(`Hello from backend! server is running on port ${PORT}`));