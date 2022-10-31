import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

//config cors middleware
app.use(cors());

//end point for route
app.get('/', (request, response) => {
    response.json({ info: 'hello from my backend'})
});

//GET request for MTG api
//API will fetch 100 cards as a default
app.get("/", cors(), async (req,res) => {
    const url = "https://api.magicthegathering.io/v1/cards";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)

        //error response
        res.send(data);
    } catch (err) {
        console.error("Fetch error: ", err);
    }
});








app.listen(PORT, () => console.log(`Hello from backend! server is running on port ${PORT}`));