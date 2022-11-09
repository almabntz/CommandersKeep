import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';

const app = express();
const PORT = 8080;

//config cors middleware
app.use(cors());
// `https://api.magicthegathering.io/v1/cards?name=${searchTerm}` <--- searchTerm is passed from api, probs like req.searchTerm or something

//GET request for MTG api
//API will fetch 100 cards as a default
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


 // const url = "https://api.scryfall.com/catalog/card-names";

app.listen(PORT, () => console.log(`Hello from backend! server is running on port ${PORT}`));