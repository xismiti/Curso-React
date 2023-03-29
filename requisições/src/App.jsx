import React, { useEffect, useState } from 'react'
import './App.css'


//https://sujeitoprogramador.com/rn-api/?api=posts





function App() {
  const [nutri, setNutri] = useState([]);
  useEffect(()=>{
    function loadApi(){
      const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'
      fetch(url)
        .then((r)=> r.json())
        .then((json) => {
          setNutri(json)
        })

    }
    loadApi();
  },[])
  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>
      
      {nutri.map((item)=>{
        return(
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt="capa" />
            <p className='subtitulo'>{item.subtitulo}</p>
            <a className='botao'>Acessar</a>

          </article>
        )
      })}

    </div>
  )
}

export default App
