import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import {Form, FormGroup, FormControl, FormLabel} from 'react-bootstrap';

const marked = require('marked');
const highlightJs = require('highlight.js');

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`;
}
marked.setOptions({
  renderer,
  highlight: function(code) {
    return highlightJs.highlightAuto(code).value;
  },
  breaks: true
});

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
    <div id="input" className="col-sm-6">
    <div id="editor">
    <Form>
      <FormGroup controlId="formControlsTextarea">
    <FormLabel className="h2">Markdown Input:</FormLabel>
    <FormControl id="textarea" as="textarea" rows="18" placeholder="Enter Markdown" value={this.state.markdown} onChange={this.updateMarkdown}/>
    </FormGroup>
    </Form>
    </div>
    </div>
    
    <div id="output" className="col-sm-6">
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
      `### Headers

# Header 1
## Header 2 


### Text Decorations

*Italic*
**Bold**
***Bold & Italic***

### List
- List one
- List two
- List three

### Links
[FreeCodeCamp] (http://www.freecodecamp.org "The most popular free programming resource for beginner developers who are learning to code")
[Facebook] (http:www.facebook.com "The most popular social media site")
[JavaScript] (https://developer.mozilla.org/en-US/docs/Web/JavaScript "A programming language for the web")

### Image
![Alt text](https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=366&q=80 'some code')

### Blockquote
> “There are two motives for reading a book; one, that you enjoy it; the other, that you can boast about it [on Goodreads].” - Bertrand Russell

### Code
\`npm install create-react-app\`
\`\`\`

function squareNumber(a) {
  return a * a;
}

const j = 4;
squareNumber(j)
/*const k = 19;*/


\`\`\`
`;

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
