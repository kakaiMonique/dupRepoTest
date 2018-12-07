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
        <section id="SideBar">
          <div className="findWrapper ">
            <div className="leftWrapper">
              <div className="container-fluid">
                <SideBar handleFilterInput={this.props.handleFilterInput}
                  schoolData={this.props.schoolData}
                  currentUser={this.props.currentUser} toggleFav={this.props.toggleFav} handleUserInput={this.props.handleUserInput} handleSchoolState={this.props.handleSchoolState}
                  handleSubmit={this.props.handleSubmit}
                  UserFilterInput={this.props.UserFilterInput}
                  displayFavorited={this.props.displayFavorited}
                />
              </div>
            </div>
            <div className="rightWrapper">
              <SchoolMap currentUser={this.props.currentUser} schoolData={this.props.schoolData} displayFavorited={this.props.displayFavorited} />
              <SchoolCardSection currentUser={this.props.currentUser} schoolData={this.props.schoolData} />
            </div>
          </div>

        </section>
      </div>
    );
  }
}

export default SearchPage