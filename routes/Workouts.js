const express = require('express');
const Workout = require('../models/Workouts')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/Workouts')

const router = express.Router();

// get all workouts
router.get('/', getWorkouts)

// get a single workout
router.get('/:id', getWorkout)

// post new
router.post('/', createWorkout)

// delete workout
router.delete('/:id', deleteWorkout)

// update workout
router.patch('/:id', updateWorkout)

module.exports = router