import React, { Component } from "react";
 class SchoolCard extends Component {
    render() {
      const { Schooldetails } = this.props;
      return (
        <div>
          <div className='cards' style={{ width: 26 + 'em' }}>
            <div className="card mb-4">
              <div className="card-header" id="card-header-blue">
                <strong>{Schooldetails.name}</strong>
                <br />
                <br />
                <h6 className="card-subtitle mb-6 text-muted ">{Schooldetails.location}</h6>
              </div>
              <div className="card-body">
                <p className="card-text">Acceptance Rate:  <strong>{Schooldetails.AcceptanceRate * 100 + '%'}</strong></p>
                <p className="card-text">Average SAT Score:  <strong>{Schooldetails.AverageSATScore}</strong></p>
                <p className="card-text">Out of state tuition:  <strong>{Schooldetails.OutOfStateTuition}</strong></p>
                <p className="card-text">In state tuition:  <strong>{Schooldetails.InStateTuition}</strong></p>
                <p className="card-text">Students with any loan:  <strong>{Schooldetails.StudentsWithAnyLoan * 100 + '%'}</strong></p>
                <p className="card-text">Students Size:  <strong>{Schooldetails.StudentsSize}</strong></p>
                <hr />
                <a href={"https://" + Schooldetails.SchoolWebsite} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-block btn-md">Website</a>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default SchoolCard ;