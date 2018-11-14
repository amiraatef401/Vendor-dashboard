import React, { Component } from 'react';
import Home from './components/Home';
// import Login from './components/Login';

class App extends Component {
  componentDidMount() {
    return true;
  }

  render() {
    return (
      <div className="App">
        <Home />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
