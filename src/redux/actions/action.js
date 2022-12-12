export function addGoodToCart(id) {
  console.log(id)
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
    //console.log(data)
    return {
      type: 'SEARCH_MOVIE',
      payload: {
        movies: data
      }
    }
  }

// export function searchFromFetch(name) {
//   fetch(`http://www.omdbapi.com/?s=${name}&apikey=8ab32c7f`)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.Search)
//             searchMovies(data.Search)
//         })
//         .catch(error => {
//           console.log(error)
//         })
// }
