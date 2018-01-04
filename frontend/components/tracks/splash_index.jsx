import React from 'react';
import SplashIndexItemContainer from './splash_index_item_container';

class SplashIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.getTopTracks();
  }

  componentWillReceiveProps({ loading }) {
    if (loading !== this.state.loading) {
      this.setState({ loading })
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="splash-index">
          <i className="fa fa-spinner fa-pulse fa-3x fa-fw loading"></i>
        </div>
      )
    }

    const { tracks, artists } = this.props;
    return (
      <div className="splash-index">
        {
          tracks.map(track => (
            <SplashIndexItemContainer
              key={track.id}
              track={track}
              artist={artists[track.artistId]}
            />
          ))
        }
      </div>
    );
  }
}

export default SplashIndex;
