function myMap(array, callback){
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    newArray.push(callback(element))
  }

  return newArray
}

function myReduce(array, reducer, accumulator = 0){
  // for (let i = 0; i < array.length; i++) {
  //   accumulator = reducer(accumulator, array[i])
  // }

  array.forEach(function(item){
    accumulator = reducer(accumulator, item)
  })
  
  return accumulator
}