const initialState = {
    cart: [],
    movies: []
}

function reducer(state = initialState, action) {
    if (action.type === 'ADD_GOOD_TO_CART') {
        const good = state.movies.find(item => 
    item.imdbID === action.payload.id);
    console.log(state.cart.indexOf(good))
    if(state.cart.indexOf(good) == -1) {
        var cart = [ ...state.cart, good ];
    }
        return {
          ...state,
          cart,
        }
      }
      else if (action.type === 'DEL_GOOD_FROM_CART') {
        const good = state.movies.find(item => 
    item.imdbID === action.payload.id);
    let c = state.cart
    const cart = c.filter(item => {
        return item !== good
    })
        return {
          ...state,
          cart,
        }
      }
      else if (action.type === 'SEARCH_MOVIE') {
        const movies = action.payload.movies
        const b = movies.filter(item => {
          return state.cart.indexOf(item) != -1
      })
        b.forEach(item => {
          item.closest('.movie-item__add-button').innerHTML='Добавлено'
        });
        return {
          ...state,
          movies
        }
      }
      return state;
}

export default reducer;