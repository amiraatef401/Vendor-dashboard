import React, { Component } from 'react';
import Home from './components/Home';

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
