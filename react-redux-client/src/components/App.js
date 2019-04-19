// ./react-redux-client/src/components/App.js
import React from 'react';
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import SymptomForm from './SymptomForm';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.toggleAddSymptom = this.toggleAddSymptom.bind(this);
    this.addSymptom = this.addSymptom.bind(this);
  }

  toggleAddSymptom(e){
    e.preventDefault();
     this.props.mappedToggleAddSymptom();
  }

  addSymptom(e){
      e.preventDefault();
      const form = document.getElementById('addSymptomForm');
      if(form.SymptomText.value !== ""  && form.SymptomDesc.value !== ""){
        const data = new FormData();
       data.append('SymptomText', form.SymptomText.value);
        data.append('SymptomDesc', form.SymptomDesc.value);
        // const data = {
        //   SymptomText: form.SymptomText.value,
        //   SymptomDesc: form.SymptomDesc.value
        // }
        this.props.mappedAddSymptom(data);
      form.reset();
      }
      else{
        return ;
      }
  }

  render(){
    const appState = this.props.mappedAppState;
    return(
      <div>
      <Navbar inverse  collapseOnSelect className="customNav">
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/#">Mern Stack Symptom App</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={{ pathname: '/', query: {  } }}>
           <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
      <LinkContainer to={{ pathname: '/', query: {  } }} onClick={this.toggleAddSymptom}>
         <NavItem eventKey={1}>Add Symptom</NavItem>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  <div className="container">
  {appState.showAddSymptom &&
    <SymptomForm addSymptom={this.addSymptom} />
  }
  { /* Each Smaller Components */}
   {this.props.children}
  </div>
 </div>
    );
  }
}
