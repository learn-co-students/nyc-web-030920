import React from 'react'
import Ticker from './Ticker'

// 1. When the app loads, the number shown will change every second to a random number 1-100
// 2. The user can click on the stop/start button to stop and restart the number change
// 3. When the number changes, if the new number is higher show green; if it is lower, show red.


// componentDidMount

// componentDidUpdate

// componentWillUnmount

// noneOfTheAbove

class TickerContainer extends React.Component {

  state = {
    number: 0,
    myInterval: null,
    color: 'white'
  }

  componentDidMount() {
    this.setUpInterval();
  } 

  componentDidUpdate(prevProps, prevState){
    // BE CAUTIOUS SETTING STATE INSIDE OF HERE
    // if you're changing a channel (like in our slack example)
    if(prevState.number < this.state.number && this.state.color !== 'green'){
      // green
      this.setState({ color: 'green' })
    } else if (prevState.number > this.state.number) {
      // red 
      this.setState({ color: 'red' })
    }
    // third case where NO SET STATE is when the numbers are equal

    /**
     * 
     * Inside of a switch for instacne...
     * default: 
     *  break;
     */

  }
  
  setUpInterval = () => {
    let myInterval = setInterval(() => {
      this.setState({ number: Math.ceil(Math.random() * 100)})
    }, 1000)
    this.setState({ myInterval })
  }

  handleClick = () => {
    // clear the interval
    if(this.state.myInterval){
      clearInterval(this.state.myInterval)
      this.setState({ myInterval: null })
    } else {
      this.setUpInterval()
    }
  }

  render(){
    console.log(this.state)
    return (
      <div className="box" style={{ backgroundColor: this.state.color }}>
        <button onClick={this.handleClick}>Stop/Start Ticker</button>
        <Ticker number={this.state.number}/>
      </div>
    );
  }
}



export default TickerContainer 