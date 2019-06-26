import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';

function Frase({frase}){
  return(
    <div className="frase">
      <h1>{frase}</h1>
    </div>
  )
}

function App() {


  const [frase, setFrase]=useState();


  const consultarApi= async ()=>{

    
      const resultado = await Axios('https://api.chucknorris.io/jokes/random')

      console.log(resultado.data.value)

      setFrase(resultado.data.value)
  }
  
  useEffect(
    () =>{
      consultarApi()
    },[]
  )



  return (
    <div className="contenedor">
      <Frase
        frase={frase}
      />

      <button onClick={consultarApi}>Generar Nueva</button>
    </div>
  )
}

export default App;
