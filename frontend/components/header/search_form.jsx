import React from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '', fireRedirect: false };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    // if (this.state.term) {
    //   // this.setState({ term: '' })
    //   return(
    //     <Redirect push
    //       to={{
    //         pathname: 'search',
    //         search: queryString.stringify(this.state)
    //       }}
    //     />
    //   )
    // }


    if (this.state.term) {
      // this.props.searchTracks(this.state.term);
      this.setState({ fireRedirect: true })
    }
  }

  redirect() {
    const search = { term: this.state.term };
    return (
      <Redirect push
        to={{
          pathname: 'search',
          search: queryString.stringify(search)
        }}
      />
    )
  }

  componentDidUpdate() {
    if (this.state.fireRedirect) {
      this.setState({ fireRedirect: false, term: '' })
    }
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
        {this.state.fireRedirect ? this.redirect() : null}
      </form>
    )
  }
}


export default SearchForm;
