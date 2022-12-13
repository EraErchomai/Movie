import React, { Component } from 'react';
import './SearchBox.css';

import { connect } from "react-redux";
import { searchMovies } from "../../redux/actions/action";

class SearchBox extends Component {
    state = {
        searchLine: ''
    }
    searchLineChangeHandler = (e) => {
        this.setState({ searchLine: e.target.value });
    }
    searchBoxSubmitHandler = (e) => {
        e.preventDefault();
    }
    render() {
        const { searchLine } = this.state;

        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={this.searchBoxSubmitHandler}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            value={searchLine}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"
                            onChange={this.searchLineChangeHandler}
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!searchLine}
                        onClick={() => this.props.searchMovies(this.state.searchLine, this.props.cart)}
                    >
                        Искать
                    </button>
                </form>
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
    searchMovies: (name, favorites) => {
        fetch(`http://www.omdbapi.com/?s=${name}&apikey=8ab32c7f`)
        .then(res => res.json())
        .then(data => {
            let movies = data.Search.map((item) => {
                return{
                    ...item,
                    add: false
                }
            })
            if(favorites.length !== 0) {
            for(let i=0; i<favorites.length; i++) {
                // console.log(this.props.cart[i].imdbID )
                // console.log(imdbID)
                for(let j=0; j<movies.length; j++) {
              if(movies[j].imdbID === favorites[i].imdbID ) {
                //this.setState({ str:  'Добавлено' });
                movies[j].add = true
                //console.log(this.state.str)
              }
            }
        }
        }
            dispatch(searchMovies(movies))

        })
        .catch(error => {
          console.log(error)
        })
    }
  });
  export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);