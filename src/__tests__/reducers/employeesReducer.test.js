import { employeesReducer, initialState } from '../../reducers/employeesReducer'
import { EmployeesData } from '../../__mocks__/EmployeesMock'

describe('Employees Reducer Tests', () => {
  test('Return same State', () => {
    expect(employeesReducer(initialState, '')).toEqual(initialState)
  })

  test('Return Fetching Data state', () => {
    const action = { type: 'FETCH_DATA' }
    expect(employeesReducer(initialState, action)).toEqual({ ...initialState, isFetching: true })
  })

  test('Return state with employees data', () => {
    const action = { type: 'SET_EMPLOYEE_LIST', payload: EmployeesData }
    expect(employeesReducer(initialState, action)).toEqual({ ...initialState, employeesList: EmployeesData })
  })

  test('Enable edit mode', () => {
    const action = { type: 'ENABLE_EDIT_MODE', payload: 45 }
    expect(employeesReducer(initialState, action)).toEqual({ ...initialState, editMode: true, selectedEmployee: 45 })
  })

  test('Disable edit mode', () => {
    const action = { type: 'DISABLE_EDIT_MODE' }
    const state = { ...initialState, editMode: true, selectedEmployee: 45 }
    expect(employeesReducer(state, action)).toEqual(initialState)
  })

  test('Disable isFetching', () => {
    const action = { type: 'FAILED_CONNECTION' }
    const state = { ...initialState, isFetching: true }
    expect(employeesReducer(state, action)).toEqual(initialState)
  })

  test('Show active employees', () => {
    const action = { type: 'TOGGLE_SHOW_INACTIVES' }
    const state = { ...initialState, showInactives: true }
    expect(employeesReducer(state, action)).toEqual(initialState)
  })
})
