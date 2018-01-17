import React from 'react';
import TrackIndexContainer from '../tracks/track_index_container';
import queryString from 'query-string';

class Search extends React.Component {
  constructor(props) {
    super(props);

    const { term } = queryString.parse(this.props.location.search);
    this.state = { type: 'tracks', term };
    this.handleClick = this.handleClick.bind(this);
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

  handleClick(type) {
    return (e) => {
      this.setState({ type })
    }
  }

  render() {
    const { term, type } = this.state
    return (
      <div className="search-page">
        <header>
          <h2>Search results for "{term}"</h2>
        </header>
        <aside className="search-nav">
          <ul>
            <li><button
              className={type === 'tracks' ? 'selected' : ''}
              onClick={this.handleClick('tracks')}
              >
              <i className="fa fa-soundcloud" aria-hidden="true"></i> Tracks
            </button></li>
            <li><button
              className={type === 'people' ? 'selected' : ''}
              onClick={this.handleClick('people')}
              >
              <i className="fa fa-user" aria-hidden="true"></i> People
            </button></li>
          </ul>
        </aside>
        <TrackIndexContainer />
      </div>
    )
  }
}

export default Search;
