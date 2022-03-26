import React,{useState} from 'react';
import './App.css';
import Intervalo from './Components/Intervalo';
import Card from './Components/Card';
import Media from './Components/Media';
import Soma from './Components/Soma';
import Sorteio from './Components/Sorteio';

function App() {
  const [min, setMin]  = useState(10)
  const [max, setMax]  = useState(100)
  return (
    <div className='App'>

      <h1>Projeto-Redux</h1>
      
      <div className="linha">
        <Intervalo min={min} max={max} 
        onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
      </div>

      <div className="linha">
       <Media  min={min} max={max}></Media>
       <Soma min={min} max={max}></Soma>
       <Sorteio min={min} max={max}></Sorteio>

      </div>
    </div>
  )
}

export default App;
