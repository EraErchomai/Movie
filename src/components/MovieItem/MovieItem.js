import React, { Component } from 'react';
import './MovieItem.css';

import { connect } from "react-redux";
import { addGoodToCart } from "../../redux/actions/action";

class MovieItem extends Component {
    render() {
        const { title, year, poster, id } = this.props;
        return (
            <article className="movie-item">
                <img className="movie-item__poster" src={poster} alt={title} />
                <div className="movie-item__info">
                    <h3 className="movie-item__title">{title}&nbsp;({year})</h3>
                    <button type="button" className="movie-item__add-button" onClick={() => this.props.addGoodToCart(id)}>Добавить в список</button>
                </div>
            </article>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    addGoodToCart: (id) => {
      dispatch(addGoodToCart(id))
    }
  });
  export default connect(null, mapDispatchToProps)(MovieItem);