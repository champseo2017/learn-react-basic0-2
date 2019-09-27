import React, { Component } from "react";
import Album from "../Albums/Album";
import { checknull } from "../../exfunction";

class AlbumList extends Component {
  render() {
    const { data } = this.props;
    let checkdatanull = checknull(data);
    return (
      <div>
        {checkdatanull &&
          checkdatanull.map(e => {
            return <Album data={e} key={e.id} />;
          })}
      </div>
    );
  }
}

export default AlbumList;
