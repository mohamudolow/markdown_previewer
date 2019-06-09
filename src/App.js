import React from 'react';
import './App.css';
import {Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';

const marked = require('marked');

class App extends React.Component {
render() {
  return (
    <div className="App container">
    <div>
    <Form>
      <FormGroup controlId="formControlsTextarea">
    <FormLabel>Markdown Input</FormLabel>
    <FormControl as="textarea" rows="5" placeholder="Enter Markdown"/>
    </FormGroup>
    </Form>
    </div>
    </div>
  );
}
}

export default App;
