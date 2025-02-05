export function addGoodToCart(id) {
    return {
      type: 'ADD_GOOD_TO_CART',
      payload: {
        id: id
      }
    }
  }

  export function delGoodToCart(id) {
    return {
      type: 'DEL_GOOD_FROM_CART',
      payload: {
        id: id
      }
    }
  }

  export function searchMovies(data) {
    return {
      type: 'SEARCH_MOVIE',
      payload: {
        movies: data
      }
    }
  }

  export function saveMovies(data) {
    return {
      type: 'SAVE_MOVIE',
      payload: {
        list: data
      }
    }
  }

  export function changeButton(id) {
    return {
      type: 'CHANGE_BUTTON',
      payload: {
        id: id
      }
    }
  }
