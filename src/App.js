import logo from './logo.svg';
import './App.css';
import Header from './comonents/Header/Header';
import { TextField } from '@mui/material';

function App() {
  return (
    <div className="App">
      < Header />
      <TextField id="outlined-basic" label="Team 1 Name" variant="outlined" />
      <TextField id="outlined-basic" label="Team 2 Name" variant="outlined" />
    </div>
  );
}

export default App;
