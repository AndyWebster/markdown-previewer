import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import marked from "marked";

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};

const MarkdownPreview = props => {
  return (
    <div
      style={{ maxWidth: "900px" }}
      className="card p-3 mx-auto"
      id="preview"
      dangerouslySetInnerHTML={{ __html: marked(props.input, { renderer: renderer, breaks: true }) }}
    />
  );
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  render() {
    return (
      <div className="App container-fluid bg-secondary w-100 m-0 p-3">
        <div className="card p-3 mb-3 mx-auto" style={{ maxWidth: "900px" }}>
          <span className="card-title text-secondary m-0 px-3">
            <p className="h3">Markdown</p>
            <hr />
          </span>

          <div className="card-body p-0">
            <textarea
              className="form-control  bg-light"
              value={this.state.input}
              name="editor"
              id="editor"
              rows="10"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <MarkdownPreview input={this.state.input} />
      </div>
    );
  }
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

export default App;
