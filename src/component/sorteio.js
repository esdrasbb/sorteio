import React, { Component } from "react";
import BigNumber from "./bigNumber";

class Sorteio extends Component {
    constructor() {
        super();

        this.state = {
            _listaAluno: [],
            _vencedor: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSorteio = this.handleSorteio.bind(this);
        this.handleLimpar = this.handleLimpar.bind(this);
        this.handleDeleteElement = this.handleDeleteElement.bind(this);
    }

    getRandomInt(max) {
        return Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }

    handleSubmit(event) {
        event.preventDefault();
        var aluno = this.refs.alunoNome.value;
        if (typeof aluno === "string" && aluno.length > 0) {
            this.setState({ _listaAluno: [...this.state._listaAluno, aluno] });
            this.refs.alunoForm.reset();
        }
    }

    handleSorteio = e => {
        const listaAluno = this.state._listaAluno;
        console.log(listaAluno);
        if (listaAluno.length >= 2) {
            let numSorteado = this.getRandomInt(listaAluno.length);
            console.log(numSorteado);
            this.setState({ _vencedor: listaAluno[numSorteado - 1] });
        }
    };

    handleLimpar = e => {
        this.setState({
            _listaAluno: [],
            _vencedor: ""
        });
    };

    handleDeleteElement (name) {
        this.setState({
            _listaAluno: this.state._listaAluno.filter(el => el !== name)
        });
        this.setState({
            _vencedor: ""
        });
      }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="list-group list-group-horizontal text-center" >
                        {this.state._listaAluno.map((aluno,i) =>{
                                return (
                                    <a href="#" key={aluno} onClick={() => { this.handleDeleteElement(aluno, i)}} 
                                     className="list-group-item list-group-item-horizontal list-group-item-info">
                                        {this.state._listaAluno[i]}
                                    </a>
                                );                            
                            }
                        )}
                    </div>
                </div>
                <br />
                <form className="form-horizontal" ref="alunoForm" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="alunoNome">Nome Aluno:</label>
                        <input autoFocus id="alunoNome" ref="alunoNome" type="text" required onChange={this.handleChange} />
                    </div>
                    <input className="btn btn-default" type="submit" value="Adicionar aluno" />
                </form>
                <br />
                <div className="row">
                    <input className="btn-sm btn-danger col-md-2" type="button" value="Limpar lista" onClick={this.handleLimpar.bind(this)} />
                    <input className="btn-lg btn-primary col-md-10" type="button" value="Sorteio" onClick={this.handleSorteio.bind(this)} />
                </div>
                {this.state._vencedor !== "" ? <BigNumber value={this.state._vencedor} /> : null}
            </div>
        );
    }
}

export default Sorteio;
