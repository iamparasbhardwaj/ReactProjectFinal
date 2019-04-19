// ./react-redux-client/src/actions/SymptomActions.js

const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_Symptom'
  }
}

export const addNewSymptom = (Symptom) => {console.log(Symptom)
  return (dispatch) => {
    dispatch(addNewSymptomRequest(Symptom));
    return fetch(apiUrl, {
      method:'post',
      body: Symptom,
    }).then(response => {
      if(response.ok){
        response.json().then(data => {console.log(data.Symptom);
          dispatch(addNewSymptomRequestSuccess(data.Symptom, data.message))
        })
      }
      else{
        response.json().then(error => {
          dispatch(addNewSymptomRequestFailed(error))
        })
      }
    })
  }
}

export const addNewSymptomRequest = (Symptom) => {
  return {
    type: 'ADD_NEW_Symptom_REQUEST',
    Symptom
  }
}

export const addNewSymptomRequestSuccess = (Symptom,message) => {
  return {
    type: 'ADD_NEW_Symptom_REQUEST_SUCCESS',
    Symptom:Symptom,
    message:message
  }
}

export const addNewSymptomRequestFailed = (error) => {
  return {
    type: 'ADD_NEW_Symptom_REQUEST_FAILED',
    error
  }
}

//Async action
export const fetchSymptoms = () => {
  // Returns a dispatcher function
  // that dispatches an action at later time
  return (dispatch) => {

    dispatch(fetchSymptomsRequest());
    // Returns a promise
    return fetch(apiUrl)
                .then(response => {
                  if(response.ok){
                    response.json().then(data => {
                      dispatch(fetchSymptomsSuccess(data.Symptoms,data.message));
                    })
                  }
                  else{
                    response.json().then(error => {
                      dispatch(fetchSymptomsFailed(error));
                    })
                  }
                })


  }
}

export const fetchSymptomsRequest = () => {
  return {
    type:'FETCH_SymptomS_REQUEST'
  }
}


//Sync action
export const fetchSymptomsSuccess = (Symptoms,message) => {
  return {
    type: 'FETCH_SymptomS_SUCCESS',
    Symptoms: Symptoms,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchSymptomsFailed = (error) => {
  return {
    type:'FETCH_SymptomS_FAILED',
    error
  }
}

export const fetchSymptomById = (SymptomId) => {
  return (dispatch) => {
    dispatch(fetchSymptomRequest());
      // Returns a promise
      return fetch(apiUrl + SymptomId)
             .then(response => {console.log(response)
               if(response.ok){
                 response.json().then(data => {
                   dispatch(fetchSymptomSuccess(data.Symptom[0], data.message));
                 })
               }
               else{
                 response.json().then(error => {
                   dispatch(fetchSymptomFailed(error));
                 })
               }
             })

  }
}

export const fetchSymptomRequest = () => {
  return {
    type:'FETCH_Symptom_REQUEST'
  }
}


//Sync action
export const fetchSymptomSuccess = (Symptom,message) => {
  return {
    type: 'FETCH_Symptom_SUCCESS',
    Symptom: Symptom,
    message: message,
    receivedAt: Date.now
  }
}

export const fetchSymptomFailed = (error) => {
  return {
    type:'FETCH_Symptom_FAILED',
    error
  }
}

export const showEditModal = (SymptomToEdit) => {
  return {
    type:'SHOW_EDIT_MODAL',
    Symptom:SymptomToEdit
  }
}

export const hideEditModal = () => {
  return {
    type:'HIDE_EDIT_MODAL'
  }
}

export const editSymptom = (Symptom) => {
    return (dispatch) => {
      dispatch(editSymptomRequest(Symptom));
      return fetch(apiUrl, {
        method:'put',
        body:Symptom
      }).then(response => {
        if(response.ok){
          response.json().then(data => {
            dispatch(editSymptomSuccess(data.Symptom,data.message));
          })
        }
        else{
          response.json().then(error => {
            dispatch(editSymptomFailed(error));
          })
        }
      })
    }
}

export const editSymptomRequest = (Symptom) => {
   return {
     type:'EDIT_Symptom_REQUEST',
     Symptom
   }
}

export const editSymptomSuccess = (Symptom,message) => {
  return {
    type:'EDIT_Symptom_SUCCESS',
    Symptom:Symptom,
    message:message
  }
}

export const editSymptomFailed = (error) => {
  return {
    type:'EDIT_Symptom_FAILED',
    error
  }
}

export const deleteSymptom = (Symptom) => {
  return (dispatch) => {
    dispatch(deleteSymptomRequest(Symptom));
    return fetch(apiUrl + Symptom._id ,{
      method:'delete'
    }).then(response => {
      if(response.ok){
        response.json().then(data => {
          dispatch(deleteSymptomSuccess(data.message));
        })
      }
      else{
        response.json().then(error => {
          dispatch(deleteSymptomFailed(error));
        })
      }
    })

  }
}

export const deleteSymptomRequest = (Symptom) => {
   return {
     type:'DELETE_Symptom_REQUEST',
     Symptom
   }
}

export const deleteSymptomSuccess = (message) => {
  return {
    type:'DELETE_Symptom_SUCCESS',
    message:message
  }
}

export const deleteSymptomFailed = (error) => {
  return {
    type:'DELETE_Symptom_FAILED',
    error
  }
}

export const showDeleteModal = (SymptomToDelete) => {
  return {
    type:'SHOW_DELETE_MODAL',
    Symptom:SymptomToDelete
  }
}

export const hideDeleteModal = () => {
  return {
    type:'HIDE_DELETE_MODAL'
  }
}
