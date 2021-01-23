const User = require('./user')
const Exercises = require('./exercises')
const WorkoutHistory = require('./workouthistory')

User.hasMany(Exercises)
// Exercises.belongsTo(User)

module.exports = {
  User,
  Exercises,
  WorkoutHistory
}
