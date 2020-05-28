import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import sushis from './sushis'; // use this sushi array instead of fetching... for fetching we'll use THUNK!

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    newMoney: ''
  }

  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState({ sushis })
    })
  }

  handleChange = e => this.setState({ newMoney: e.target.value })

  handleSubmit = e =>{
    e.preventDefault()
    const { budget, newMoney } = this.state;
    this.setState({ budget: budget + parseInt(newMoney), newMoney: ''})
  }


  eatSushi = (id, price, eaten ) => {
    if(price <= this.state.budget && !eaten){  
      let newSushis = this.state.sushis.map(sushi => {  
        if(sushi.id === id){  
          sushi.eaten = true  
        }
        return sushi  
      })
      this.setState({ 
        sushis: newSushis,
        eatenSushis: [...this.state.eatenSushis, id],
        budget: this.state.budget - price
      })
    } else {
      window.open("https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSklpwBW2RjOugiPzZ1iu1tED80vDAO8BoMwhwb1VdBD7WQ7nh0")
    }
  }

  render() {
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label>New Monies: 
            <input type="number" onChange={this.handleChange} value={this.state.newMoney} placeholder="Add Money Here..."/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <SushiContainer sushis={this.state.sushis} eatSushi={this.eatSushi} />
        <Table eatenSushis={this.state.eatenSushis} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;