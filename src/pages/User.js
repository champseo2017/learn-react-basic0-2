import React, { Component } from "react";
import UserList from "../components/Users/UserList";
import { connect } from "react-redux";
import { loadUsers } from "../actions";
import { checknull } from "../exfunction";

class User extends Component {
  componentDidMount() {
    this.props.dispatch(loadUsers());
  }

  render() {
    const { users } = this.props;
    let checkdatanull = checknull(users);
    return (
      <div>
        <h1>Users</h1>
        <UserList data={checkdatanull} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  null
)(User);
