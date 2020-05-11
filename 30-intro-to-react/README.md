Intro to React
=============================
TL;DR How do we get from Vanilla JS to React? 

## SWBATs
- [ ] Recognize declarative and imperative coding paradigms
- [ ] Visualize/identify Components on any website
- [ ] Explain what a Component is conceptually in the UI
- [ ] Briefly explain Babel's purpose in React
- [ ] Explain what a React Component actually is in code
- [ ] Use JSX to build custom components and render them in the browser
- [ ] See how props are to components as arguments are to functions

## Notes

### Declarative vs Imperative Programming

Declarative - not concerned with under the hood 
Gimme a burrito bowl, sofritas and fajitas and corn salsa 


Imperative - super detailed
Put 2 c of rice into rice cooker with lime juice 



#### Imperative
```js
const header = document.createElement('h1')
header.innerText = 'Wassup yall'
header.class = "screaming"

const container = document.querySelector('#container')
container.append(header)
```

#### Declarative
```js

function addHeader(){
    const header = document.createElement('h1')
    header.innerText = 'Wassup yall'
    header.class = "screaming"
    
    const container = document.querySelector('#container')
    container.append(header)
}

addHeader()

```


### Abstractions to JSX

First form: *STATIC HTML*
```jsx
ReactDOM.render(
  <div>
    <h1>Hello, world!</h1>
    <h1>Hello, beef!</h1>
    <h1>Hello, squid!</h1>
  </div>,
  document.getElementById('root')
);
```

Second form: *Dynamic, reusable components using regular functions and arguments*


Third Form: *Static components using JSX*


FINAL FORM: *Dynamic, reusable components using JSX and props*


## Links

[Babel](https://babeljs.io/)
[React](https://reactjs.org/)
[Whiteboarding App](https://awwapp.com)



### Parking Lot 
- Containers as Components... React Best Practices lecture... TODO pre-link the resources 
- Component v Element  ===> something we or another dev creates that renders a lot of elements (JSX/HTML)
- and if it was in card.js would it be const = { title, greeting} = this.props ?