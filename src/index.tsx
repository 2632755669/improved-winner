import React from 'react';
import ReactDom from 'react-dom';

function App() {
  return <div>hello world</div>;
}

ReactDom.render(<App />, document.getElementById('root') as HTMLElement);
