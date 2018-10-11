const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Game = require('../models/game');

//GET
router.get("/", (req, res, next) => {
    Game.find()
        .select("name price _id")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                games: docs.map(doc => {
                    return {
                        name: doc.name,
                        price: doc.price,
                        _id: doc._id,
                        request: {
                            type: "GET",
                            url: "http://localhost:5000/games/" + doc._id
                        }
                    };
                })
            };
            //   if (docs.length >= 0) {
            res.status(200).json(response);
            //   } else {
            //       res.status(404).json({
            //           message: 'No entries found'
            //       });
            //   }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

//POST
router.post('/',(req, res, next) => {
    const game = new Game({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });
    game
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Created game successfully',
                createdGame: {
                    name: result.name,
                    price: result.price,
                    _id: result._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:5000/games/' + result._id
                    }
                }
            });

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });

});

//GET BY ID
router.get('/:gameId', (req, res, next) => {
    const id = req.params.gameId;
    Game.findById(id)
        .select('name price _id')
        .exec()
        .then(doc => {
            console.log('From database', doc);
            if(doc) {
                res.status(200).json({
                    game: doc,
                    request: {
                        type: 'GET',
                        description: 'Get all products',
                        url: 'http://localhost:5000/games/'
                    }
                });
            } else {
                res.status(404).json({message: 'No valid entry for ID!'});
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
        });

});

//PATCH BY ID
router.patch('/:gameId', (req, res, next) => {
    const id = req.params.gameId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Game.update({_id: id}, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json({
                message: 'Game updated!',
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/games/' + id
                }
            });
        })
        .catch(err => {
            console.log(500).json({
                error: err
            });
        });
});

//DELETE BY ID
router.delete('/:gameId', (req, res, next) => {
    const id = req.params.gameId;
    Game.remove({_id: id})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Game deleted!',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5000/games/',
                    body: {name: 'String', price: 'Number'}
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


module.exports = router;