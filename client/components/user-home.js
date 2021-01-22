import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import ExerciseLib from './ExerciseLib'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <h3>Take a look at your exercise choices!</h3>
      <ExerciseLib component={ExerciseLib} />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
