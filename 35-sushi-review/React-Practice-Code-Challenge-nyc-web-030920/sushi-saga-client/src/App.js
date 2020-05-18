import React, { Component } from 'react';
// UNCOMMENT BELOW FOR BASE VERSION
import SushiContainer from './containers/SushiContainer';
// UNCOMMENT BELOW FOR REFACTOR 1 
// import SushiContainer from './containers/SushiContainerFunctional';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [], // [{id: 1, name: '', price: 10}, {id: 2, name: '', price: 10}]
    eaten: [], // [ 5, 8, 3, 27, 47, 6 ]
    monies: 105,
    newMonies: '',
    // startIndex: 0 // UNCOMMENT FOR REFACTOR 1 
  }

  // UNCOMMENT BELOW FOR REFACTOR 1 
  // updateIndex = () => {
  //   let newIndex = this.state.startIndex + 4;
  //   if(newIndex >= this.state.sushis.length) {
  //     newIndex = 0
  //   }
  //   this.setState({ startIndex: newIndex })
  // }

  // an eaten array on app state that will hold the ids of eaten sushis

  componentDidMount(){
    fetch(API)
      .then(res => res.json())
      .then(data => {
        // console.log(data)
        this.setState({ sushis: data })
      })
  }

  handleEat = (id) => { // could take price as an argument instead

    // updating the eaten array by pushing an id into the array
    // ... if we're allowed to eat the sushi the person clicked
    
    // find the sushi using the id, so we can find the price
    let targetSushi = this.state.sushis.find(sushi => sushi.id === id )
    // if the price is right
    // and if we haven't eaten it already 
    if(targetSushi.price <= this.state.monies && !this.state.eaten.includes(id)){
      // then go eat it and update eaten and monies
      this.setState({ 
        eaten: [...this.state.eaten, id],
        monies: this.state.monies - targetSushi.price
      })
    } else { // otherwise nothing, alert the user
      alert(' get mo monies !!! ')
    }
  }

  handleChange = (event) => {
    this.setState({ newMonies: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // when i submit i need to add newMonies to monies on state
    // and clear newMonies
    this.setState({ monies: this.state.monies + parseInt(this.state.newMonies), newMonies: '' }) 
  }

  render() {
    console.log('app state: ', this.state)
    const { monies, newMonies, sushis, eaten, startIndex } = this.state; // startIndex included FOR REFACTOR 1 

    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label> Add value: 
            <input name="newMonies" value={newMonies} onChange={this.handleChange} placeholder="I got monies"/>
          </label>
          <button type="submit">Submit</button>
        </form>
        <SushiContainer 
          eaten={eaten}
          handleEat={this.handleEat}
          // UNCOMMENT BELOW FOR BASE VERSION
          sushis={sushis}
          // UNCOMMENT BELOW FOR REFACTOR 1 
          // sushis={sushis.slice(startIndex, startIndex + 4)} 
          // updateIndex={this.updateIndex}
          />
        <Table eaten={eaten} monies={monies}/>
      </div>
    );
  }
}

export default App;

// state
// value attr
// handleChange / onChange
// (sometimes) handleSubmit / onSubmit
// sometimes because what about search bars where we filter automatically 

