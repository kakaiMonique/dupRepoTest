import React, { Component } from "react";
import firebase from 'firebase/app';
import Favorites from "./Favorites";
import { withRouter } from "react-router";


class SchoolCard extends Component {
  constructor() {
    super()
    this.state = {
      favorited: false,
      postKey: null,
      unrender: false
    }
  }

  saveSchool = (event) => {
    event.preventDefault(); //don't submit
    if (this.props.currentUser) {
      let postPath = "users/" + this.props.currentUser.uid + "/favorites";

      if (this.state.favorited === false) {
        this.setState({ favorited: true });

        let key = firebase.database().ref(postPath).push(this.props.Schooldetails).key;
        firebase.database().ref(postPath + "/" + key).update({ Favorited: true });
        this.setState({ postKey: key })

      } else {
        if(this.props.isFavorited === true) {
            firebase.database().ref(postPath + "/" + this.props.id).remove();
            this.setState({unrender: true});
        } else {
            firebase.database().ref(postPath + "/" + this.state.postKey).remove();
            this.setState({favorited: false});
        }

      }
    }
    else {
      alert("Please,log in to save your schools")
    }
  }

  componentDidMount() {
    if(this.props.isFavorited === true) {
      this.setState({favorited: true});
    }
  }

  render() {


    const { Schooldetails } = this.props;
    let cardDeleteButton = null;

    if (this.state.favorited === false) {
      cardDeleteButton = <button onClick={this.saveSchool} className="btn btn-dark btn btn-md ml-2">Favorite</button>;
    } else {
      cardDeleteButton = <button onClick={this.saveSchool} className="btn btn-dark btn btn-md ml-2">Delete</button>;
    }

    if(this.state.unrender === false) {
        return (
            <div>
                <div className='cards' style={{width: 26 + 'em'}}>
                    <div className="card mb-4">
                        <div className="card-header" id="card-header-blue">
                            <strong>{Schooldetails.name}</strong>
                            <br/>
                            <br/>
                            <h6 className="card-subtitle mb-6 text-muted ">{Schooldetails.location}</h6>
                        </div>
                        <div className="card-body">
                            <p className="card-text">Acceptance
                                Rate: <strong>{Schooldetails.AcceptanceRate * 100 + '%'}</strong></p>
                            <p className="card-text">Average SAT Score: <strong>{Schooldetails.AverageSATScore}</strong>
                            </p>
                            <p className="card-text">Out of state
                                tuition: <strong>{Schooldetails.OutOfStateTuition}</strong></p>
                            <p className="card-text">In state tuition: <strong>{Schooldetails.InStateTuition}</strong>
                            </p>
                            <p className="card-text">Students with any
                                loan: <strong>{Schooldetails.StudentsWithAnyLoan * 100 + '%'}</strong></p>
                            <p className="card-text">Students Size: <strong>{Schooldetails.StudentsSize}</strong></p>
                            <hr/>
                            <a href={"https://" + Schooldetails.SchoolWebsite} target="_blank" rel="noopener noreferrer"
                               className="btn btn-dark btn btn-md">Website</a>
                            {cardDeleteButton}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
      return null;
    }
  }
}

export default SchoolCard;