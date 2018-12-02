import React, { Component } from "react";
import SchoolCard from "./SchoolCard"

 class SchoolCardSection extends Component {
    render() {
      const { schoolData } = this.props;
      return (
        <div className="row searchResultsWrap2" id="searchResultsWrap">
          {
            Object.keys(schoolData).map(key => (
              <SchoolCard key={key} Schooldetails={schoolData[key]} />
            ))
          }
  
          <h2 className="searchTextPH">Featured schools</h2>
          <div className='cards' style={{ width: 26 + 'em' }}>
            <div className="card mb-4">
              <div className="card-header" id="card-header-blue">University of Washington-Seattle Campus
                <br />
                <br />
                <h6 className="card-subtitle mb-6 text-muted ">Seattle, WA</h6>
              </div>
              <div className="card-body">
                <p className="card-text">Acceptance Rate: <strong>45%</strong></p>
                <p className="card-text">Average SAT Score: <strong>1266</strong></p>
                <p className="card-text">Out of state tuition: <strong>$34791</strong></p>
                <p className="card-text">In state tuition: <strong>$10753</strong></p>
                <p className="card-text">Students with any loan: <strong>71%</strong></p>
                <p className="card-text">Students Size: <strong>29831</strong></p>
                <hr />
                <a href="https://www.washington.edu" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block btn-md">Website</a>
              </div>
            </div>
          </div>
  
          <div className='cards' style={{ width: 26 + 'em' }}>
            <div className="card mb-4">
              <div className="card-header" id="card-header-blue">Yale University
                <br />
                <br />
                <h6 className="card-subtitle mb-6 text-muted ">New Haven, CT</h6>
              </div>
              <div className="card-body">
                <p className="card-text">Acceptance Rate: <strong>6%</strong></p>
                <p className="card-text">Average SAT Score: <strong>1502</strong></p>
                <p className="card-text">Out of state tuition: <strong>$49480</strong></p>
                <p className="card-text">In state tuition: <strong>$50480</strong></p>
                <p className="card-text">Students with any loan: <strong>45%</strong></p>
                <p className="card-text">Students Size: <strong>5471</strong></p>
                <hr />
                <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block btn-md">Website</a>
              </div>
            </div>
          </div>
  
          <div className='cards' style={{ width: 26 + 'em' }}>
            <div className="card mb-4">
              <div className="card-header" id="card-header-blue">Seattle Central College
                <br />
                <br />
                <h6 className="card-subtitle mb-6 text-muted ">Seattle, WA</h6>
              </div>
              <div className="card-body">
                <p className="card-text">Acceptance Rate: <strong>Unreported</strong></p>
                <p className="card-text">Average SAT Score: <strong>Unreported</strong></p>
                <p className="card-text">Out of state tuition: <strong>$4332</strong></p>
                <p className="card-text">In state tuition: <strong>$39253</strong></p>
                <p className="card-text">Students with any loan: <strong>27%</strong></p>
                <p className="card-text">Students Size: <strong>3398</strong></p>
                <hr />
                <a href="https://seattlecentral.edu" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block btn-md">Website</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

export default SchoolCardSection