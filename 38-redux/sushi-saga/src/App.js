import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import { fetchCreator, fetchCreatorSansThunk } from './reducer'
import { connect } from  'react-redux'
import { sushis } from './sushis'; // use this sushi array instead of fetching... for fetching we'll use THUNK!

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    newMoney: ''
  }

  componentDidMount(){
    this.props.fetchSushis()
    // fetch(API)
    // .then(res => res.json())
    // .then(sushis => {
    //   this.setState({ sushis })
    // })
  }

  handleChange = e => this.setState({ newMoney: e.target.value })

  handleSubmit = e =>{
    e.preventDefault()
    const { newMoney } = this.state;
    this.setState({newMoney: ''})
    //  budget: budget + parseInt(newMoney), 
    // instead of setSTate
    // we need to dispatch 
    this.props.addMoneyToRedux(parseInt(newMoney))
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
        <SushiContainer />
        <Table />
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    fetchSushis: () => dispatch(fetchCreator()),
    addMoneyToRedux: (amount) => dispatch({ type: 'ADD_MONEY', payload: { amount }})
  }
}

export default connect(null, mdp)(App);