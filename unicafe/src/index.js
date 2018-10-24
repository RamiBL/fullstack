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
                <Button nimi= 'hyvä' funktio={this.hyva} tyyppi={this.state.hyva}/>
                <Button nimi = 'neutraali' funktio={this.neutraali} tyyppi={this.state.neutraali}/>
                <Button nimi = 'paha' funktio={this.paha} tyyppi={this.state.paha}/>
                <h1>keskiarvo: {keskiarvo ? keskiarvo : 0}</h1>
                <h1>positiivisia: {prosentti ? prosentti : 0}%</h1>
                <Statistic props={keskiarvo} />
            </div>
        )
    }
}
const Statistics = () => {
    return (
        <div>  
        </div>
    )
}
const Statistic = (props) => {
    console.log(props.keskiarvo)
    return (
        <div>
            <h1>{props ? 'kesk' : 'eikesk'} </h1>
        </div>
    )
}

const Button = ({nimi, tyyppi, funktio}) => {
    console.log('nimi', nimi)
    return (
        <div>
            <button onClick={funktio}>{nimi}</button>
            <h1>{tyyppi}</h1>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));


