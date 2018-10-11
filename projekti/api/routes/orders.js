const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Order = require('../models/order');
const Game = require('../models/game');


// GET
router.get("/", (req, res, next) => {
    Order
        .find()
        .select("game quantity _id")
        .populate('game', 'name')
        .exec()
        .then(docs => {
            res.status(200).json({
                count: docs.length,
                orders: docs.map(doc => {
                    return {
                        _id: doc._id,
                        game: doc.game,
                        quantity: doc.quantity,
                        request: {
                            type: "GET",
                            url: "http://localhost:5000/orders/" + doc._id
                        }
                    };
                })
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


//POST
router.post("/", (req, res, next) => {
    Game.findById(req.body.gameId)
        .then(game => {
            if (!game) {
                return res.status(404).json({
                    message: "Game not found"
                });
            }
            const order = new Order({
                _id: mongoose.Types.ObjectId(),
                quantity: req.body.quantity,
                game: req.body.gameId
            });
            return order.save();
        })
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Order stored",
                createdOrder: {
                    _id: result._id,
                    game: result.game,
                    quantity: result.quantity
                },
                request: {
                    type: "GET",
                    url: "http://localhost:3000/orders/" + result._id
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


//GET BY ID
router.get('/:idorder', (req, res, next) => {
    Order.findById(req.params.idorder)
        .populate('game')
        .exec()
        .then(order => {
            if (!order) {
                res.status(404).json({
                    message: 'Order not found!'
                });
            }
            res.status(200).json({
                order: order,
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/orders'
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});


//DELETE BY ID
router.delete('/:idorder', (req, res, next) => {
    Order.remove({ _id: req.params.idorder})
        .exec()
        .then(order => {
            res.status(200).json({
                message: 'Order deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:5000/orders',
                    body: { gameId: 'ID', quantity: 'Number'}
                }
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;