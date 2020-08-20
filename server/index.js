const seed = require('./helpers.js')

const express = require('express');
const app = express();
const port = 5000;




app.get('/photogallery', (req,res) => {
    seed.getAll()
})


app.listen(port, () => console.log(`listening on port 5000`))
