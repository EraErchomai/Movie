const initialState = {
  cart: [],
  movies: [],
  list: [],
};

function reducer(state = initialState, action) {
  if (action.type === "ADD_GOOD_TO_CART") {
    const good = state.movies.find((item) => item.imdbID === action.payload.id);
    // if (state.cart.length !== 0) {
      // for (let j = 0; j < state.cart.length; j++) {
      //   if (good.imdbID !== state.cart[j].imdbID) {
          let cart = [...state.cart, good];
          return {
            ...state,
            cart,
          };
        // } else {
        //   let cart = [...state.cart];
        //   return {
        //     ...state,
        //     cart,
        //   };
        // }
      }
    // } 
    // else {
    //   let cart = [...state.cart, good];
    //   for (let j = 0; j < state.movies.length; j++) {
    //     if (state.movies[j].imdbID === good.imdbID) {
    //       state.movies[j].add = true;
    //     }
    //   }
    //   return {
    //     ...state,
    //     cart,
    //   };
    // }
   if (action.type === "CHANGE_BUTTON") {
    let movies = [...state.movies];
    console.log(movies);
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
    console.log(movies);

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
      console.log(button);
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
