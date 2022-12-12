import React, { Component } from 'react';
import './ListPage.css';

import { connect } from "react-redux";

class ListPage extends Component {
    render() { 
        return (
            <div className="list-page">
                <h1 className="list-page__title">{this.props.list.title}</h1>
                <ul>
                    {this.props.list.movies.map((item) => {
                        let str = `https://www.imdb.com/title/${item.imdbID}/`
                        return (
                            <li key={item.imdbID}>
                                <a href={str} target="_blank">{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
      list: state.list 
    }
  };

  export default connect(mapStateToProps, null)(ListPage);