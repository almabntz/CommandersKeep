import express from 'express';
import cors from 'cors';
//import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import pgPromise from 'pg-promise';

const app = express();
const PORT = 8080;

//config cors middleware
app.use(cors());

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



app.listen(PORT, () => console.log(`Hello from backend! server is running on port ${PORT}`));