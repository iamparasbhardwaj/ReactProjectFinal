// ./react-redux-client/src/components/SymptomEditForm.js
import React from 'react';
import { FormGroup,ControlLabel,FormControl,Button } from 'react-bootstrap';

const SymptomEditForm = (props) => {
  return (
    <form className="form form-horizontal" id="EditSymptomForm" onSubmit={props.editSymptom}>
    <div className="row">
    <div className="col-md-12">
    <FormGroup>
          <ControlLabel>Symptom: </ControlLabel>
          <input type="hidden" value={props.SymptomData._id} name="id"/>
            <FormControl
              type="text" placeholder="Enter Symptom"
              name="SymptomText" defaultValue={props.SymptomData.SymptomText}
               />
        </FormGroup>
        </div>
        <div className="col-md-12">
        <FormGroup>
              <ControlLabel>Description: </ControlLabel>
                <FormControl
                  componentClass="textarea" placeholder="Enter description"
                  name="SymptomDesc" defaultValue={props.SymptomData.SymptomDesc}
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

export default SymptomEditForm;
