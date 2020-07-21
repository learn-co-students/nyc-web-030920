import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  state = {
    pizzas: [],
    // id: null,
    // size: '',
    // topping: '',
    // vegetarian: '',
    pizza: { 
      size: '',
      topping: '',
      vegetarian: ''
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/pizzas')
    .then(res => res.json())
    .then(pizzas => this.setState({ pizzas }))
  }

  choosePizza = id => {
    let chosenPizza = this.state.pizzas.find(pizza => pizza.id === id)
    let { size, topping, vegetarian } = chosenPizza
    this.setState({ pizza: { id, size, topping, vegetarian: vegetarian ? 'Vegetarian' : 'Not Vegetarian' } } )
  }

  handleFormChange = e => {
    // console.log('updating...', e.target.name, ' to: ', e.target.value)
    // this.setState({ [e.target.name]: e.target.value })
    this.setState({ pizza: {...this.state.pizza, [e.target.name]: e.target.value }})
  }


  handlePizzaPatch = () => {
    // PEEP THE SNAZZY REFACTOR AT THE END OF THIS FILE
    let { id, topping, vegetarian, size } = this.state.pizza;
    let fetchOptions = {
      method: id ? 'PATCH' : 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        size, 
        topping,
        vegetarian: vegetarian === 'Vegetarian'
      })
    }

    if (id) {
      fetch(`http://localhost:3000/pizzas/${id}`,fetchOptions)
      .then(res => res.json())
      .then(newPizza => {
        let newPizzas = this.state.pizzas.map( pizza => {
          if(pizza.id === newPizza.id ){
            return newPizza
          } else {
            return pizza
          }
        })
        this.setState({ pizzas: newPizzas, pizza: { id: null, topping: '', size: '', vegetarian: '' } })
      })
    } else {
      fetch(`http://localhost:3000/pizzas`, fetchOptions)
      .then(res => res.json())
      .then(newPizza => {
        this.setState({ pizzas: [...this.state.pizzas, newPizza], pizza: { id: null, topping: '', size: '', vegetarian: '' } })
      })
    }
  }

  render() {
    let { pizzas, pizza } = this.state;
    console.log(this.state)
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
          handlePizzaPatch={this.handlePizzaPatch}
          handleFormChange={this.handleFormChange}
          pizza={pizza}/>
        <PizzaList 
          pizzas={pizzas} 
          choosePizza={this.choosePizza}/>
      </Fragment>
    );
  }
}

export default App;


// SNAZZY REFACTOR
// let { id } = this.state.chosenPizza;
// let fetchOptions = {
//   method: id ? 'PATCH' : 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json'
//   },
//   body: JSON.stringify({
//     ...this.state.chosenPizza,
//     vegetarian: this.state.chosenPizza.vegetarian === 'Vegetarian'
//   })
// }

// fetch(`http://localhost:3000/pizzas/${id ? `${id}` : ''}`, fetchOptions)
//   .then(res => res.json())
//   .then(newPizza => {
//     let newPizzas = id 
//       ? this.state.pizzas.map( pizza => {
//         if(pizza.id === newPizza.id ){
//           return newPizza
//         } else {
//           return pizza
//         }
//       })
//       : [...this.state.pizzas, newPizza]
//       this.setState({ pizzas: newPizzas, chosenPizza: {}})
//   })
