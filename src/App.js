import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DrumMachine from './component/drummachine/DrumMachine';

function App() {
  return (
    <div className="container d-flex align-items-center">
      <DrumMachine />
    </div>
  );
}

export default App;
