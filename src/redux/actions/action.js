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