const express = require('express');
const router = express.Router();
const Gas = require('../models/Gas');

router.get('/', async (req, res) => {
    try {
        const gas = await Gas.find();
        res.json(gas);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    console.log(req)
    const gas = new Gas({
        date: req.body.date,
        liters: req.body.liters,
        price: req.body.price,
        station: req.body.station,
        discount: req.body.discount
    });

    try {
        const savedGas = await gas.save();
        res.json(savedGas);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:gasId', async (req, res) => {
    try {
        const gas = await Gas.findById(req.params.gasId);
        res.json(gas);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:gasId', async (req, res) => {
    try {
        const updatedGas = await gas.updateOne(
            { _id: req.params.gasId },
            { $set: {
                date: req.body.date,
                liters: req.body.liters,
                price: req.body.price,
                station: req.body.station,
                discount: req.body.discount
            }}
        );
        res.json(updatedGas);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:gasId', async (req, res) => {
    try {
        const removedGas = await Gas.remove({ _id: req.params.gasId });
        res.json(removedGas);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
