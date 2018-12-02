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
    this.props.signUpCallback(this.state.email, this.state.password, this.state.name);
  }

  //handle signIn button
  handleSignIn = (event) => {
    event.preventDefault(); //don't submit
    this.props.signInCallback(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="container">
        <div className="container">
          <div className="row px-3 headerRow">
            <h1>Sign In / Sign Up</h1>
          </div>
          
            <form>
              {/* name */}
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input className="form-control"
                  id="name"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>

              {/* email */}
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input className="form-control"
                  id="email"
                  type="email"
                  name="email"
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
                  onChange={this.handleChange}
                />
              </div>

              {/* buttons */}
              <div className="form-group">
                <button className="btn btn-primary mr-2" onClick={this.handleSignUp}>Sign-up</button>
                <button className="btn btn-primary" onClick={this.handleSignIn}>Sign-in</button>
              </div>
            </form>
          </div>
        
      </div>
    )
  }
}

export default SignUpForm