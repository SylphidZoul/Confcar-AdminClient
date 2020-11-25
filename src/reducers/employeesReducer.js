export const actions = {
  FETCH_DATA: 'FETCH_DATA',
  SET_EMPLOYEE_LIST: 'SET_EMPLOYEE_LIST',
  ENABLE_EDIT_MODE: 'ENABLE_EDIT_MODE',
  DISABLE_EDIT_MODE: 'DISABLE_EDIT_MODE',
  FAILED_CONNECTION: 'FAILED_CONNECTION',
  TOGGLE_SHOW_INACTIVES: 'TOGGLE_SHOW_INACTIVES'
}

export const initialState = {
  employeesList: [],
  isFetching: false,
  editMode: false,
  selectedEmployee: -1,
  showInactives: false
}

export const employeesReducer = (state, action) => {
  switch (action.type) {
    case actions.FETCH_DATA:
      return {
        ...state,
        isFetching: true
      }
    case actions.SET_EMPLOYEE_LIST:
      return {
        ...state,
        isFetching: false,
        employeesList: action.payload
      }
    case actions.ENABLE_EDIT_MODE:
      return {
        ...state,
        editMode: true,
        selectedEmployee: action.payload
      }
    case actions.DISABLE_EDIT_MODE:
      return {
        ...state,
        editMode: false,
        selectedEmployee: -1
      }
    case actions.FAILED_CONNECTION:
      return {
        ...state,
        isFetching: false
      }
    case actions.TOGGLE_SHOW_INACTIVES:
      return {
        ...state,
        showInactives: !state.showInactives
      }
    default:
      return state
  }
}
