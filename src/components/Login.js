import React from "react";
import { connect } from "react-redux";
import { fetchAuth, setStatus } from "./../actions";

class Login extends React.Component {
  state = {
    email: "",
    passkey: "",
    status: false
  };

  componentDidMount() {
    this.props.fetchAuth();
  }

  submitHandle = e => {
    e.preventDefault();
    const { email, passkey } = this.state;
    const { username, password } = this.props.auth;

    if (email === username && passkey === password) {
      console.log(this.props, "location");
      this.props.setStatus(true);
      this.props.history.push("/usersList");
    } else {
      alert("Wrong Email and Username,Please try again with correct password");
    }
  };

  changeHandle = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  renderList = () => {
    console.log(this.state);
    return (
      <div className=" ui center container segment">
        <div className="ui middle aligned center aligned grid">
          <div className="column">
            <h2 className="ui teal image header">
              <div className="content">Log-in to your account</div>
            </h2>
            <form className="ui large form" onSubmit={this.submitHandle}>
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon" />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="E-mail address"
                      id="email"
                      onChange={this.changeHandle}
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon" />
                    <input
                      required
                      minLength="8"
                      value={this.state.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                      id="passkey"
                      onChange={this.changeHandle}
                    />
                  </div>
                </div>

                <input
                  className="ui fluid  teal submit button"
                  type="submit"
                  value="Submit"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state, "state");
  return { auth: state.auth };
};
export default connect(
  mapStateToProps,
  { fetchAuth, setStatus }
)(Login);
