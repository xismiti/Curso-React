import React, {Component} from 'react'
import './App.css'
import cronometro from "./assets/cronometro.png"
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      btnName: "Start"
    }
    this.timer = null;
    this.start = this.start.bind(this);
    this.clear = this.clear.bind(this)
  }


  start(){

    if (this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      this.setState({btnName: 'Start'})



    } else{

      this.timer = setInterval(() =>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state)
      },100)

      this.setState({btnName: 'Pause'})

    }

    

  }

  clear(){

    const state = this.state;

    state.numero = 0;
    this.setState(state)

  }

  render (){
    return(
      <div className='container'>
        <img src={cronometro} alt=""className='img' />
        <a className='timer'>{this.state.numero.toFixed(1)}</a>
        <div className='areaBtn'>
          <a className='btn' onClick={this.start} >{this.state.btnName}</a>
          <a className='btn' onClick ={this.clear}>Clear</a>
        </div>
      </div>
    )
  }
}


export default App
