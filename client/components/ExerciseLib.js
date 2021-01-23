import React from 'react'
import {connect} from 'react-redux'
import {fetchExercises, createWorkout} from '../store/exercises'
import {Button} from 'react-bootstrap'

class ExerciseLab extends React.Component {
  constructor(props) {
    super(props)
    // this.clickAddExercise = this.clickAddExercise.bind(this)
  }

  // clickAddExercise(exercise) {
  //   this.props.addExercise(this.props.userId, exercise.id)
  //   // console.log('you clicked the exercise button', exercise.name)
  // }
  async componentDidMount() {
    await this.props.loadExercises()
  }

  render() {
    return (
      <div>
        <h1 className="library-header">Build Today's Workout</h1>
        <h4 className="library-info">
          Select as many exercises to build yourself a personalized workout
          plan!
        </h4>
        {this.props.exercises.map(exercise => (
          <div className="all-exercises-container" key={exercise.id}>
            <ul className="all-exercises">
              <li>Exercise Name: {exercise.name}</li>
              <li>Muscle Group: {exercise.type}</li>
              <li>Set(s): {exercise.sets}</li>
              <li>Reps: {exercise.repetitions}</li>
              <li>Video: {exercise.video}</li>
              <Button
                className="add-exercise"
                type="submit"
                onClick={() => {
                  console.log('you click add.....')
                  console.log('button: userId', this.props.userId)
                  console.log('button: exercise.id', exercise.id)
                  this.props.addExercise(this.props.userId, exercise.id)
                }}
              >
                Add
              </Button>
              {/* <img src={exercise.video}
                style={{width: '25%', margin: '20px 0'}}/> */}
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  return {
    userId: state.user.id,
    exercises: state.exercises
  }
}

const mapDispatch = dispatch => {
  return {
    loadExercises: () => dispatch(fetchExercises()),
    addExercise: (userId, exerciseId) =>
      dispatch(createWorkout(userId, exerciseId))
  }
}

export default connect(mapState, mapDispatch)(ExerciseLab)
