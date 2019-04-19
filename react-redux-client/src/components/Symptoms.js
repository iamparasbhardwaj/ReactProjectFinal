// ./react-redux-client/src/components/Symptoms.js
import React from 'react';
import { Alert,Glyphicon,Button,Modal } from 'react-bootstrap';
import { Link } from 'react-router';
import SymptomEditForm from './SymptomEditForm';

export default class Symptoms extends React.Component {
  constructor(props){
    super(props);
    this.hideEditModal = this.hideEditModal.bind(this);
    this.submitEditSymptom = this.submitEditSymptom.bind(this);
    this.hideDeleteModal = this.hideDeleteModal.bind(this);
    this.cofirmDeleteSymptom = this.cofirmDeleteSymptom.bind(this);
  }

  componentWillMount(){
    this.props.fetchSymptoms();
  }


  showEditModal(SymptomToEdit){
     this.props.mappedshowEditModal(SymptomToEdit);
  }

  hideEditModal(){
     this.props.mappedhideEditModal();
  }

  submitEditSymptom(e){
    e.preventDefault();
    const editForm = document.getElementById('EditSymptomForm');
    if(editForm.SymptomText.value !== ""){
      const data = new FormData();
      data.append('id', editForm.id.value);
     data.append('SymptomText', editForm.SymptomText.value);
      data.append('SymptomDesc', editForm.SymptomDesc.value);
      this.props.mappedEditSymptom(data);
    }
    else{
      return;
    }

  }

  hideDeleteModal(){
    this.props.mappedhideDeleteModal();
  }

  showDeleteModal(SymptomToDelete){
    this.props.mappedshowDeleteModal(SymptomToDelete);
  }

  cofirmDeleteSymptom(){
    this.props.mappedDeleteSymptom(this.props.mappedSymptomState.SymptomToDelete);
  }

  render(){
    const SymptomState = this.props.mappedSymptomState;
    const Symptoms = SymptomState.Symptoms;
    const editSymptom = SymptomState.SymptomToEdit;
    return(
      <div className="col-md-12">
      <h3 className="centerAlign">Symptoms</h3>
      {!Symptoms && SymptomState.isFetching &&
        <p>Loading Symptoms....</p>
      }
      {Symptoms.length <= 0 && !SymptomState.isFetching &&
        <p>No Symptoms Available. Add A Symptom to List here.</p>
      }
      {Symptoms && Symptoms.length > 0 && !SymptomState.isFetching &&
      <table className="table booksTable">
      <thead>
       <tr><th>Symptom</th><th className="textCenter">Edit</th><th className="textCenter">Delete</th><th className="textCenter">View</th></tr>
      </thead>
      <tbody>
        {Symptoms.map((Symptom,i) => <tr key={i}>
        <td>{Symptom.SymptomText}</td>
         <td className="textCenter"><Button onClick={() => this.showEditModal(Symptom)} bsStyle="info" bsSize="xsmall"><Glyphicon glyph="pencil" /></Button></td>
         <td className="textCenter"><Button onClick={() => this.showDeleteModal(Symptom)} bsStyle="danger" bsSize="xsmall"><Glyphicon glyph="trash" /></Button></td>
         <td className="textCenter"><Link to={`/${Symptom._id}`}>View Details</Link> </td>
         </tr> )
      }
      </tbody>
      </table>
    }

    {/* Modal for editing Symptom */}
    <Modal
      show={SymptomState.showEditModal}
      onHide={this.hideEditModal}
      container={this}
      aria-labelledby="contained-modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title">Edit Your Symptom</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <div className="col-md-12">
    {editSymptom  &&
    <SymptomEditForm SymptomData={editSymptom} editSymptom={this.submitEditSymptom} />
    }
    {editSymptom  && SymptomState.isFetching &&
      <Alert bsStyle="info">
  <strong>Updating...... </strong>
      </Alert>
    }
    {editSymptom  && !SymptomState.isFetching && SymptomState.error &&
      <Alert bsStyle="danger">
  <strong>Failed. {SymptomState.error} </strong>
      </Alert>
    }
    {editSymptom  && !SymptomState.isFetching && SymptomState.successMsg &&
      <Alert bsStyle="success">
  Book <strong> {editSymptom.SymptomText} </strong>{SymptomState.successMsg}
      </Alert>
    }
    </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={this.hideEditModal}>Close</Button>
      </Modal.Footer>
    </Modal>

{/* Modal for deleting Symptom */}
    <Modal
    show={SymptomState.showDeleteModal}
    onHide={this.hideDeleteModal}
    container={this}
    aria-labelledby="contained-modal-title"
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title">Delete Your Book</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    {SymptomState.SymptomToDelete && !SymptomState.error && !SymptomState.isFetching &&
      <Alert bsStyle="warning">
 Are you sure you want to delete this Symptom <strong>{SymptomState.SymptomToDelete.SymptomText} </strong> ?
</Alert>
    }
    {SymptomState.SymptomToDelete && SymptomState.error &&
      <Alert bsStyle="warning">
 Failed. <strong>{SymptomState.error} </strong>
</Alert>
    }

    {SymptomState.SymptomToDelete && !SymptomState.error && SymptomState.isFetching &&
      <Alert bsStyle="success">
  <strong>Deleting.... </strong>
</Alert>
    }

    {!SymptomState.SymptomToDelete && !SymptomState.error && !SymptomState.isFetching&&
      <Alert bsStyle="success">
 Symptom <strong>{SymptomState.successMsg} </strong>
</Alert>
    }
    </Modal.Body>
    <Modal.Footer>
     {!SymptomState.successMsg && !SymptomState.isFetching &&
       <div>
       <Button onClick={this.cofirmDeleteSymptom}>Yes</Button>
       <Button onClick={this.hideDeleteModal}>No</Button>
       </div>
    }
    {SymptomState.successMsg && !SymptomState.isFetching &&
      <Button onClick={this.hideDeleteModal}>Close</Button>
    }
    </Modal.Footer>
  </Modal>
      </div>
    );
  }
}
