import React, { Component } from "react";
import ToggleButton from 'react-toggle-button'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

 class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 1000,
        userName: null
    };
  }

  componentDidMount() {
      if(this.props.filterValue != null) {
          this.setState({value: this.props.filterValue})
      }
      if(this.props.currentUser) {
          this.setState({userName: this.props.currentUser.displayName})
      }
  }

    render() {
        const borderRadiusStyle = { borderRadius: 2 }
        let toggle = null;

        if(this.props.currentUser) {
            toggle = (
                <div className="py-3">
                    <p className="text-white">Toggle showing your favorite schools on the map: </p>
                    <br/>
                    <ToggleButton
                    value={this.props.displayFavorited}
                    thumbStyle={borderRadiusStyle}
                    trackStyle={borderRadiusStyle}
                    onToggle={this.props.toggleFav} />
                </div>
            );
        }

        return (
        <div className ="container">
        <p className="text-white">Welcome <strong>{this.state.userName ? this.state.userName : ""}</strong></p>
        {toggle}
        <form>
            <div className="form-group" id="form">
              <label  id="searchLabel">
                  Search by school name
              </label>
              <small  className="form-text text text-muted">Include the campus name for a specific college</small>
              <hr />
              <input
                type="text"
                className="form-control"
                id="searchQuery"
                placeholder="School name.."
                name="schoolName"
                aria-label="School Name"
                aria-describedby="basic-addon2"
                onChange={this.props.handleSchoolName}
              />
            </div>
    

            <div className="form-group" id="form">
              <label  id="searchLabel">
                Search by school state (ex. "WA")
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
            </div>
          </form>

          <div className="form-group" id="form">
            
            <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
              Filter results by Out-of-State tuition 
            </label>
            <br />
            <hr />
            <br />
   
               <InputRange
                maxValue= {50000}
                minValue={1000}
                value={this.state.value}
                onChange={value => this.setState({ value })}
                onChangeComplete={value => this.props.handleFilterInput(value)} />
                
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