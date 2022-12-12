import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";
import { delGoodToCart } from "../../redux/actions/action";
import { saveMovies } from "../../redux/actions/action";

class Favorites extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    // async saveMovies() {
        
    //     const response = await fetch("https://acb-api.algoritmika.org/api/movies/list ", {
    //         method: "POST",
    //         headers: {
    //           'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //               "title": this.state.searchLine,
    //               "movies": this.props.cart
    //         })
    //       })
    //     //   let button = document.querySelector('.favorites__save')
    //     // button.innerHTML='Идет запрос'
    //     const data = await response.json();
    //     return data;
    //   }

    // saveMovies() {
        
    //     let input = document.querySelector('.favorites__name')
    //     let value = input.value
        
    // }
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" onChange={this.searchLineChangeHandler} />
                <ul className="favorites__list">
                    {this.props.cart.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})<button className='close' onClick={() => this.props.delGoodToCart(item.imdbID)}>x</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick={() => this.props.saveMovies(this.state.searchLine, this.props.cart)}>Сохранить список</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      cart: state.cart 
    }
  };
  const mapDispatchToProps = dispatch => ({
    saveMovies: (value, cart) => {
        let button = document.querySelector('.favorites__save')
        button.innerHTML='Идет запрос'
        fetch("https://acb-api.algoritmika.org/api/movies/list ", {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
        "title": value,
        "movies": cart
  })
})
.then( (response) => { 
    return response.json()
}).then(data => {
    dispatch(saveMovies(data))
})
.catch(error => {
  console.log(error)
});
      if(button.innerHTML='Перейти к списку') {
        
      }
    },
    delGoodToCart: (id) => {
        let button =document.querySelector('.movie-item__add-button')
        button.innerHTML = 'Добавить в список'
      dispatch(delGoodToCart(id))
    }
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites);