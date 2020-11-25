export const actions = {
  FETCH_DATA: 'FETCH_DATA',
  SET_DATA: 'SET_DATA',
  TOGGLE_CALENDAR: 'TOGGLE_CALENDAR',
  SET_SUMMARY_TYPE: 'SET_SUMMARY_TYPE'
}

export const initialState = {
  totalData: {},
  employeesData: [],
  isFetching: false,
  showCalendar: false,
  summaryType: 'week',
  typeString: 'Semana'
}

export const summaryReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_DATA:
      return {
        ...state,
        isFetching: true
      }
    case actions.SET_DATA:
      return {
        ...state,
        isFetching: false,
        employeesData: action.payload.detailsPerEmployee,
        totalData: action.payload.totalData
      }
    case actions.TOGGLE_CALENDAR:
      return {
        ...state,
        showCalendar: !state.showCalendar
      }
    case actions.SET_SUMMARY_TYPE:
      return {
        ...state,
        summaryType: action.payload.value,
        typeString: action.payload.string
      }
    default:
      return state
  }
}
