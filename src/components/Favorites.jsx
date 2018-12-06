import React, { Component } from "react";
import SchoolCard from "./SchoolCard"
import firebase from "firebase/app"

class Favorites extends Component {
    constructor(props) {
        super(props)

        this.state = {
            favSchools: null
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
                <h1 className= " searchTextPH p-4">Your favorite schools</h1>
                <div className = "row">
                    {this.state.favSchools}
                </div>

            </div>
        );
    }
}

export default Favorites;