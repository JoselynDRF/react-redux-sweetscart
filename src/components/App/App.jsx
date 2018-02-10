import React, { Component } from 'react';
import 'normalize-css';
import './app.scss';

import Header from './Header/Header';
import Content from './Content/Content';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
