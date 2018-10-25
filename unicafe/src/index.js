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
        const keskiarvo = (this.state.hyva - this.state.paha)/this.state.kaikki ? (this.state.hyva - this.state.paha)/this.state.kaikki : 0
        const prosentti = (this.state.hyva / this.state.kaikki) * 100 ? (this.state.hyva / this.state.kaikki) * 100 : 0
 
        return (
            <div>
                <Button nimi= 'hyvä' funktio={this.hyva} tyyppi={this.state.hyva}/>
                <Button nimi = 'neutraali' funktio={this.neutraali} tyyppi={this.state.neutraali}/>
                <Button nimi = 'paha' funktio={this.paha} tyyppi={this.state.paha}/>
                <Statistics keskiarvo={keskiarvo} prosentti={prosentti} />
            </div>
        )
    }
}
const Statistics = (props) => {
    const {keskiarvo, prosentti} = props
    return (
        <div>  
            <Statistic nimi='keskiarvo' arvo={keskiarvo} prosentti='ei' />
            <Statistic nimi='positiivisia' arvo={prosentti} prosentti='kylla'/>
        </div>
    )
}
const Statistic = (props) => {
    const {nimi, arvo, prosentti} = props
    return (
        <div>
            <h1>{nimi}: {arvo} {prosentti==='kylla' ? '%' : ''}</h1>
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


