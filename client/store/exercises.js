import axios from 'axios'

const GET_EXERCISES = 'GET_EXERCISES'

export const getExercises = exercises => ({
  type: GET_EXERCISES,
  exercises
})

export const fetchExercises = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/exerciselibrary')
    dispatch(getExercises(data))
  } catch (error) {
    console.log(`Error fetching exercises from API.`)
  }
}

const initialState = []

export default function exercisesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_EXERCISES:
      return action.exercises
    default:
      return state
  }
}

// const ADD_EXERCISE = 'ADD_EXERCISE'

// export const addExercise = exercise => ({
//   type: ADD_EXERCISE,
//   exercise
// })
