React Best Practices
====================

## SWBAT

- [ ] Write cleaner React code

## Objectives

- Opinions
  - [X] Code Organization/file structure 
        - Folders: Components & Containers, orrrr organized by resource
  - [X] Presentational vs Container components

- Optimizations:
  - [X] Functional vs Class Components (required for state & lifecycle methods)
  - [X] Fragments

- Best Practices:
  - [X] Callbacks (avoid useless wrapping)
  - [X] "then" callback for setState
  - [X] Functional setState

- JS tricks/bugs often seen in React:
  - [X] Arrow functions returning objects () => ({ })
  - [ ] Destructuring  ====> `let { likes, name } = this.props`   ===> come to office hours 
  - [X] Spread (w/ prepend and append) `this.setState({ messages: [...this.state.messages, 'newmessage']})`
  - [ ] Objects with the same key/value name ===> `let myPerson = {firstName, lastName}` ===> come to office hours 
  - [X] constructor vs. ES7 instance variables ===> ie `state = {}` vs `constructor()`
  - [X] dynamic keys ==>  { [variable]: "as_key" } 

- Too Involved for RN
    - [ ] Phasing Out: HOCs!
    - [ ] New and Shiny: Hooks
    - [ ] Upcoming: Concurrency Mode 

## Resources

[Dan Abramov: Presentational vs Container](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
[Pure Components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
[Redux Code Structure](https://redux.js.org/faq/code-structure)
[HOCs](https://reactjs.org/docs/higher-order-components.html)
[Hooks](https://reactjs.org/docs/hooks-intro.html)
[Concurrency Mode](https://medium.com/swlh/what-is-react-concurrent-mode-46989b5f15da)

## Lecture Notes

