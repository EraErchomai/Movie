const initialState = {
  cart: [],
  movies: [],
  list: [],
  save: true
};

function reducer(state = initialState, action) {
  if (action.type === "ADD_GOOD_TO_CART") {
    let input =document.querySelector('.favorites__name')
    let button =document.querySelector('.favorites__save')
    if(input.value !== '') button.disabled=false
    const good = state.movies.find((item) => item.imdbID === action.payload.id);
          let cart = [...state.cart, good];
          return {
            ...state,
            cart,
          };
      }
   if (action.type === "CHANGE_BUTTON") {
    let movies = [...state.movies];
    movies = movies.map((item) => {
        if (item.imdbID === action.payload.id) {
            let add = !(item.add);
            console.log(item);
            return {
                ...item,
                add
            }
        }
        return{
            ...item
        }
    })

    return{
        ...state,
        movies
    }        
    }
   else if (action.type === "DEL_GOOD_FROM_CART") {
    const good = state.cart.find((item) => item.imdbID === action.payload.id);

    let c = state.cart;
    const cart = c.filter((item) => {
      return item !== good;
    });
    if (cart.length === 0) {
      let button = document.querySelector(".favorites__save");
      button.style.display = "block";
      button.innerHTML = "Сохранить список";
      let link = document.querySelector(".nav-link");
      link.style.display = "none";
    }
    for (let j = 0; j < state.movies.length; j++) {
      if (state.movies[j].imdbID === good.imdbID) {
        state.movies[j].add = false;
      }
    }
    let button = document.querySelector(".favorites__save");
    if (cart.length === 0) {
      button.setAttribute("disabled", true);
    }
    return {
      ...state,
      cart,
    };
  } else if (action.type === "SEARCH_MOVIE") {
    const movies = action.payload.movies;

    return {
      ...state,
      movies,
    };
  } else if (action.type === "SAVE_MOVIE") {
    const list = action.payload.list;
    let button = document.querySelector(".favorites__save");
    button.style.display = "none";
    let link = document.querySelector(".nav-link");
    link.style.display = "block";
    return {
      ...state,
      list,
    };
  }
  return state;
}

export default reducer;
