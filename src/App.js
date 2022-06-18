import React, {Component} from 'react';
import './style.css'

const nome = 'Desenvolvido por Matheus Matos'
const titulo = 'Cronômetro Online React'

class App extends Component{
  
  constructor(props){
    super(props);
    this.state = { 
      numero: 0,
      botao: 'START'
    };
    this.timer = null;
    this.start = this.start.bind(this);
    this.limpar = this.limpar.bind(this);
  }

  start(){
    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.botao = 'START';
    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.botao = 'PAUSAR';
    }

    this.setState(state);
  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'START';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <h1 className="nome">{titulo}</h1>
        <img src={require('./img/cronometro.png')} className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBtn">
          <a className="botao" onClick={this.start}>{this.state.botao}</a>
          <a className="botao" onClick={this.limpar}>LIMPAR</a>
        </div>
      <h2 className="coment">{nome}</h2>
      </div>
    );
  }
}

export default App;
