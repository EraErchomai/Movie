import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";
import { delGoodToCart } from "../../redux/actions/action";
import { saveMovies } from "../../redux/actions/action";
import { changeButton } from "../../redux/actions/action";
import { Link } from 'react-router-dom';

class Favorites extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
        console.log(this.props.cart.length)
        let button = document.querySelector('.favorites__save');
        console.log(button)
        if(this.props.cart.length===0) {
          button.setAttribute('disabled', true)
          console.log(button)
        }
        else button.removeAttribute('disabled');
    }
  //   searchLineChange = () => {
  //     console.log(!this.state.searchLine)
  //     console.log(this.props.cart.lenght!==0)
  //     if(!!this.state.searchLine && this.props.cart.lenght!==0) return false;
  //     else return true
  // }
    render() { 
        return (
            <div className="favorites">
                <input placeholder='Введите название списка' className="favorites__name" onChange={this.searchLineChangeHandler} />
                <ul className="favorites__list">
                    {this.props.cart.map((item) => {
                        return <li key={item.imdbID}><button className='close' onClick={() => this.props.delGoodToCart(item.imdbID, this.props.cart)}>x</button>{item.Title} ({item.Year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" disabled onClick={() => this.props.saveMovies(this.state.searchLine, this.props.cart)}>Сохранить список</button>
                <Link className="nav-link" to="/list/:id">
                  Перейти к списку
                </Link>
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
    },
    delGoodToCart: (id, cart) => {
      let button = document.querySelector('.favorites__save');
      dispatch(changeButton(id))
      dispatch(delGoodToCart(id))
      console.log(button)
      // if(cart.length===0) {
      //   button.setAttribute('disabled', true)
      //   console.log(button)
      // }
    }
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites);