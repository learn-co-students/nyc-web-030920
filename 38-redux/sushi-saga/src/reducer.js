let initialState = {
    sushis: [],
    eatenSushis: [],
    budget: 105,
    startIndex: 0 
}

export const fetchCreatorSansThunk = () => ({ type: 'FETCH_SUSHIS', payload: ['hardcoded array']})

export const fetchCreator = () => dispatch => {
    console.log('inside of fetch thunk creator')
    setTimeout(() => {
        fetch("http://localhost:3000/sushis")
            .then(res => res.json())
            .then(sushis => {
                dispatch({ type: 'FETCH_SUSHIS', payload: { sushis }})
            })
    }, 2000)
}

// dispatch()

export const reducer = (prevState=initialState, action) => {
    console.log('reducer got an action ==>', action)
    switch(action.type){
        case 'UPDATE_INDEX':
            let nextIndex = prevState.startIndex + 4 
            if( nextIndex >= prevState.sushis.length ){ nextIndex = 0 }
            return {...prevState, startIndex: nextIndex }
        case 'FETCH_SUSHIS':
            // have a payload of all of the sushis that were fetched 
            return {...prevState, sushis: action.payload.sushis}
        case 'EAT_SUSHI':
            let { id, price, eaten } = action.payload
            if(price <= prevState.budget && !eaten){   // allowed to eat the sushi
                let newSushis = prevState.sushis.map(sushi => {  
                    if(sushi.id === id){  
                        sushi.eaten = true  
                    }
                    return sushi  
                })
                return {...prevState, 
                        sushis: newSushis, 
                        eatenSushis: [...prevState.eatenSushis, id],
                        budget: prevState.budget - price
                }
            }
            else { //can't eat the sushi
                return {...prevState}
            }
        case 'ADD_MONEY':
            // add money will need some data
            // namely the amount to add
            // so that'll be in payload and needs to be an integer
            return {...prevState, budget: prevState.budget + action.payload.amount }
        default:
            return {...prevState}
    }
}