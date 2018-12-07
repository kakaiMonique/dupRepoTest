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
        <div className="container">
          <div className="row px-3 headerRow">
            <div className="col-md">
              <h3 className="pb-2">Sign In</h3>
              <form aria-label="Log in for existing users">
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
                        <button className="btn btn-dark" onClick={this.handleSignIn}>Sign-in</button>
                    </div>
                </form>
            </div>
            <div className="col-md">
              <h3 className="pb-2">Sign Up</h3>
              <form aria-label="sign up for new users">
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
                    id="emailSignUp"
                    type="email"
                    name="email"
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
                    onChange={this.handleChange}
                  />
                </div>

                {/* buttons */}
                <div className="form-group">
                  <button className="btn btn-dark mr-2" onClick={this.handleSignUp}>Sign-up</button>
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