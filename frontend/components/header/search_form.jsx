import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ term: e.target.value });
  }

  render() {
    return (
      <form className="nav-search-form" >
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
