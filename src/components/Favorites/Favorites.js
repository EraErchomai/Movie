import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";
import { delGoodToCart } from "../../redux/actions/action";

class Favorites extends Component {
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.cart.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})<button className='close' onClick={() => this.props.delGoodToCart(item.imdbID)}>x</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
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
    delGoodToCart: (id) => {
        let button =document.querySelector('.movie-item__add-button')
        button.innerHTML = 'Добавить в список'
      dispatch(delGoodToCart(id))
    }
  });
  export default connect(mapStateToProps, mapDispatchToProps)(Favorites);