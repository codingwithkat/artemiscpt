import React from 'react'
import {connect} from 'react-redux'
import {fetchDailyHistory} from '../store/workoutHistory'

class TodaysPlan extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.loadWorkoutHistory(this.props.userId)
  }

  render() {
    console.log('this.props', this.props)
    console.log('exercises', this.props.exerciseHistory)
    return (
      <div>
        <h1>Time to start training...</h1>
        {/* <ul>
              <li>{}</li>
          </ul> */}
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
    loadWorkoutHistory: userId => dispatch(fetchDailyHistory(userId))
  }
}

export default connect(mapState, mapDispatch)(TodaysPlan)
