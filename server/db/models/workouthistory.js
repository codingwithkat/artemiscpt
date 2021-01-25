const Sequelize = require('sequelize')
const db = require('../db')

const WorkoutHistory = db.define('workouthistory', {
  date: {
    type: Sequelize.DATEONLY,
    allowNull: false,
    defaultValue: Sequelize.NOW
  }
})

module.exports = WorkoutHistory
