const router = require('express').Router()
const {Exercises} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const exercises = await Exercises.findAll()
    res.json(exercises)
  } catch (err) {
    next(err)
  }
})

// router.post('/:exerciseId', async (req, res, next) => {
//   try {
//     const exercises = await Exercises.findByPk()
//     res.json(exercises)
//   } catch (err) {
//     next(err)
//   }
// })

//get route
//post will create or update
//delete route
