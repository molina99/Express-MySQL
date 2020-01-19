const express = require('express');
const bodyParser = require('body-parser');


const books = require('./bookControl');
const cors = require('cors');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('Home')
})

app.use('/api', books);



app.listen(port, () => {
    console.log(`Running on port ${port}`);
});