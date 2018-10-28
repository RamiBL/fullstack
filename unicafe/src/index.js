import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
    state = {
        ekstra: 0,
        hyva: 0,
        neutraali: 0,
        paha: 0,
        kaikki: 0,
        palautettu: false,
    }

    painettu = (props) => () => {
        const tila = {kaikki: this.state.kaikki +1, palautettu: true,}
        this.setState(Object.assign(props, tila))
    }
    
    render(){  
        const keskiarvo = (this.state.hyva - this.state.paha)/this.state.kaikki ? (this.state.hyva - this.state.paha)/this.state.kaikki : 0
        const prosentti = (this.state.hyva / this.state.kaikki) * 100 ? (this.state.hyva / this.state.kaikki) * 100 : 0
 
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <Button nimi='hyvä' funktio={this.painettu({hyva: this.state.hyva + 1})} tyyppi={this.state.hyva} palautettu={this.state.palautettu}/>
                            <Button nimi = 'neutraali' funktio={this.painettu({neutraali: this.state.neutraali + 1})} tyyppi={this.state.neutraali} palautettu={this.state.palautettu}/>
                            <Button nimi = 'paha' funktio={this.painettu({paha: this.state.paha + 1})} tyyppi={this.state.paha} palautettu={this.state.palautettu}/>                       
                        </tr>
                    </tbody>
                </table>
 
                <Statistics hyva={this.state.hyva} neutraali={this.state.neutraali} huono={this.state.paha} keskiarvo={keskiarvo} prosentti={prosentti} palautettu={this.state.palautettu} />
            </div>
        )
    }
}

const Statistics = (props) => {
    const {keskiarvo, prosentti, palautettu, hyva, neutraali, huono} = props
    if (palautettu) {
    return (
        <div>  
            <h1>Statistiikka</h1>
            <table>
                <tbody>
                        <Statistic nimi= 'hyvä' arvo={hyva} prosentti={false}/>
                        <Statistic nimi= 'neutraali' arvo={neutraali} prosentti={false}/>
                        <Statistic nimi= 'huono' arvo={huono} prosentti={false}/>
                        <Statistic nimi='keskiarvo' arvo={keskiarvo} prosentti={false} />
                        <Statistic nimi='positiivisia' arvo={prosentti} prosentti={true}/>                 
                </tbody>
            </table>
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
        <tr>
        <td>
            {nimi}
        </td>
        <td>
            {arvo} {prosentti ? '%' : ''}
        </td>
        </tr>
    )
}

const Button = (props) => {
    const {nimi, tyyppi, funktio, palautettu} = props
    return (
            <td>
            <button onClick={funktio}>{nimi}</button>
            </td>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));


