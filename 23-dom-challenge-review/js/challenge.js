// √get counter from DOM
// √increment it every second

// √get + and - buttons from DOM
// √add click listeners
// √increment/decrement counter appropriately

// √get the like button from the DOM
// √add a click listener
// √record the like somewhere/somehow
// √update the DOM with the likes phrase

// √get the pause button
// √add a click listener
// √pause the counter
// √disable all the buttons
// √swap text in the button

// √get the resume button
// √add a click listener
// √do the reverse of the pause actions

// √listen to submit on form
// √prevent default
// √get user input
// √append it to DOM
// √clear out the form

let likeCount = {}
const likeList = document.querySelector('ul')

document.addEventListener("DOMContentLoaded", function(event){

  let timer = setInterval(function(){
    incrementCounter(1)
  }, 1000)


  document.addEventListener("click", function(event){
    if(event.target.id === "minus"){
      incrementCounter(-1)
    } else if(event.target.id === "plus"){
      incrementCounter(1)
    } else if(event.target.id === "heart"){
      const counter = document.getElementById("counter")
      const currentNum = counter.textContent
  
      if(likeCount[currentNum]){
        // number has already been liked
  
        // √get li from the dom
        // √update it's text
  
        likeCount[currentNum]++
        const li = document.querySelector(`li[data-number="${currentNum}"]`)
        li.textContent = `${currentNum} has been like ${likeCount[currentNum]} times!! 🦑`
      } else {
        likeCount[currentNum] = 1
        // number hasn't been liked yet
  
        // √make li
        // √append it to ul
  
        const li = document.createElement('li')
        li.textContent = `${currentNum} has been liked!! 🤡`
        li.dataset.number = currentNum
        likeList.append(li)
      }
  
    } else if(event.target.id === "pause"){
      clearInterval(timer)

      document.getElementById('minus').disabled = true
      document.getElementById('plus').disabled = true
      document.getElementById('heart').disabled = true
      document.getElementById('submit').disabled = true

      event.target.textContent = "resume"
      event.target.id = 'resume'
    } else if(event.target.id === 'resume'){
      timer = setInterval(function(){
        incrementCounter(1)
      }, 1000)

      document.getElementById('minus').disabled = false
      document.getElementById('plus').disabled = false
      document.getElementById('heart').disabled = false
      document.getElementById('submit').disabled = false

      event.target.textContent = "pause"
      event.target.id = 'pause'
    }
  })


})

document.addEventListener("submit", function(event){
  event.preventDefault()
  
  const comment = event.target.comment.value

  const p = document.createElement('p')
  p.textContent = comment

  document.getElementById('list').append(p)
  event.target.reset()
})

function incrementCounter(n){
  const counter = document.getElementById("counter")
  const currentNum = parseInt(counter.textContent)
  const newNum = currentNum + n

  counter.textContent = newNum
}