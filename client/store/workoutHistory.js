import axios from 'axios'

const ADD_EXERCISE = 'ADD_EXERCISE'

export const addExercise = (userId, exerciseId) => ({
  type: ADD_EXERCISE,
  userId,
  exerciseId
})

export const addToWorkout = (userId, exerciseId) => async dispatch => {
  try {
    console.log('addToWorkout Thunk userId, exId:', userId, exerciseId)
    await axios.post('/api/workouthistory', {userId, exerciseId})
  } catch (error) {
    console.log('Error in addToWorkout!')
  }
}
const FETCH_TODAYS_HISTORY = 'FETCH_TODAYS_HISTORY'

export const fetchToday = userId => ({
  type: FETCH_TODAYS_HISTORY,
  userId
})

export const fetchDailyHistory = userId => async dispatch => {
  try {
    console.log('who is the user?', userId)
    const {data} = await axios.post('/api/workouthistory/user', {userId})
    console.log('are we here?', data)
    // dispatch(fetchToday(data))
  } catch (error) {
    console.log("Cannot fetch today's workout!")
  }
}

const initialState = {
  userId: 0,
  exerciseId: 0,
  exerciseHistory: []
}

export default function historyReducer(state = initialState, action) {
  console.log('inside history reducer')
  switch (action.type) {
    case ADD_EXERCISE: {
      return {...state, userId: action.userId, exerciseId: action.exerciseId}
    }
    case FETCH_TODAYS_HISTORY: {
      console.log('what is action.exer', action.exerciseHistory)
      return {...state, exerciseHistory: action.exerciseHistory}
    }
    default:
      return state
  }
}
