import React, { Component } from "react";
import loading from "../assets/img/giphy.gif";

export default class BigNumber extends Component {
    constructor() {
        super();

        this.state = {
            show: true
        };
    }

    delayState() {
        setTimeout(() => {
            this.setState({
                show: false
            });
        }, 2000);
    }

    render() {
        if (this.state.show) {
            this.delayState();
            return (
                <div>
                    <img src={loading} alt="loading..." />
                </div>
            );
        }

        return (
            <div>
                <br />
                <br />
                <h1>{this.props.value}</h1>
            </div>
        );
    }
}
