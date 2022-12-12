const initialState = {
    cart: [],
    movies: []
}

function reducer(state = initialState, action) {
    if (action.type === 'ADD_GOOD_TO_CART') {
        const good = state.movies.find(item => 
    item.id === action.payload.id);
        const cart = [ ...state.cart, good ];
    
        return {
          ...state,
          cart,
        }
      }
      else if (action.type === 'DEL_GOOD_FROM_CART') {
        const good = state.movies.find(item => 
    item.id === action.payload.id);
    let c = state.cart
    const cart = c.filter(item => {
        return item !== good
    })
    console.log(cart)
        return {
          ...state,
          cart,
        }
      }
      else if (action.type === 'SEARCH_MOVIE') {
        const movies = action.payload.movies
        console.log(movies)
        return {
          ...state,
          movies
        }
      }
      console.log(state)
      return state;
}

export default reducer;