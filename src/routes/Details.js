import { useEffect, useReducer } from 'react'
import { detailsReducer, initialState, actions } from '../reducers/detailsReducer'
import Http from '../libs/http'
import DetailsScreen from '../components/detailsScreen'

const Details = () => {
  const [state, dispatch] = useReducer(detailsReducer, initialState)

  useEffect(() => {
    fetchData('employees', 'get', actions.SET_EMPLOYEES_LIST)
  }, [])

  useEffect(() => {
    if (state.selectedDate && state.selectedEmployee) {
      const query = `days/date=${state.selectedDate}&employee_id=${state.selectedEmployee}`
      fetchData(query, 'get', actions.SET_DETAILED_DAY)
    }
  }, [state.selectedDate, state.selectedEmployee])

  const fetchData = async (query, method, actionType, body) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const response = await Http.instance[method](query, body)
      dispatch({ type: actionType, payload: response.body })
    } catch (error) {
      dispatch({ type: actions.SET_ERROR, payload: error.message })
    }
  }
  const handleCalendar = (date) => {
    dispatch({ type: actions.SET_DATE, payload: date })
  }

  const handleSelect = (e) => {
    dispatch({ type: actions.SET_EMPLOYEE, payload: e.target.value })
  }

  const handleEdit = () => {
    dispatch({ type: actions.TOGGLE_EDIT })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const rawBody = {
      date: state.detailedDay.day_date,
      employee_id: state.selectedEmployee,
      day_start: e.target[0].value,
      lunch_start: e.target[1].value,
      lunch_end: e.target[2].value,
      day_end: e.target[3].value,
      extraPause_start: e.target[4].value,
      extraPause_end: e.target[5].value
    }

    const body = Object.keys(rawBody).reduce((acc, key) => {
      if (rawBody[key]) {
        acc[key] = rawBody[key]
      }
      return acc
    }, {})

    fetchData('days', 'put', actions.SET_DETAILED_DAY, body)
  }

  const handleDelete = (value) => {
    console.log('Not yet', value)
  }

  return (
    <DetailsScreen
      state={state}
      onSelectEmployee={handleSelect}
      onSelectDate={handleCalendar}
      toggleEdit={handleEdit}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
    />
  )
}

export default Details
