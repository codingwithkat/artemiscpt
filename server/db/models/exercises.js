const Sequelize = require('sequelize')
const db = require('../db')

const Exercises = db.define('exercise', {
  name: {
    type: Sequelize.STRING
  },
  type: {
    type: Sequelize.STRING
  },
  sets: {
    type: Sequelize.INTEGER
  },
  repetitions: {
    type: Sequelize.INTEGER
  },
  video: {
    type: Sequelize.STRING
  }
})

module.exports = Exercises
