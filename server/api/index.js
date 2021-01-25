const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/exerciselibrary', require('./exercises'))
router.use('/workouthistory', require('./workoutHistory'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
