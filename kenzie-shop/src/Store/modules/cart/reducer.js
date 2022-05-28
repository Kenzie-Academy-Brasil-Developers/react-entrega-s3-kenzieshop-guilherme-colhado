import { ADD_TO_CART } from './actionsTypes'

const initialState = JSON.parse(localStorage.getItem("@KenzieShop: cart") || '[]')

export default function cartReducer(state = initialState, action){
    switch (action.type){
        case ADD_TO_CART:
            return action.payload
        default:
            return state
    }
}