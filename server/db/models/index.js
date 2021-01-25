const User = require('./user')
const Exercises = require('./exercises')
const WorkoutHistory = require('./workouthistory')

User.hasMany(Exercises)
WorkoutHistory.belongsTo(Exercises)
WorkoutHistory.belongsTo(User)
// User.hasOne(WorkoutHistory)

module.exports = {
  User,
  Exercises,
  WorkoutHistory
}
