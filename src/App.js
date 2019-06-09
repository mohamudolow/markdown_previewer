import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';

const marked = require('marked');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder
    };
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }
  updateMarkdown(event) {
    this.setState({
      markdown: event.target.value
    });
  }
render() {
  return (
    <div className="App container">
    <div>
    <Form>
      <FormGroup controlId="formControlsTextarea">
    <FormLabel>Markdown Input</FormLabel><br />
    <FormControl as="textarea" rows="10" placeholder="Enter Markdown" value={this.state.markdown} onChange={this.updateMarkdown}/>
    </FormGroup>
    </Form>
    </div>
    
    <div>
    <h2>Markdown Output</h2>
    <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}>
        </div>
    </div>
    </div>
  );
}
}

const placeholder = `# This is a Markdown Previewer
## Sub-heading can go here 
Here is where to include some more cool stuff`;

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
