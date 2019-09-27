import React, { Component } from "react";
import { Link } from "react-router";
import { checknull } from "../../exfunction";

class Album extends Component {
  render() {
    const { data } = this.props;
    let checkdataalbum = checknull(data);
    return (
      <div>
        <Link to={`/photo/${checkdataalbum.id}/${checkdataalbum.title}`}>
          {checkdataalbum.title}
        </Link>
      </div>
    );
  }
}

export default Album;
