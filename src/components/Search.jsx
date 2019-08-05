import React, { Component } from "react";
import SideBar from "./SideBar"
import SchoolCardSection from "./SchoolCardSection"
import SchoolMap from "./SchoolMap";


class Search extends Component {

  render() {
    const { schoolData } = this.props;
    const numSchools = schoolData.length
    return (
      <div>
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
              <SchoolMap 
              schoolData={this.props.schoolData} 
              currentUser={this.props.currentUser} 
              displayFavorited={this.props.displayFavorited} />

              <div className="searchResultsHeader">
              <h2 className="searchTextPH">Your search results...</h2>
              <p className="searchResultsCounter">showing {numSchools} schools</p>
              </div>

              <SchoolCardSection 
              currentUser={this.props.currentUser} 
              schoolData={this.props.schoolData} />
            </div>
          </div>
        </section>
      </div >
    );
  }
}

export default Search;