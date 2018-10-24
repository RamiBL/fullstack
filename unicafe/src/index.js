import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';

class App extends React.Component {
    state = {
        hyva: 0,
        neutraali: 0,
        paha: 0,
    }
    hyva = () => {
        this.setState({hyva: this.state.hyva + 1})
    }
    neutraali = () => {
        this.setState({neutraali: this.state.neutraali + 1})
    }
    paha = () => {
        this.setState({paha: this.state.paha + 1})
    }
    render(){   
        return (
            <div>
                <button className="span4 text-right" onClick={this.hyva}>hyva</button>
                <div>{this.state.hyva}</div>
                <button onClick={this.neutraali}>neutraali</button>
                <div>{this.state.neutraali}</div>
                <button onClick={this.paha}>paha</button>
                <div>{this.state.paha}</div>
            </div>
        )
}
}
ReactDOM.render(<App />, document.getElementById('root'));


