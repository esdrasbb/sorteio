import React, { Component } from "react";

class Sorteio extends Component {
  constructor() {
    super();

    var _qtdAluno = 1;
  }

  handleSubmit(event) {
    event.preventDefault();
    let qtdAluno = this._qtdAluno.value;
    console.log(qtdAluno);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Quantidade de alunos:{" "}
          <input type="number" ref={input => (this._qtdAluno = this)} /> <br />
          <input type="submit" value="Calcular" />
        </form>
      </div>
    );
  }
}

export default Sorteio;
