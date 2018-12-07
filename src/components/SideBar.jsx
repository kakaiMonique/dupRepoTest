import React, { Component } from "react";
import ToggleButton from 'react-toggle-button'

 class SideBar extends Component {
    constructor(props) {
        super(props)

    }
 
    render() {
        const borderRadiusStyle = { borderRadius: 2 }
        let toggle = null;

        if(this.props.currentUser) {
            toggle = (
                <div className="py-3">
                    <p className="text-white">Toggle showing your favorite schools on the map: </p>
                    <ToggleButton
                    value={this.props.displayFavorited}
                    thumbStyle={borderRadiusStyle}
                    trackStyle={borderRadiusStyle}
                    onToggle={this.props.toggleFav} />
                </div>
            );
        }
        return (
        <div >
          <div className="input-group mb-3" id="form">
              <p className="text-white">Welcome.</p>
              {toggle}
            <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
                Search for the perfect school by entering the name of the university, community college,
                or grad school. Results will update as partial or complete names.
  
            </label>
            <hr />
            <input
              type="text"
              className="form-control"
              id="searchQuery"
              placeholder="School name.."
              name="schoolName"
              aria-label="School Name"
              aria-describedby="basic-addon2"
              onChange={this.props.handleUserInput}
            />
  
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                id="searchButton"
                type="button"
                onClick={this.props.handleSubmit}>
                Search
              </button>
            </div>
          </div>
  
          <div className="input-group mb-3" id="form">
            <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
              Otherwise, if you are unsure of what specific school too look at, then please enter
              a state to get information on university and colleges within your selected area.
              (ex. "WA")
              <br />
              <br />
            </label>
            <hr />
  
            <input
              type="text"
              className="form-control"
              id="searchQueryDemo"
              placeholder="School state.."
              name="schoolState"
              aria-label="State Name"
              aria-describedby="basic-addon2"
              onChange={this.props.handleSchoolState} />
  
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                id="searchButton2"
                type="button"
                onClick={this.props.handleSubmit}>
                Search
            </button>
            </div>

          </div>
          <div className="input-group mb-3" id="form">
            <div className='col-12'>
            <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
              Filter by Tuition
            </label>
            </div>
            <hr></hr>
            <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
              $1000
            </label>" "
            <input
              type="range"
              className="form-control"
              id="searchQueryDemo"
              min="1000"
              max="50000"
              aria-label="school tuition"
              aria-describedby="basic-addon2"
              onChange={this.props.handleFilterInput} />
              " "
              <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
                     ${this.props.UserFilterInput}
             </label>
          </div>
  
          <br />
          <hr />
          <div className="container">
            <a
              href="https://www2.ed.gov/rschstat/landing.jhtml?src=pn"
              className=" DataFrom badge "
              target="_blank" rel="noopener noreferrer">
              Data from U.S. Department of Education.
            </a>
          </div>
        </div>
      )
    }
  }

  export default SideBar