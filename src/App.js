import React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import logo from './logo.svg';
import './App.css';

const BlueBtn = styled('button')({
    color: 'darkslategray',
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
});

function App() {
  return (
      <div className="App">
          <BlueBtn>Hello Button</BlueBtn>
          <Button sx={{
              color: 'black',
              fontWeight: 'medium',
              mx: 0.5,
          }}>material button</Button>
        <h1>Hello World</h1>
    </div>
  );
}

export default App;
