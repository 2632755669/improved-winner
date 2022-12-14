import React from 'react';
import ReactDom from 'react-dom';
import './styles/index.css';

function App() {
  return <div>hello world</div>;
}

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
