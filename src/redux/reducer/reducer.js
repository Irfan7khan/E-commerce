const INIT_STATE = {
    cards:[]
}
export const cardsreducer = (state = INIT_STATE, action) => {
    if (action.type === "ADD_CARDS") {
        // const itemIndex = state.cards.findIndex((item)=> item.id === action.payload.id)
        return {
            ...state,
            cards:[...state.cards,action.payload]
        }
    } else {
        return state
    }
}