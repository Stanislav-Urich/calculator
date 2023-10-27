import './App.css';
import Button from './components/button';
import Input from './components/input/Input';
import calc from './calculator.js'
import { useState } from 'react';


function App() {

  const [displayValue, setDisplayValue] = useState('');


  const changeInputValue = (val) => {

    setDisplayValue(prev => prev.toString() + val.toString())

    if (val === '=') {
      setDisplayValue(eval(displayValue).toString())
    }
    if (val === 'Ac') {
      setDisplayValue('')
    }



  }


  return (
    <div className="App">
      <h1>Calculator </h1>
      <Input value={displayValue} setDisplayValue={setDisplayValue} />
      <div className='numberField'>
        {calc.map((i, index) => <Button
          changeInputValue={changeInputValue}
          key={index}
          num={i} />)}
      </div>

    </div>
  );
}

export default App;
