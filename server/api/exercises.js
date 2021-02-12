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
