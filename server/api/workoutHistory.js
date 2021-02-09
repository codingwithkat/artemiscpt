const router = require('express').Router()
const {WorkoutHistory, Exercises} = require('../db/models')
const {Op} = require('sequelize')
module.exports = router

//mount: /api/workouthistory
router.post('/', async (req, res, next) => {
  try {
    let exerciseId = req.body.exerciseId
    let userId = req.body.userId
    const successfulAddition = await WorkoutHistory.create({
      exerciseId: exerciseId,
      userId: userId
    })
    res.send(successfulAddition).status(200)
  } catch (error) {
    console.log('error in creating daily workout')
  }
})

//mount: /api/workouthistory/user
router.post('/user', async (req, res, next) => {
  try {
    //fetch exercise history for specific user and specific date
    //search exercises to return string
    let userId = req.body.userId
    let userWorkOuts = await WorkoutHistory.findAll({
      attributes: ['exerciseId'],
      where: {
        userId: userId,
        date: getToday()
      }
    })
    let todaysPlan = userWorkOuts.map(workout => workout.exerciseId)
    let exerciseDesc = await Exercises.findAll({
      where: {
        id: {
          [Op.in]: todaysPlan
        }
      }
    })
    res.send(exerciseDesc).status(200)
  } catch (error) {
    console.log('Error in getting workout history')
  }
})

function getToday() {
  let now = new Date()
  let [month, day, year] = now.toLocaleDateString().split('/')
  if (parseInt(month, 10) < 10) {
    month = '0' + month
  }
  return year + '-' + month + '-' + day
}

//mount: /api/workouthistory/user
router.delete('/user', async (req, res, next) => {
  try {
    let userId = req.body.userId
    let exerciseId = req.body.exerciseId
    let completedWorkout = await WorkoutHistory.destroy({
      where: {
        userId: userId,
        exerciseId: exerciseId
      }
    })
    res.sendStatus(200)
  } catch (error) {
    console.log('Error in removing completed workout')
  }
})
