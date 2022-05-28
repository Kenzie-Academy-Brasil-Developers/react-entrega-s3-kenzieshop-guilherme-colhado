import { addToCart } from './actions'

export default function addToCartThunk(product){
    return (dispatch, getState) => {
        const { cart } = getState()
        const updateCart = [...cart, product]
        localStorage.setItem("@KenzieShop: cart",JSON.stringify(updateCart))
        dispatch(addToCart(updateCart)) 
    }
}