const initialState = {
    cart: [],
    movies: []
}

function reducer(state = initialState, action) {
    const getData = () => {
        fetch("http://www.omdbapi.com/")
          .then((res) => res.json())
          .then((data) => {
            this.setState({ movies: data });
          });
      };
      console.log(state)
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
      return state;
}

export default reducer;