import React, { Component } from "react";
import { connect } from "react-redux";
import { loadAlbums } from "../actions";
import AlbumList from "../components/Albums/AlbumList";
import { checknull } from "../exfunction";

class Album extends Component {
  componentDidMount() {
    this.props.dispatch(loadAlbums(this.props.params.userID));
  }
  render() {
    const { albums } = this.props;
    let checkdataalbums = checknull(albums);
    if (checkdataalbums.isRejected) {
      return <div>Not Load Albums</div>;
    }

    return (
      <div>
        <h1>Album {this.props.params.title}</h1>
        <AlbumList data={checkdataalbums.data} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    albums: state.albums
  };
};

export default connect(
  mapStateToProps,
  null
)(Album);
