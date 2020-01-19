const express = require('express');
const router = express.Router();

const Book = require('./bookModel');


router.get('/books', (req, res) => {
    const { query } = req
    Book.findAll({ where: query })
        .then(books => {
            res.json(books)
        })
        .catch(err => {
            res.send('error: ' + err);
        })
});

router.post("/books", (req, res, next) => {
    const datos = {
        id: req.body.id,
        title: req.body.title,
        author: req.body.author,
        genre: req.body.genre
    };

    if (!datos) {
        res.status(400);
        res,
        json({
            error: "Datos incorrectos"
        });
    } else {
        Book.create(datos)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.json("error: " + err);
            });
    }
});

module.exports = router;