// ./react-redux-client/src/reducers/appReducer.js
const INITIAL_STATE = {
  showAddSymptom: false
}

const appReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ADD_Symptom':
          return {
            ...currentState,showAddSymptom: !currentState.showAddSymptom
          }


    default:
       return currentState;

  }
}

export default appReducer;
