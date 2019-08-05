import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div >
      <section className="Home" id="Home">
        <div className="HomeWrapper">
          <div className="HomeContainer">

            <div id="HomeRight">
              <div className="container" id="HRcontainer">
                <h2 className="HomeH2" >Find a college</h2>
                <h1 className="HomeH1">that's right for you!</h1>

                <p className="HomeP">We created this ultimate guide to the
                college search because we know finding a school that fits
                you—truly fits you—is the secret to college success. Head over to the search tab
                to search and visualze.</p>
                <br />

                <a href="/search" className=" btn-lg HomeBtn">Find Schools</a>
              </div>
            </div>
            {/* <div id="HomeLeft">
              <div id="HomeILL"></div>
            </div> */}
          </div>
        </div>
      </section>
      </div>
    );
  }
}

export default Home;