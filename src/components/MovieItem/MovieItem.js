import React, { Component } from 'react';
import './MovieItem.css';

import { connect } from "react-redux";
import { addGoodToCart } from "../../redux/actions/action";
import { changeButton } from "../../redux/actions/action";


class MovieItem extends Component {
    render() {
        const { Title, Year, Poster, imdbID, add } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={Poster} alt={Title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                    <button id={imdbID} disabled={add} type="button" className="movie-item__add-button" onClick={() => this.props.addGoodToCart(imdbID)}>
                        {add ? 'Добавлено' : 'Добавить в список'}</button>
                </div>
            </article>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies,
        cart: state.cart 
    }
}
const mapDispatchToProps = dispatch => ({
    addGoodToCart: (id) => {
      
      dispatch(addGoodToCart(id))
      dispatch(changeButton(id))
      
    //   let button = document.querySelector('.favorites__save');
    //   button.removeAttribute('disabled');
    }
  });
  export default connect(mapStateToProps, mapDispatchToProps)(MovieItem);