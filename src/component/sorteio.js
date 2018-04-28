import React, { Component } from "react";
import BigNumber from './bigNumber';

class Sorteio extends Component {
    constructor() {
        super();

        this.state = {
            _qtdAluno: 1,
            _numSorteado: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }

    handleSubmit(event) {
        event.preventDefault();
        const qtdAluno = this.state._qtdAluno;
        this.setState({ _numSorteado: this.getRandomInt(qtdAluno) });        
    }

    handleChange = e => {
        let newState = {};
        newState[e.target.name] = e.target.value;
        this.setState(newState);
        this.setState({_numSorteado:0})
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    Quantidade de alunos: <input name="_qtdAluno" type="number" required onChange={this.handleChange} value={this.state._qtdAluno} />
                    <br />
                    <br />
                    <input type="submit" value="Calcular" />
                </form>
                {this.state._numSorteado !== 0 ? <BigNumber value={this.state._numSorteado} /> : null}
            </div>
        );
    }
}

export default Sorteio;
