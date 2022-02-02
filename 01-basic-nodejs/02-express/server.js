
const express = require('express');

const app = express();


//respond to GET request for `/`
app.get('/',(req,res) =>{
    // req = info om den inkommande förfrågan
    // res = metoder för att skicka ett svar på förfrågan
    console.log("I Am Groot!");

    res.send('Hello');
});

// respond to GET-request for `/nom`
app.get('nom',(req,res) =>{
    console.log("somone new");

    res.send('Hello yes to Max homade cupcakes');
});

//respond to GET request for `/api/nom`
app.get(`/api/nom`, (req,res)=>{
    res.send({msg:'Cakes are nom-nom-nom.'});
});

//respond to GET request for `/about`
app.get('/about',(req,res) =>{
   res.send("<h1>I see you<h1>");
   res.send("<p>nubbb<p>");
});

// start listening for incoming requests on port 3000
app.listen(3000,()=>{
    console.log (`yey`);
});

