import React, { Component } from "react";
import User from "./User";
import { checknull } from "../../exfunction";

class UserList extends Component {
  render() {
    const { data } = this.props;
    let checkdatanull = checknull(data.data);
    return (
      <div>
        {checkdatanull &&
          checkdatanull.map(e => {
            return <User data={e} key={e.id} />;
          })}
      </div>
    );
  }
}

export default UserList;
