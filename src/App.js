import React from 'react';
import './App.css';
import objectDetectionSketch from './ObjectDetectionSketch';

import P5Wrapper from 'react-p5-wrapper';

function App() {
  return (
    <P5Wrapper sketch={objectDetectionSketch} />
  );
}

export default App;
