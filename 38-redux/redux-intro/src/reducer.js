
let initialState = {
    likes: 0,
    text: '',
    darkMode: false,
    thangs: []
}

export let reducer = (prevState=initialState, action) => {
    console.log('IN REDUCER', prevState, action)

    switch(action.type){
        case 'LIKE':
            return { ...prevState, likes: prevState.likes + 1 }
        case 'DISLIKE':
            return { ...prevState, likes: prevState.likes - 1 }
        case 'TOGGLE':
            return { ...prevState, darkMode: !prevState.darkMode }
        case 'HANDLE_CHANGE':
            return { ...prevState, text: action.payload.value }
        case 'ADD_TEXT':
            return { ...prevState, 
                text: '',
                thangs: [prevState.text, ...prevState.thangs]
            }
        default:
            return prevState
    }
}

export const likeCreator = () => ({type: 'LIKE'})
export const dislikeCreator = () => ({type: 'DISLIKE'})
export const toggleCreator = () => ({type: 'TOGGLE'})
export const handleChangeCreator = (value) => ({type: 'HANDLE_CHANGE', payload: { value }})