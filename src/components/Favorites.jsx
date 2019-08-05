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
        this.setState({ favSchools: data })
    }

    componentDidMount() {
        this.unAuthSubFunction = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                firebase.database().ref('users/' + user.uid + '/favorites/').on('value', (snapshot) => {
                    let values = snapshot.val();
                    let favorites = null;
                    if (values != null) {
                        favorites = (Object.keys(values).map(key => (
                            <SchoolCard key={key} id={key} isFavorited={true} Schooldetails={values[key]} currentUser={user} />
                        )));
                    } else {
                        favorites = (<h2 className=" p-4"><small>Add schools to favorites and find them here!</small></h2>)
                    }
                    this.changeState(favorites);
                });
            } else {
                this.setState({ favSchools: (<h2 className="usagep">You must be logged in to use this feature.</h2>) })
            }
        });
    }

    componentWillUnmount() {
        if (this.props.currentUser) {
            firebase.database().ref('users/' + this.props.currentUser.uid + '/favorites/').off()
        }
        this.unAuthSubFunction()
    }


    render() {
        return (
            <div >
                <div className="UsageHeader">
                </div>
                <div className="container containerbkg ">
                    <div className="usageWrap">
                        <div id="Usage" className="Usage">
                            <div className="favheaderwarp">
                                <h1 className=" searchTextPH p-4">Your favorite schools</h1>
                            </div>
                            <div className="flex-container favWrapperCS">
                                
                                {this.state.favSchools
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
            </div>
        );
    }
}
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container text-center text-md-left mt-5 footerCS">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 footerSection">
                            <h6 className="text-uppercase font-weight-bold">CollegeStudio</h6>
                            <hr className="line" />
                            <p className="footerPtag">Home for your future school. This is how you find the perfect college—or colleges—for you.</p>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 footerSection">
                            <h6 className="text-uppercase font-weight-bold">Sources</h6>
                            <hr className="line" />
                            <p>
                                <a href="https://collegescorecard.ed.gov/data/documentation/">API</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footerSection">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="line" />
                            <p> Seattle, WA 98027, US</p>
                            <p><a href="mailto: info@example.com">CollegeStudio@uw.edu</a></p>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Favorites;