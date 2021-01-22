const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutHistory = db.define('user', {
  date: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = WorkoutHistory
