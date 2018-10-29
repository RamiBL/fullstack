import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: Array(anecdotes.length).fill(0),
      voted: false
    }
  }
  
  randomQuote = () => {
     this.setState({selected: Math.floor(Math.random()*6),
                    voted: false})
  }
  
  vote = () => {
    if (!this.state.voted) {
        const newvotes = [...this.state.votes]
        newvotes[this.state.selected] = newvotes[this.state.selected] + 1
        this.setState({votes: newvotes,
                       voted: true}) 
    }
  }

  render() {
    const most = Math.max(...this.state.votes)
    const biggest = this.state.votes.indexOf(most)
    console.log(biggest)
    return (
      <div>
        {anecdotes[this.state.selected]} 
        <br/>
        Has {this.state.votes[this.state.selected]} votes
        <br/>
        <button onClick={this.vote}>vote</button>
        <button onClick={this.randomQuote}>next anecdote</button>
        <h1>Anecdote with the most votes:</h1>
        {anecdotes[biggest]} <br/> 
        with {most} votes
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)