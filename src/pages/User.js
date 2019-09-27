import React, { Component } from "react";
import UserList from "../components/Users/UserList";

class User extends Component {
  state = { data: null, isLoading: false };

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(result => this.setState({ data: result, isLoading: false }));
  }

  render() {
    const { data, isLoading } = this.state;
    let dataresult = "";
    if (data == null) {
      return null;
    } else {
      dataresult = data;
    }
    return (
      <div>
        <h1>Users</h1>
        {isLoading && <div>Loading...</div>}
        <UserList data={dataresult} />
      </div>
    );
  }
}

export default User;
