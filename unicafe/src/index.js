import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        hyva: 0,
        neutraali: 0,
        paha: 0,
        kaikki: 0
    }
    hyva = () => {
        this.setState({hyva: this.state.hyva + 1,
                       kaikki: this.state.kaikki + 1})
    }
    neutraali = () => {
        this.setState({neutraali: this.state.neutraali + 1,
                       kaikki: this.state.kaikki + 1})
    }
    paha = () => {
        this.setState({paha: this.state.paha + 1,
                       kaikki: this.state.kaikki + 1})
    }
    
    render(){  
        const keskiarvo = (this.state.hyva - this.state.paha)/this.state.kaikki
        const prosentti = (this.state.hyva / this.state.kaikki) * 100
 
        return (
            <div>
                <button onClick={this.hyva}>hyva</button>
                <div>{this.state.hyva}</div>
                <button onClick={this.neutraali}>neutraali</button>
                <div>{this.state.neutraali}</div>
                <button onClick={this.paha}>paha</button>
                <div>{this.state.paha}</div>
                <h1>keskiarvo: {keskiarvo ? keskiarvo : 0}</h1>
                <h1>prosentti: {prosentti ? prosentti : 0}%</h1>
            </div>
        )
}
}
ReactDOM.render(<App />, document.getElementById('root'));


