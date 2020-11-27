import { useEffect, useReducer } from 'react'
import { employeesReducer, initialState, actions } from '../reducers/employeesReducer'
import Http from '../libs/http'
import EmployeesScreen from '../components/employeesScreen'

const Employees = () => {
  const [state, dispatch] = useReducer(employeesReducer, initialState)

  const fetchEmployees = async () => {
    dispatch({ type: actions.FETCH_DATA })
    const query = state.showInactives ? 'employees/active=0' : 'employees'
    try {
      const { body } = await Http.instance.get(query)
      dispatch({ type: actions.SET_EMPLOYEE_LIST, payload: body })
    } catch (error) {
      console.log('error fetch')
      dispatch({ type: actions.FAILED_CONNECTION })
    }
  }

  const toggleEdit = (index = -1) => {
    if (index === -1) {
      dispatch({ type: actions.DISABLE_EDIT_MODE })
      return
    }
    dispatch({ type: actions.ENABLE_EDIT_MODE, payload: index })
  }

  const handleSubmit = async (e, id) => {
    e.preventDefault()
    const update = {
      id: id,
      fullname: e.target[0].value,
      dni: e.target[1].value,
      password: e.target[2].value,
      mobile: e.target[3].value,
      hourly_pay: e.target[4].value
    }
    toggleEdit()
    dispatch({ type: actions.FETCH_DATA })
    try {
      const updated = await Http.instance.put('employees', update)
      const index = state.employeesList.findIndex(elem => (
        elem.employee_id === updated.body.employee_id
      ))
      const list = [...state.employeesList]
      list[index] = updated.body
      dispatch({ type: actions.SET_EMPLOYEE_LIST, payload: list })
    } catch (error) {
      console.log(error)
      dispatch({ type: actions.FAILED_CONNECTION })
    }
  }

  const handleDelete = async (id) => {
    dispatch({ type: actions.FETCH_DATA })
    try {
      await Http.instance.delete(`employees/${id}`)
      const filtered = state.employeesList.filter(elem => (
        elem.employee_id !== id
      ))
      dispatch({ type: actions.SET_EMPLOYEE_LIST, payload: filtered })
    } catch (error) {
      console.log(error)
      dispatch({ type: actions.FAILED_CONNECTION })
    }
  }

  const toggleInactives = () => {
    dispatch({ type: actions.TOGGLE_SHOW_INACTIVES })
  }

  useEffect(() => {
    fetchEmployees()
  }, [state.showInactives])

  return (
    <EmployeesScreen
      state={state}
      toggleEdit={toggleEdit}
      onSubmit={handleSubmit}
      onDelete={handleDelete}
      toggleInactives={toggleInactives}
    />
  )
}

export default Employees
