import React from 'react'
import {connect} from 'react-redux'

class TodaysPlan extends React.Component {
  constructor(props) {
    super(props)
  }

  async componentDidMount() {
    await this.props.addExercises()
  }

  render() {
    return (
      <div>
        <h1>Time to start training...</h1>
      </div>
    )
  }
}

// const mapState = state => {
//   return {

//   }
// }

// const mapDispatch = dispatch => {
//   return {
//   }
// }

export default connect(mapState, mapDispatch)(TodaysPlan)
