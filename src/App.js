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
    <div className="header row">
    <div className="col-sm-12"> 
    <h1 className="h1">Markdown Previewer</h1>
    </div>
    </div>
    
    <div className="main row">
    <div id="input" className="col-sm-5">
    <div id="editor">
    <Form>
      <FormGroup controlId="formControlsTextarea">
    <FormLabel className="h2">Markdown Input:</FormLabel>
    <FormControl id="textarea" as="textarea" rows="18" placeholder="Enter Markdown" value={this.state.markdown} onChange={this.updateMarkdown}/>
    </FormGroup>
    </Form>
    </div>
    </div>
    
    <div className="col-sm-2"></div>
    
    <div id="output" className="col-sm-5">
    <h2 className="h2">Markdown Output:</h2>
    <div id="preview">
    <div dangerouslySetInnerHTML = {{__html: marked(this.state.markdown)}}>
    </div>
    </div>
    </div>
</div>
    </div>
  );
}
}

const placeholder = 
      `# This is a Markdown Previewer
## Sub-heading can go here 

Here is where to include some more cool stuff
`;

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
