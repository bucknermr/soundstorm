import React from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.term) {
      this.redirect();
      this.setState({ term: '' })
    }
  }

  redirect() {
    const query = queryString.stringify({ term: this.state.term});
    this.props.history.push(`/search?${query}`)
  }

  render() {
    return (
      <form className="nav-search-form" onSubmit={this.handleSubmit}>
        <input
          type="search"
          className="nav-search-input"
          placeholder={this.props.loggedIn ? (
            "Search") : "Search for artists, bands, tracks"}
          value={this.state.term}
          onChange={this.handleChange}
        />
        <button type="submit" className="search-icon">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </form>
    )
  }
}


export default SearchForm;
