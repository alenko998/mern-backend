const express = require('express');
const Workout = require('../models/Workouts')
const {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/Workouts')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all workout routes
router.use(requireAuth)

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