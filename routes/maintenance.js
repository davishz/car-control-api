const express = require('express');
const router = express.Router();
const Maintenance = require('../models/Maintenance');

router.get('/', async (req, res) => {
    try {
        const maintenance = await Maintenance.find();
        res.json(maintenance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.get('/:maintenanceId', async (req, res) => {
    try {
        const maintenance = await Maintenance.findById(req.params.maintenanceId);
        res.json(maintenance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.post('/', async (req, res) => {
    const maintenance = new Maintenance({
        title: req.body.title,
        date: req.body.date,
        price: req.body.price
    });

    try {
        const savedMaintenance = await maintenance.save();
        res.json(savedMaintenance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.patch('/:maintenanceId', async (req, res) => {
    try {
        const updatedMaintenance = await gas.updateOne(
            { _id: req.params.maintenanceId },
            { $set: {
                title: req.body.title,
                date: req.body.date,
                price: req.body.price
            }}
        );
        res.json(updatedMaintenance);
    } catch (err) {
        res.json({ message: err });
    }
});

router.delete('/:maintenanceId', async (req, res) => {
    try {
        const removedMaintenance = await Maintenance.remove({
            _id: req.params.maintenanceId
        });
        res.json(removedMaintenance);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;
