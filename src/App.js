import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            score: 0
        }
    }
    handleScore = (e) => {
        let scoreAction = parseInt(e.target.value, 0);
        this.setState({score: this.state.score + scoreAction});
    }

    scoreColor() {
        return this.state.score > 0 ? 'green' : 'red';
    }

    render() {
        return (
            <div className="App">
              <h1>Testing React Apps</h1>
              <div>
                <button onClick={this.handleScore} className="btn btn-success btn-increment" value={1}>Increment Score</button>
                {' '}
                <button onClick={this.handleScore} className="btn btn-danger btn-decrement" value={-1}>Decrement Score</button>
              </div>
              <div>
                <h3>Settle the Score:  </h3>
                <h2 style={{color: this.scoreColor()}}>{this.state.score}</h2>
              </div>
            </div>
        );
    }
}

export default App;
