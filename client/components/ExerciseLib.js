import React from 'react'
import {connect} from 'react-redux'
import {fetchExercises} from '../store/exercises'
import {Button} from 'react-bootstrap'

class ExerciseLab extends React.Component {
  constructor(props) {
    super(props)
  }

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
              <Button className="add-exercise" type="submit">
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
