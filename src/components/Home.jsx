import React, { Component } from "react";
class Home extends Component {
    render() {
      return (
        <section className="Home" id="Home">
  
          <div className="HomeContainer">
            <div id="HomeLeft">
              <div id="HomeILL"></div>
            </div>
            <div id="HomeRight">
              <div className="container" id="HRcontainer">
                <h2 className="HomeH2" >Find a college</h2>
                <h1 className="HomeH1">that's right for you!</h1>
  
                <p className="HomeP">We created this ultimate guide to the
                college search because we know finding a school that fits
                you—truly fits you—is the secret to college success. When
                you find the right college match, everything else tends to
                fall into place: your chances of being accepted, your
                financial aid, your happiness.Head over to the find tab
                to search and visualze.</p>
  
                <a href="#SideBar" className=" btn btn-dark HomeBtn">Find</a>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }

  export default Home;