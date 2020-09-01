import React from 'react';
import { StateProvider } from './Store'
import Log from './Log'
import Greeter from './Greeter'

function App() {
  return (
    <div className="App">
      <StateProvider>
        <Greeter />
        <Log />
      </StateProvider>
    </div>
  );
}

export default App;
