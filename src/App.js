import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PhonesListWrap } from './components/Containers'

class App extends Component {
  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Verizon Wireless Smartphones</h1>
        </header>
        <PhonesListWrap/>
      </div>
    );
  }
}

export default App;
