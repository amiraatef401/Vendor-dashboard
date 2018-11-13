import React, { Component } from 'react';
import Home from './componets/Home';

class App extends Component {
  componentDidMount() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
