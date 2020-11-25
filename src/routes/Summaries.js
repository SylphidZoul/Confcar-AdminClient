import { useEffect, useReducer } from 'react'
import { summaryReducer, initialState, actions } from '../reducers/summaryReducer'
import Http from '../libs/http'
import Summary from '../components/summaryScreen'

const Summaries = () => {
  const [state, dispatch] = useReducer(summaryReducer, initialState)

  const fetchData = async (param) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      const { body } = await Http.instance.get(`days/${param}`)
      const { detailsPerEmployee, ...totalData } = body
      dispatch({
        type: actions.SET_DATA,
        payload: { detailsPerEmployee, totalData }
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleToggle = () => {
    dispatch({ type: actions.TOGGLE_CALENDAR })
  }

  const handleChange = (date) => {
    let query = ''

    switch (state.summaryType) {
      case 'week':
        query = `week=${date}`
        break
      case 'month':
        query = `date=${date}&month=true&year=true`
        break
      case 'year':
        query = `date=${date}&year=true`
        break
      default:
        return
    }
    fetchData(query)
    handleToggle()
  }

  const handleType = (e) => {
    let string = ''
    let query = ''

    switch (e.target.value) {
      case 'week':
        string = 'Semana'
        break
      case 'month':
        string = 'Mes'
        query = `date=${new Date()}&month=true&year=true`
        break
      case 'year':
        string = 'Año'
        query = `date=${new Date()}&year=true`
        break
      default:
        return
    }

    dispatch({
      type: actions.SET_SUMMARY_TYPE,
      payload: { value: e.target.value, string }
    })
    fetchData(query)
  }

  useEffect(() => {
    fetchData('')
  }, [])

  return (
    <Summary
      state={state}
      onClick={handleToggle}
      onChange={handleChange}
      onChangeType={handleType}
    />
  )
}

export default Summaries
