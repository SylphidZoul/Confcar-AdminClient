import { detailsReducer, initialState } from '../../reducers/detailsReducer'
import { EmployeesData } from '../../__mocks__/EmployeesMock'
import { detailedDayMock } from '../../__mocks__/DetailsMock'

describe('Details Reducer Tests', () => {
  test('Return same State', () => {
    expect(detailsReducer(initialState, '')).toEqual(initialState)
  })

  test('Return Fetching Data state', () => {
    const action = { type: 'FETCH_DATA' }
    const state = { ...initialState, error: 'ERROR' }
    expect(detailsReducer(state, action)).toEqual({ ...initialState, isFetching: true })
  })

  test('Return Employees Data', () => {
    const action = { type: 'SET_EMPLOYEES_LIST', payload: EmployeesData }
    const state = { ...initialState, employeesList: [{ fullname: 'Antonio' }], isFetching: true }
    expect(detailsReducer(state, action)).toEqual({
      ...state,
      employeesList: EmployeesData,
      isFetching: false
    })
  })

  test('Change Date', () => {
    const action = { type: 'SET_DATE', payload: new Date(1995, 11, 17) }
    const state = { ...initialState, editMode: true, selectedDate: new Date(2005, 10, 6) }
    expect(detailsReducer(state, action)).toEqual({ ...initialState, selectedDate: action.payload })
  })

  test('Change Employee', () => {
    const action = { type: 'SET_EMPLOYEE', payload: 3 }
    const state = { ...initialState, editMode: true, selectedEmployee: 2 }
    expect(detailsReducer(state, action)).toEqual({ ...initialState, selectedEmployee: 3 })
  })

  test('Return Detailed Day', () => {
    const action = { type: 'SET_DETAILED_DAY', payload: detailedDayMock }
    const state = { ...initialState, editMode: true, isFetching: true }
    expect(detailsReducer(state, action)).toEqual({
      ...state,
      detailedDay: detailedDayMock,
      editMode: false,
      isFetching: false
    })
  })

  test('Return Error', () => {
    const action = { type: 'SET_ERROR', payload: 'ERROR' }
    expect(detailsReducer(initialState, action)).toEqual({
      ...initialState,
      error: 'ERROR',
      isFetching: false
    })
  })

  test('Disable Edit Mode', () => {
    const action = { type: 'TOGGLE_EDIT' }
    const state = { ...initialState, editMode: true }
    expect(detailsReducer(state, action)).toEqual(initialState)
  })
})
