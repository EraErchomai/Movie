const initialState = {
    cart: [],
    movies: [],
    list: []
}

function reducer(state = initialState, action) {
    if (action.type === 'ADD_GOOD_TO_CART') {
        const good = state.movies.find(item => 
    item.imdbID === action.payload.id);
    if(state.cart.indexOf(good) === -1) {
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
          return state.cart.indexOf(item) !== -1
      })
        b.forEach(item => {
          item.closest('.movie-item__add-button').innerHTML='Добавлено'
        });
        return {
          ...state,
          movies
        }
      }
      else if (action.type === 'SAVE_MOVIE') {
        const list = action.payload.list
      let button = document.querySelector('.favorites__save')
        button.innerHTML='Перейти к списку'
        return {
          ...state,
          list
        }
      }
      return state;
}

export default reducer;