// ./react-redux-client/src/containers/Symptom.js
import { connect } from 'react-redux';
import * as SymptomActions from '../actions/SymptomActions';
import Symptom from '../components/Symptom';

// map state from store to props
const mapStateToProps = (state) => {
  return {
    //you can now say this.props.mappedAppSate
    mappedSymptomState: state.SymptomState
  }
}

// map actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    //you can now say this.props.mappedAppActions
    mappedfetchSymptomById: SymptomId => dispatch(SymptomActions.fetchSymptomById(SymptomId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Symptom);
