import './App.css';
import LogoDinoco from './imgs/logo-dinoco.png';
import Button from './components/Button';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  const [numClick, setNumClick] = useState(0);

  const driverClick = () =>{
    setNumClick(numClick + 1);

    console.log("Clic");
  }

  const restratCount = () =>{
    setNumClick(0)
    console.log("Restart");
  }

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img 
          className='logo'
          src ={LogoDinoco}
          alt='Logo'
        />
      </div>
      <div className='contenedor-principal'>
      <Counter clicks={numClick} />
        <Button 
        text='Clic'
        clickButton={true}
        driverClick={driverClick} />
        <Button 
          text='Restart'
          clickButton={false}
          driverClick={restratCount}
        />
      </div>
    </div>
  );
}

export default App;
