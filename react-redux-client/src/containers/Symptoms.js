// ./react-redux-client/src/containers/Symptoms.js
import { connect } from 'react-redux';
import * as SymptomActions from '../actions/SymptomActions';
import Symptoms from '../components/Symptoms';

// map state from store to props
const mapStateToProps = (state,ownProps) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedSymptomState: state.SymptomState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    fetchSymptoms: () => dispatch(SymptomActions.fetchSymptoms()),
    mappedEditSymptom: SymptomToEdit => dispatch(SymptomActions.editSymptom(SymptomToEdit)),
    mappedshowEditModal: SymptomToEdit => dispatch(SymptomActions.showEditModal(SymptomToEdit)),
    mappedhideEditModal: () => dispatch(SymptomActions.hideEditModal()),
    mappedDeleteSymptom: SymptomToDelete => dispatch(SymptomActions.deleteSymptom(SymptomToDelete)),
    mappedshowDeleteModal: SymptomToDelete => dispatch(SymptomActions.showDeleteModal(SymptomToDelete)),
    mappedhideDeleteModal: () => dispatch(SymptomActions.hideDeleteModal())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Symptoms);
