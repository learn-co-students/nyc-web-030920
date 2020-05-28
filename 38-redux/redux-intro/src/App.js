import React from 'react';
import './App.css';
import { toggleCreator, likeCreator, dislikeCreator, handleChangeCreator } from './reducer'
import { connect } from 'react-redux';


 function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}



class App extends React.Component {

  dispatch = (type, payload) => {
    // 2. updating the state
    // this will called first
    // will invoke this.reducer in order to get the new state
    // and then update the state
    // let newState = this.reducer(type, payload)
    // this.setState(newState)
  }

  reducer = (type, payload) => {
    // 1. calculating our new state and returning it
    // switch(type) {
    //   case 'LIKE':
    //     return { likes: this.state.likes + 1 }
    //   case 'DISLIKE':
    //     return { likes: this.state.likes - 1 }
    //   case 'TOGGLE':
    //     return { darkMode: !this.state.darkMode }
    //   case 'HANDLE_CHANGE':
    //     return { [payload.event.target.name]: payload.event.target.value }
    //   case 'ADD_TEXT':
    //     return { 
    //       text: '',
    //       thangs: [this.state.text, ...this.state.thangs]
    //     }
    //   default: 
    //     return {}
    // }
  }

  // like = () => {
  //   this.setState({ likes: this.state.likes + 1 })
  // }

  // dislike = () => {
  //   this.setState({ likes: this.state.likes - 1 })
  // }

  // toggle = () => {
  //   this.setState({ darkMode: !this.state.darkMode })
  // }

  // handleChange = (event) => {
  //   this.setState({ [event.target.name]: event.target.value })
  // }

  // addText = () => {
  //   this.setState({ 
  //     text: '',
  //     thangs: [this.state.text, ...this.state.thangs]
  //   })
  // }

  render(){
    console.log('app props',this.props)
    return (
      <div className={"App" + (this.props.darkMode ? " dark" : "")}>
        <button onClick={this.props.toggle}>Dark mode</button>
        <h3>{this.props.text}</h3>
        <input 
          name="text" 
          value={this.props.text} 
          onChange={event => this.props.handleChange(event.target.value)}/>
        <button onClick={this.props.addText}>Add!</button>

        <h4>{this.props.likes} likes</h4>
        <button onClick={this.props.dislike}>
          Dislike <span role="img" aria-label="thumbs down">👎</span>
        </button>
        <button onClick={this.props.like}>
          Like<span role="img" aria-label="thumbs up">👍</span>
        </button>
        {
          this.props.thangs.map((thang, index) => <h1 key={index} >{thang}</h1>)
        }
      </div>
    );
  }
}

const mapStateToProps = state => { //msp
  // uses the reducer state to add props to the component 
  return {
    likes: state.likes,
    text: state.text,
    darkMode: state.darkMode,
    thangs: state.thangs
  }
}

const mapDispatchToProps = dispatch => { // mdp
  // add props that are functions that can dispatch actions to change our store
  return {
    like: () => dispatch(likeCreator()),
    dislike: () => dispatch(dislikeCreator()),
    toggle: () => dispatch(toggleCreator()),
    addText: () => dispatch({ type: 'ADD_TEXT' }),
    handleChange: (value) => dispatch(handleChangeCreator(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
