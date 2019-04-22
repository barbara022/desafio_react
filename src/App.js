import React, { Component } from 'react';
import './css/style.css';
import image1 from './1.jpg';
import image2 from './2.jpg';

class App extends Component {

  constructor() {
    super();
    this.state = {image: [
      {url: `""`},
      {url: `""`},
      {url: `""`},
      {url: `""`},
      {url: `""`},
      {url: `""`},
      {url: `""`},
      {url: `""`},
      {url: `""`}], 
      vez: 1}
    this.joga = this.joga.bind(this);
    this.verificarFimDeJogo = this.verificarFimDeJogo.bind(this);
    this.casasIguais = this.casasIguais.bind(this);
  }

  joga(evento) {
    if(this.state.vez === 1) {
      var currentTable = this.state.image;
      currentTable[parseInt(evento.currentTarget.id)-1] = {"url": `${image1}`, "check": "x"};
      this.setState({image: currentTable});
      this.setState({vez: 2});
    } else {
      var currentTable = this.state.image;
      currentTable[parseInt(evento.currentTarget.id)-1] = {"url": `${image2}`, "check": "o"};
      this.setState({image: currentTable});
      this.setState({vez: 1});
    }
    this.verificarFimDeJogo();
  } 

  verificarFimDeJogo(){
    var c1 = this.state.image[0].check;
    var c2 = this.state.image[1].check;
    var c3 = this.state.image[2].check;
    var c4 = this.state.image[3].check;
    var c5 = this.state.image[4].check;
    var c6 = this.state.image[5].check;
    var c7 = this.state.image[6].check;
    var c8 = this.state.image[7].check;
    var c9 = this.state.image[8].check;
    if( this.casasIguais(c1, c2, c3) || this.casasIguais(c4, c5, c6) || this.casasIguais(c7, c8, c9) ||
        this.casasIguais(c1, c4, c7) || this.casasIguais(c2, c5, c8) || this.casasIguais(c3, c6, c9) ||
        this.casasIguais(c1, c5, c9) || this.casasIguais(c3, c5, c7)){
        alert("Você ganhou um PlayStation!!!!!!");
    }
  }

  casasIguais(a, b, c){
    if(a === undefined || b === undefined || c === undefined) {
      return false;
    }
    if( (a === b) && (b === c)){
        return true;
    } else{
        return false;
    }
  }

  render() {
    return (
    <div>
      <div id="jogo">
      <div className="linha">
          <div className="casa" id="1" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[0].url})`}}></div>
          <div className="casa" id="2" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[1].url})`}}></div>
          <div className="casa" id="3" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[2].url})`}}></div>
      </div>
      <div className="linha">
          <div className="casa" id="4" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[3].url})`}}></div>
          <div className="casa" id="5" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[4].url})`}}></div>
          <div className="casa" id="6" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[5].url})`}}></div>
      </div>
      <div className="linha">
          <div className="casa" id="7" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[6].url})`}}></div>
          <div className="casa" id="8" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[7].url})`}}></div>
          <div className="casa" id="9" onClick={this.joga} style={{backgroundImage: `url(${this.state.image[8].url})`}}></div>
      </div>
    </div>
    <div id="resultado"></div>
    </div>
    )
  }
}

export default App;