import React from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../actions";
import { Link } from "react-router-dom";
class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    console.log(this.props.fetchUsers());
  }

  renderList = () => {
    // console.log(this.props.user.user);

    return this.props.user.map(post => {
      return (
        <div className="item" key={post.id}>
          <div className="content">
            <div className="header">ID: {post.id}</div>
            <div className="description">
              <h2>Name: {post.name}</h2>
            </div>
            <div className="description">
              <h2>Age: {post.age}</h2>
            </div>
            <div className="description">
              <h2>Gender: {post.gender}</h2>
            </div>
            <div className="description">
              <h2>Email: {post.email}</h2>
            </div>
            <div className="description">
              <h2>Phone Number: {post.phoneNo}</h2>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.auth.status, "status");

    return (
      <div>
        {this.props.auth.status ? (
          <div className="ui relaxed divided list container segment">
            {this.renderList()}
          </div>
        ) : (
          <div className="ui container error message">
            <h1>Please Login to view this page</h1>
            Click <Link to="/"> here </Link>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return { user: state.users, auth: state.auth };
};
export default connect(
  mapStateToProps,
  { fetchUsers }
)(UserList);
