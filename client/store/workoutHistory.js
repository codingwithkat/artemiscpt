import axios from 'axios'

const ADD_EXERCISE = 'ADD_EXERCISE'

export const addExercise = (userId, exerciseId) => ({
  type: ADD_EXERCISE,
  userId,
  exerciseId
})

export const addToWorkout = (userId, exerciseId) => async dispatch => {
  try {
    await axios.post('/api/workouthistory', {userId, exerciseId})
  } catch (error) {
    console.log('Error in addToWorkout!')
  }
}
const FETCH_TODAYS_HISTORY = 'FETCH_TODAYS_HISTORY'

export const fetchToday = (userId, exerciseHistory) => ({
  type: FETCH_TODAYS_HISTORY,
  userId,
  exerciseHistory
})

export const fetchDailyHistory = userId => async dispatch => {
  try {
    const {data} = await axios.post('/api/workouthistory/user', {userId})
    dispatch(fetchToday(userId, data))
  } catch (error) {
    console.log("Cannot fetch today's workout!")
  }
}
const COMPLETED_EXERCISE = 'COMPLETED_EXERCISE'

export const completed = (userId, exerciseHistory) => ({
  type: COMPLETED_EXERCISE,
  userId,
  exerciseHistory
})

export const completeExercise = (userId, exerciseId) => async dispatch => {
  try {
    await axios.delete('/api/workouthistory/user', {
      data: {userId: userId, exerciseId: exerciseId}
    })
  } catch (error) {
    console.log('Cannot fetch updated workout!')
  }
}

const initialState = {
  userId: 0,
  exerciseId: 0,
  exerciseHistory: []
}

export default function historyReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXERCISE: {
      return {...state, userId: action.userId, exerciseId: action.exerciseId}
    }
    case FETCH_TODAYS_HISTORY: {
      return {
        ...state,
        userId: action.userId,
        exerciseHistory: action.exerciseHistory
      }
    }
    case COMPLETED_EXERCISE: {
      return state
    }
    default:
      return state
  }
}
