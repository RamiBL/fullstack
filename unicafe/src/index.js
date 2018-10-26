import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        hyva: 0,
        neutraali: 0,
        paha: 0,
        kaikki: 0,
        palautettu: false,
    }
    hyva = () => {
        this.setState({hyva: this.state.hyva + 1,
                       kaikki: this.state.kaikki + 1,
                       palautettu: true})
    }
    neutraali = () => {
        this.setState({neutraali: this.state.neutraali + 1,
                       kaikki: this.state.kaikki + 1,
                       palautettu: true})
    }
    paha = () => {
        this.setState({paha: this.state.paha + 1,
                       kaikki: this.state.kaikki + 1,
                       palautettu: true})
    }
    
    render(){  
        const keskiarvo = (this.state.hyva - this.state.paha)/this.state.kaikki ? (this.state.hyva - this.state.paha)/this.state.kaikki : 0
        const prosentti = (this.state.hyva / this.state.kaikki) * 100 ? (this.state.hyva / this.state.kaikki) * 100 : 0
 
        return (
            <div>
                <Button nimi= 'hyvä' funktio={this.hyva} tyyppi={this.state.hyva} palautettu={this.state.palautettu}/>
                <Button nimi = 'neutraali' funktio={this.neutraali} tyyppi={this.state.neutraali} palautettu={this.state.palautettu}/>
                <Button nimi = 'paha' funktio={this.paha} tyyppi={this.state.paha} palautettu={this.state.palautettu}/>
                <Statistics keskiarvo={keskiarvo} prosentti={prosentti} palautettu={this.state.palautettu} />
            </div>
        )
    }
}
const Statistics = (props) => {
    const {keskiarvo, prosentti, palautettu} = props
    if (palautettu) {
    return (
        <div>  
            <Statistic nimi='keskiarvo' arvo={keskiarvo} prosentti='ei' />
            <Statistic nimi='positiivisia' arvo={prosentti} prosentti='kylla'/>
        </div>   
    ) 
    }
    return (
        <div>
            <h1>Statistiikka</h1>
            Anna palautetta
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

const Button = (props) => {
    const {nimi, tyyppi, funktio, palautettu} = props
    console.log('nimi', nimi)
    return (
        <div>
            <button onClick={funktio}>{nimi}</button>
            <h1>{palautettu ? tyyppi : ''}</h1>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));


