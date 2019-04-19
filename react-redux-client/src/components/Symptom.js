// ./react-redux-client/src/components/Symptom.js
import React from 'react';

export default class Symptom extends React.Component {
  componentDidMount(){
    this.props.mappedfetchSymptomById(this.props.params.id);
  }

  render(){
    const SymptomState = this.props.mappedSymptomState;
    return(
      <div className="SymptomDetail">
       <h2>Symptom Detail</h2>
         {!SymptomState.Symptom && SymptomState.isFetching &&
           <div>
             <p>Loading Symptom....</p>
           </div>
         }
       {SymptomState.Symptom && !SymptomState.isFetching &&
         <div>
           <h3>{SymptomState.Symptom.SymptomText}</h3>
           <p>{SymptomState.Symptom.SymptomDesc}</p>
         </div>
       }
      </div>
    );
  }
}
