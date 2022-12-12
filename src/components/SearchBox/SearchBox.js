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
                        onClick={() => this.props.searchMovies(this.state.searchLine)}
                    >
                        Искать
                    </button>
                </form>
            </div>
        );
    }
}
 
const mapDispatchToProps = dispatch => ({
    searchMovies: (name) => {
        fetch(`http://www.omdbapi.com/?s=${name}&apikey=8ab32c7f`)
        .then(res => res.json())
        .then(data => {
            dispatch(searchMovies(data.Search))
        })
        .catch(error => {
          console.log(error)
        })
    }
  });
  export default connect(null, mapDispatchToProps)(SearchBox);