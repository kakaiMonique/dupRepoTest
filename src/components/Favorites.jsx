import React, { Component } from "react";
import SchoolCard from "./SchoolCard"
import firebase from "firebase/app"

class Favorites extends Component {
<<<<<<< HEAD
    render() {
        console.log("RENDER FAV");
        let favorites = null;
        let heading = null;
        if (this.props.currentUser) {
            firebase.database().ref('users/' + this.props.currentUser.uid + '/favorites/').on('value', (snapshot) => {
                let values = snapshot.val();
                console.log(values);
                console.log(this.props.currentUser.uid);
                if(values != null) {
                    console.log("MADE IT");
                    favorites = (Object.keys(values).map(key => (
                        <SchoolCard key={key} id={key} isFavorited={true} Schooldetails={values[key]} currentUser={this.props.currentUser}/>
                    )));
                    console.log(favorites);
                } else {
                    favorites = (<h5 className= "pt-5">You have no favorite schools!</h5>)
                }
            });
             heading = (<h3 className= " jumbotron jumbotron-fluid searchTextPH pt-5">Your favorites schools</h3>)
        } else {
            favorites = <h1 className="pt-5">Please Sign In to use this feature!</h1>
=======
    constructor(props) {
        super(props)

        this.state = {
            favSchools: null
>>>>>>> f27b59078abc0d461372b300a70928dc6e27fc06
        }

        this.changeState = this.changeState.bind(this);
    }

    changeState(data) {
        this.setState({favSchools: data})
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/favorites/').on('value', (snapshot) => {
                    let values = snapshot.val();
                    let favorites = null;
                    if(values != null) {
                        favorites = (Object.keys(values).map(key => (
                            <SchoolCard key={key} id={key} isFavorited={true} Schooldetails={values[key]} currentUser={user}/>
                        )));
                    } else {
                        favorites = (<h3 className= "p-4"><em>Add schools to favorites and find them here!</em></h3>)
                    }
                    this.changeState(favorites);
                });
            } else {
                this.setState({favSchools: (<h1 className="p-5">You must be logged in to use this feature!</h1>)})
            }
        });
    }

    componentWillUnmount() {
        firebase.database().ref('users/' + this.props.currentUser.uid + '/favorites/').off()
    }


    render() {
        return (
            <div className="container pt-5">
<<<<<<< HEAD
                {heading}
                <div className = "row searchResultsWrap2">
                    {favorites}
=======
                <h1 className= " searchTextPH p-4">Your favorite schools</h1>
                <div className = "flex-container">
                    {this.state.favSchools}
>>>>>>> f27b59078abc0d461372b300a70928dc6e27fc06
                </div>

            </div>
        );
    }
}

export default Favorites;