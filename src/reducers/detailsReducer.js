export const actions = {
  SET_EMPLOYEES_LIST: 'SET_EMPLOYEES_LIST',
  FETCH_DATA: 'FETCH_DATA',
  SET_DATE: 'SET_DATE',
  SET_EMPLOYEE: 'SET_EMPLOYEE',
  SET_DETAILED_DAY: 'SET_DETAILED_DAY',
  SET_ERROR: 'SET_ERROR',
  TOGGLE_EDIT: 'TOGGLE_EDIT'
}

export const initialState = {
  selectedDate: null,
  selectedEmployee: null,
  isFetching: true,
  detailedDay: {},
  error: '',
  employeesList: [],
  editMode: false
}

export const detailsReducer = (state, action) => {
  switch (action.type) {
    case actions.SET_EMPLOYEES_LIST:
      return {
        ...state,
        employeesList: action.payload,
        isFetching: false
      }
    case actions.FETCH_DATA:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case actions.SET_DATE:
      return {
        ...state,
        selectedDate: action.payload,
        editMode: false
      }
    case actions.SET_EMPLOYEE:
      return {
        ...state,
        selectedEmployee: action.payload,
        editMode: false
      }
    case actions.SET_DETAILED_DAY:
      return {
        ...state,
        isFetching: false,
        detailedDay: action.payload,
        editMode: false
      }
    case actions.SET_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case actions.TOGGLE_EDIT:
      return {
        ...state,
        editMode: !state.editMode
      }
    default:
      return state
  }
}
