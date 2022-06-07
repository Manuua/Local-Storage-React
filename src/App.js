import './App.css';
import React from 'react';
 
const App = () => {
  const [value, setValue] = React.useState('');
 
  const onChange = event => {
    localStorage.setItem('myValueInLocalStorage', event.target.value);
 
    setValue(event.target.value);
  };
 

  return (
    <div className="App">
      <div>
      <h1>Hello React with Local Storage!</h1>
 
      <input value={value} type="text" onChange={onChange} />
 
      <p>{value}</p>
    </div>
    </div>

    
  );
 }


export default App;
