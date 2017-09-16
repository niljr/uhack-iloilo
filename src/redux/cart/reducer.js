let initialState = {
  cart: [
   
  ]
}

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      let cart = state.cart;
      cart.push(action.item)
      console.log(cart)
      return {
        ...state,
        cart: cart,
      };
    default:
      return state;
  }
}