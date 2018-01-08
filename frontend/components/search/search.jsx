import React from 'react';
import TrackIndexContainer from '../tracks/track_index_container';
import queryString from 'query-string';

class Search extends React.Component {
  constructor(props) {
    super(props);

    const { term } = queryString.parse(this.props.location.search);
    this.state = { type: 'tracks', term };
  }

  componentDidMount() {
    this.props.searchTracks(this.state.term);
  }

  componentWillReceiveProps(nextProps) {
    const { term } = queryString.parse(nextProps.location.search);
    if (term !== this.state.term) {
      this.props.searchTracks(term);
      this.setState({ term });
    }
  }

  render() {
    return (
      <div className="search-page">
        <header>
          <h2>Search results for "{this.state.term}"</h2>
        </header>
        <TrackIndexContainer />
      </div>
    )
  }
}

export default Search;
