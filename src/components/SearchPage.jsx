import Home from "./Home"
import SideBar from "./SideBar"
import React, { Component } from "react";
import SchoolCardSection from "./SchoolCardSection"
import SchoolMap from "./SchoolMap";

export class SearchPage extends Component {

    render() {
      return (
        <div>
          <section>
            <Home />
          </section>
          <div className="findWrapper " id="SideBar">
            <div className="leftWrapper">
              <div className="container-fluid">
                <SideBar schoolData={this.props.schoolData} handleUserInput={this.props.handleUserInput} handleSubmit={this.props.handleSubmit} />
              </div>
            </div>
            <div className="rightWrapper">
            <SchoolMap schoolData={this.props.schoolData} />
              <SchoolCardSection currentUser={this.props.currentUser} schoolData={this.props.schoolData} />
            </div>
          </div>
        </div>
      );
    }
  }

  export default SearchPage