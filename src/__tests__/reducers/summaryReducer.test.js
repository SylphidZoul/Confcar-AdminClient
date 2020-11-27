import { summaryReducer, initialState } from '../../reducers/summaryReducer'
import { employeeDataMock, totalDataMock } from '../../__mocks__/SummaryMock'

describe('Summary Reducer Tests', () => {
  test('Return same State', () => {
    expect(summaryReducer(initialState, '')).toEqual(initialState)
  })

  test('Return Fetching Data state', () => {
    const action = { type: 'FETCH_DATA' }
    expect(summaryReducer(initialState, action)).toEqual({ ...initialState, isFetching: true })
  })

  test('Show Calendar', () => {
    const action = { type: 'TOGGLE_CALENDAR' }
    expect(summaryReducer(initialState, action)).toEqual({ ...initialState, showCalendar: true })
  })

  test('Change summary type', () => {
    const action = { type: 'SET_SUMMARY_TYPE', payload: { value: 'year', string: 'Año' } }
    expect(summaryReducer(initialState, action)).toEqual({ ...initialState, summaryType: 'year', typeString: 'Año' })
  })

  test('Return Detailed state', () => {
    const action = {
      type: 'SET_DATA',
      payload: {
        detailsPerEmployee: employeeDataMock,
        totalData: totalDataMock
      }
    }
    expect(summaryReducer(initialState, action)).toEqual({
      ...initialState,
      employeesData: employeeDataMock,
      totalData: totalDataMock
    })
  })
})
