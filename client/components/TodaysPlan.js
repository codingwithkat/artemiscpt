import React from 'react'
import {connect} from 'react-redux'
import {fetchDailyHistory, completeExercise} from '../store/workoutHistory'
import {Button, Container} from 'react-bootstrap'
import ReactPlayer from 'react-player'

class TodaysPlan extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.loadWorkoutHistory(
      this.props.userId,
      this.props.exerciseHistory
    )
  }

  render() {
    console.log('this.props', this.props)
    // console.log('exercises', this.props.exerciseHistory)
    const exerciseHist = this.props.exerciseHistory
    return (
      <div>
        <h1 className="todays-plan">Your Exercises:</h1>
        <Container>
          {exerciseHist.map(exercise => (
            <div className="all-exercises-container" key={exercise.id}>
              <ul className="all-exercises">
                <li className="exercise-title">{exercise.name}</li>
                <li>Muscle Group: {exercise.type}</li>
                <li>Set(s): {exercise.sets}</li>
                <li>Reps: {exercise.repetitions}</li>
                <br />
                <li>
                  <ReactPlayer
                    url={exercise.video}
                    width="470"
                    height="300"
                    className="embedded-video"
                  />
                </li>
                <br />
                <Button
                  className="button-exercise"
                  type="submit"
                  onClick={() => {
                    this.props.completeExercise(this.props.userId, exercise.id)
                    this.props.loadWorkoutHistory(
                      this.props.userId,
                      this.props.exerciseHistory
                    )
                  }}
                >
                  Completed!
                </Button>
              </ul>
            </div>
          ))}
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  console.log('state', state)
  return {
    userId: state.user.id,
    exerciseHistory: state.workoutHistory.exerciseHistory
  }
}

const mapDispatch = dispatch => {
  return {
    loadWorkoutHistory: (userId, exerciseHistory) =>
      dispatch(fetchDailyHistory(userId, exerciseHistory)),
    completeExercise: (userId, exerciseId) =>
      dispatch(completeExercise(userId, exerciseId))
  }
}

export default connect(mapState, mapDispatch)(TodaysPlan)
