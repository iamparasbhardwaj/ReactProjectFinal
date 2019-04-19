// ./react-redux-client/src/reducers/SymptomReducer.js
const INITIAL_STATE = {
  Symptoms:[],
  Symptom:null,
  isFetching: false,
  error: null,
  successMsg:null,
  showDeleteModal: false,
  SymptomToDelete: null,
  showEditModal: false,
  SymptomToEdit: null,
  newSymptom: null
}

export  const SymptomReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_SymptomS_REQUEST':
          return {
            ...currentState,
            Symptoms:[],
            Symptom:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
          }

    case 'FETCH_SymptomS_SUCCESS':
          return {
            ...currentState,
            Symptoms:action.Symptoms,
            Symptom:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
          }

    case 'FETCH_SymptomS_FAILED':
          return {
            ...currentState,
            Symptoms:[],
            Symptom:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
          }

    case 'FETCH_Symptom_REQUEST':
          return {
            ...currentState,
            Symptoms:currentState.Symptoms,
            Symptom:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
          }

    case 'FETCH_Symptom_SUCCESS':
          return {
            ...currentState,
            Symptoms:currentState.Symptoms,
            Symptom:action.Symptom,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
          }

    case 'FETCH_Symptom_FAILED':
          return {
            ...currentState,
            Symptoms:[],
            Symptom:null,
            isFetching: false,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
          }

    case 'ADD_NEW_Symptom_REQUEST':
          return {
            ...currentState,
            Symptoms:currentState.Symptoms,
            Symptom:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
            newSymptom: action.Symptom
          }

    case 'ADD_NEW_Symptom_REQUEST_FAILED':
          return {
            ...currentState,
            Symptoms:currentState.Symptoms,
            Symptom:null,
            isFetching: true,
            error: action.error,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
            newSymptom: null
          }

    case 'ADD_NEW_Symptom_REQUEST_SUCCESS':
          const nextState =  {
            ...currentState,
            Symptoms:[...currentState.Symptoms, action.Symptom],
            Symptom:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: false,
            SymptomToEdit: null,
            newSymptom: action.Symptom
          }
        return nextState;

  case 'SHOW_EDIT_MODAL':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          SymptomToDelete: null,
          showEditModal: true,
          SymptomToEdit: action.Symptom,
          newSymptom: null
        }

  case 'HIDE_EDIT_MODAL':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          SymptomToDelete: null,
          showEditModal: false,
          SymptomToEdit: null,
          newSymptom: null
        }

    case 'EDIT_Symptom_REQUEST':
          return {
            ...currentState,
            Symptoms:currentState.Symptoms,
            Symptom:null,
            isFetching: true,
            error: null,
            successMsg:null,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: true,
            SymptomToEdit: action.Symptom,
            newSymptom: null
          }

    case 'EDIT_Symptom_SUCCESS':
         const updatedSymptoms = currentState.Symptoms.map((Symptom) => {
           if(Symptom._id !== action.Symptom._id){
             //This is not the item we care about, keep it as is
             return Symptom;
           }
           //Otherwise, this is the one we want to return an updated value
           return { ...Symptom, ...action.Symptom }
         })
          return {
            ...currentState,
            Symptoms:updatedSymptoms,
            Symptom:null,
            isFetching: false,
            error: null,
            successMsg:action.message,
            showDeleteModal: false,
            SymptomToDelete: null,
            showEditModal: true,
            SymptomToEdit: action.Symptom,
            newSymptom: null
          }

  case 'EDIT_Symptom_FAILED':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: false,
          SymptomToDelete: null,
          showEditModal: true,
          SymptomToEdit: currentState.SymptomToEdit,
          newSymptom: null
        }

  case 'DELETE_Symptom_REQUEST':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: true,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          SymptomToDelete: action.Symptom,
          showEditModal: false,
          SymptomToEdit: null,
          newSymptom: null
        }

  case 'DELETE_Symptom_SUCCESS':
  const filteredSymptoms = currentState.Symptoms.filter((Symptom) => Symptom._id !== currentState.SymptomToDelete._id)
        return {
          ...currentState,
          Symptoms:filteredSymptoms,
          Symptom:null,
          isFetching: false,
          error: null,
          successMsg:action.message,
          showDeleteModal: true,
          SymptomToDelete: null,
          showEditModal: false,
          SymptomToEdit: null,
          newSymptom: null
        }


  case 'DELETE_Symptom_FAILED':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: false,
          error: action.error,
          successMsg:null,
          showDeleteModal: true,
          SymptomToDelete: null,
          showEditModal: false,
          SymptomToEdit: null,
          newSymptom: null
        }

  case 'SHOW_DELETE_MODAL':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: true,
          SymptomToDelete: action.Symptom,
          showEditModal: false,
          SymptomToEdit: null,
          newSymptom: null
        }

  case 'HIDE_DELETE_MODAL':
        return {
          ...currentState,
          Symptoms:currentState.Symptoms,
          Symptom:null,
          isFetching: false,
          error: null,
          successMsg:null,
          showDeleteModal: false,
          SymptomToDelete: null,
          showEditModal: false,
          SymptomToEdit: null,
          newSymptom: null
        }


    default:
       return currentState;

  }
}
