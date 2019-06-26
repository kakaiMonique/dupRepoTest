import React, { Component } from 'react'; //import React Component
import "../css/SignUpForm.css";

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      'email': undefined,
      'password': undefined,
      'name': undefined,
    };
  }

  //update state for specific field
  handleChange = (event) => {
    let field = event.target.name; //which input
    let value = event.target.value; //what value

    let changes = {}; //object to hold changes
    changes[field] = value; //change this field
    this.setState(changes); //update state
  }

  //handle signUp button
  handleSignUp = (event) => {
    event.preventDefault(); //don't submit
    this.props.signUpCallback( this.state.name, this.state.email, this.state.password);

    this.props.history.push("/favorites")
  }

  //handle signIn button
  handleSignIn = (event) => {
    event.preventDefault(); //don't submit
    this.props.signInCallback(this.state.email, this.state.password);
    this.props.history.push("/favorites")
  }

  render() {
    return (
      <div className="container">
        <div className="containerWrap">
          <div className="row px-3 headerRow">
            <div className="col-md signforms">
              <h3 className="pb-2">Current User</h3>
              <form aria-label="Log in for existing users">
                    {/* email */}
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-control"
                               id="email"
                               type="email"
                               name="email"
                               placeholder="your email"
                               onChange={this.handleChange}
                        />
                    </div>

                    {/* password */}
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-control"
                               id="password"
                               type="password"
                               name="password"
                               placeholder="your password"
                               onChange={this.handleChange}
                        />
                    </div>

                    {/* buttons */}
                    <div className="form-group">
                        <button className="btn btn-dark" id= "signinoutBtn" onClick={this.handleSignIn}>SIGN IN</button>
                    </div>
                </form>
            </div>
            <div className="col-md signforms">
              <h3 className="pb-2">New User</h3>
              <form aria-label="sign up for new users">
                {/* name */}
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input className="form-control"
                    id="name"
                    name="name"
                    placeholder="your new user name"
                    onChange={this.handleChange}
                  />
                </div>

                {/* email */}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input className="form-control"
                    id="emailSignUp"
                    type="email"
                    name="email"
                    placeholder="your new email"
                    onChange={this.handleChange}
                  />
                </div>

                {/* password */}
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input className="form-control"
                    id="passwordSignUp"
                    type="password"
                    name="password"
                    placeholder="your new password"
                    onChange={this.handleChange}
                  />
                </div>

                {/* buttons */}
                <div className="form-group">
                  <button className="btn btn-dark mr-2" id= "signinoutBtn" onClick={this.handleSignUp}>SIGN UP</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUpForm