const express = require('express');
const router = express.Router();
const Insurance = require('../models/Insurance');

router.get('/', async (req, res) => {
    try {
        const insurance = await Insurance.find();
        res.json(insurance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:insuranceId', async (req, res) => {
    try {
        const insurance = await Insurance.findById(req.params.insuranceId);
        res.json(insurance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const insurance = new Insurance({
        title: req.body.title,
        date: req.body.date,
        price: req.body.price
    });

    try {
        const savedInsurance = await insurance.save();
        res.json(savedInsurance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:insuranceId', async (req, res) => {
    try {
        const updatedInsurance = await gas.updateOne(
            { _id: req.params.insuranceId },
            { $set: {
                title: req.body.title,
                date: req.body.date,
                price: req.body.price
            }}
        );
        res.json(updatedInsurance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:insuranceId', async (req, res) => {
    try {
        const removedInsurance = await Insurance.remove({
            _id: req.params.insuranceId
        });
        res.json(removedInsurance);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
