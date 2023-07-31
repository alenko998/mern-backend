const express = require('express');

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
router.post('/', (req,res) => {
    res.json({mssg: "post"})
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