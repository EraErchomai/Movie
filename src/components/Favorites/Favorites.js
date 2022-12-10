import React, { Component } from 'react';
import './Favorites.css';
import { connect } from "react-redux";


class Favorites extends Component {
    // state = {
    //     title: 'Новый список',
    //     movies: [
    //         { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
    //     ]
    // }
    render() { 
        return (
            <div className="favorites">
                <input value="Новый список" className="favorites__name" />
                <ul className="favorites__list">
                    {this.props.movies.map((item) => {
                        return <li key={item.id}>{item.title} ({item.year})</li>;
                    })}
                </ul>
                <button type="button" className="favorites__save">Сохранить список</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      movies: state.cart 
    }
  };
  export default connect(mapStateToProps, null)(Favorites);