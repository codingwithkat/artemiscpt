const router = require('express').Router()
const {WorkoutHistory} = require('../db/models')
module.exports = router

//mount: /api/workouthistory
router.post('/', async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    let exerciseId = req.body.exerciseId
    let userId = req.body.userId
    const successfulAddition = await WorkoutHistory.create({
      exerciseId: exerciseId,
      userId: userId
    })
    res.send(successfulAddition).status(200)
  } catch (error) {
    console.log('error in post route')
  }
})

//mount: /api/workouthistory
router.get('/', async (req, res, next) => {
  try {
    //fetch exercise history for specific user and specific date
    //search exercises to return string
    console.log('req.body', req.body)
    const userWorkOuts = await WorkoutHistory.findAll({
      where: {
        userId: userId
      }
    })
  } catch (error) {
    console.log('Error in get workout history')
  }
})

//change get route to post
