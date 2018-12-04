import React, { Component } from "react";
import firebase from 'firebase/app';

 class SchoolCard extends Component {
    constructor() {
      super()
      this.state = {favorited: false,
      postKey: null}
    }

    saveSchool = (event) => {
        event.preventDefault(); //don't submit

        let postPath = "users/" + this.props.currentUser.uid + "/favorites";
        if(this.state.favorited === false) {
          this.setState({favorited: true});

          let key = firebase.database().ref(postPath).push(this.props.Schooldetails).key;
          firebase.database().ref(postPath + "/" + key).update({Favorited: true});
          this.setState({postKey: key})
        
        } else {
          firebase.database().ref(postPath + "/" + this.state.postKey).remove();
          this.setState({favorited: false});

        }
    }
   
    render() {
      const { Schooldetails } = this.props;

      let cardDeleteButton = null;
      if(this.state.favorited === false) {
        cardDeleteButton = <button onClick={this.saveSchool} className="btn btn-dark btn btn-md ml-2">Favorite</button>;
      } else {
        cardDeleteButton = <button onClick={this.saveSchool} className="btn btn-dark btn btn-md ml-2">Delete</button>;
      }

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
                <a href={"https://" + Schooldetails.SchoolWebsite} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn btn-md">Website</a>
                {cardDeleteButton}
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  export default SchoolCard ;