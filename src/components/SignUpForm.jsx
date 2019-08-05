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
    this.props.signUpCallback(this.state.name, this.state.email, this.state.password);

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
      <div >
        <div className="UsageHeader">
        </div>
        <div className="container containerbkg">
          <div className="usageWrap">
            <div className="row px-1 headerRow">
              <div className=" signforms">
                <h3 className="pb-2 headers">Current User</h3>
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
                    <button className="btn btn-dark" id="signinoutBtn" onClick={this.handleSignIn}>Sign In</button>
                  </div>
                </form>
              </div>

              <div className=" signforms">
                <h3 className="pb-2 headers">New User</h3>
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
                    <button className="btn btn-dark mr-2" id="signinoutBtn" onClick={this.handleSignUp}>Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="container text-center text-md-left mt-5 footerCS">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footerSection">
              <h6 className="text-uppercase font-weight-bold">CollegeStudio</h6>
              <hr className="line" />
              <p className="footerPtag">Home for your future school. This is how you find the perfect college—or colleges—for you.</p>
            </div>
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footerSection">
              <h6 className="text-uppercase font-weight-bold">Sources</h6>
              <hr className="line" />
              <p>
                <a href="https://collegescorecard.ed.gov/data/documentation/">API</a>
              </p>
            </div>
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footerSection">
              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="line" />
              <p> Seattle, WA 98027, US</p>
              <p><a href="mailto: info@example.com">CollegeStudio@uw.edu</a></p>

            </div>
          </div>
        </div>

      </div>
    );
  }
}
export default SignUpForm