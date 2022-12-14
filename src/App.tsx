import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './layout';
import './App.less';

function App() {
  return (
    <Router basename="/soa/pc">
      <Layout>内容</Layout>
    </Router>
  );
}

export default App;
