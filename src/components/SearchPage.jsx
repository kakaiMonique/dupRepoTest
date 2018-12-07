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
                <SideBar 
                  schoolData={this.props.schoolData}
                  currentUser={this.props.currentUser} 
                  toggleFav={this.props.toggleFav}
                  filterValue={this.props.filterValue}
                  handleSchoolName={this.props.handleSchoolName} 
                  handleSchoolState={this.props.handleSchoolState}
                  handleFilterInput={this.props.handleFilterInput}
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