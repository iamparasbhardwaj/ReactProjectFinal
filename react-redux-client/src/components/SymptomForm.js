// ./react-redux-client/src/components/SymptomForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const SymptomForm = (props) => {
  return (
    <form className="form form-horizontal" id="addSymptomForm" onSubmit={props.addSymptom}>
    <div className="row">
    <h3 className="centerAlign">Add Your Symptom</h3>
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Symptom: </ControlLabel>
            <FormControl
              type="text" placeholder="Enter Symptom"
              name="SymptomText"
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="SymptomDesc"
                   />
            </FormGroup>
            </div>
          </div>
          <FormGroup>
              <Button type="submit" bsStyle="success" bsSize="large" block>Submit</Button>
          </FormGroup>
    </form>
  );
}

export default SymptomForm;
