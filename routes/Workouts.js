const express = require('express');
const Workout = require('../models/Workouts')

const router = express.Router();

// get all workouts
router.get('/', (req,res) => {
    res.json({mssg: 'get all'})
})

// get a single workout
router.get('/:id', (req,res) => {
    res.json({mssg: "get single"})
})

// post new
router.post('/', async (req,res) => {
    const {title,load,reps} = req.body;

    try {
        const workout = await Workout.create({title,load,reps});
        res.status(200).send(workout);
    } catch (error) {
       res.status(400).json({error: error.message}) 
    }
})

// delete workout
router.delete('/:id', (req,res) => {
    res.json({mssg: "delete"})
})

// update workout
router.patch('/:id', (req,res) => {
    res.json({mssg: "update"})
})

module.exports = router