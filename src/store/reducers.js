
const initialState = {};

const reducer = (state = initialState, action) => {
  if (action.type === 'SET_TASKSDATA') {
    return {
      ...state,
      TasksData: action.value,
    };
  }
  if (action.type === 'SET_FORM_VALIDITY') {
    return {
      ...state,
      FormIsNotValid: action.value,

    };
  }

  return state;
};

export default reducer;
