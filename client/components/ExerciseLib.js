import React from 'react'
import {connect} from 'react-redux'
import {fetchExercises} from '../store/exercises'

class ExerciseLab extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.loadExercises()
  }

  render() {
    // console.log('this.props', this.props)
    // console.log('this.props.exercises', this.props.exercises) empty array at 1st
    return (
      <div>
        <h1>Exercises</h1>
        {this.props.exercises.map(exercise => (
          <div key={exercise.id}>
            <ul>
              <li>Exercise Name: {exercise.name}</li>
              <li>Muscle Group: {exercise.type}</li>
              <li>Sets: {exercise.sets}</li>
              <li>Reps: {exercise.repetitions}</li>
            </ul>
          </div>
        ))}
      </div>
    )
  }
}

const mapState = state => {
  // console.log('state', state)
  return {
    exercises: state.exercises
  }
}

const mapDispatch = dispatch => {
  return {
    loadExercises: () => dispatch(fetchExercises())
  }
}

export default connect(mapState, mapDispatch)(ExerciseLab)
