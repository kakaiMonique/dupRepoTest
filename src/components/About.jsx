import React, { Component } from "react";
import "../css/about.css";

class About extends Component {

    render() {
        return (
            <div>
                <div className="container">
                    <section id="SectionAbout">
                        <h2>About</h2>
                        <p className="lead">
                            We know that there are many amazing colleges and universities in the united states.Although finding the
                            right one might be tiring, we hope to be a support on this amazing journey. We use the College
                            Scorecard API collected by the US government to provide quick facts about specific colleges, such as...
                            <br />
                            <br />
                        </p>
                        <ul>
                            <li>Location</li>
                            <li>Acceptance rate</li>
                            <li>Average SAT score</li>
                            <li>Tuition</li>
                            <li>Student population</li>
                            <li>A link to the school's website</li>
                            <li>... and more!</li>
                        </ul>
                        <p className="lead">
                            The creation of this web app in this space is to simply
                            address the inaccessibility of colleges information and to present it with beautiful UI elements that
                            will make the user experience a lot better than what we experience on the web today. Tailored for:
                            <br />
                            <br />
                        </p>
                        <ul>
                            <li>High school Gradates</li>
                            <li>Transferring students</li>
                            <li>And simply for anyone who’s interested in finding quick facts about a college.</li>
                        </ul>

                    </section>
                </div>

                <section id="team">
                    <div className="container">
                        <h2 id="TeamH1">Our Team</h2>
                        <div className="flex-container">
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/mikias.jpg')} alt="Mikias" />
                                <div className="card-body">
                                    <h5 className="card-title">Mikias Lema</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, debitis,
                                        nulla incidunt est earum perspiciatis fugit rerum ipsam dolorem exercitationem vitae.
                                    </p>
                                </div>
                            </div>
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/kyra.jpg')} alt="Kyra" />
                                <div className="card-body">
                                    <h5 className="card-title">Kyra Bautista</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, debitis,
                                        nulla incidunt est earum perspiciatis fugit rerum ipsam dolorem exercitationem vitae.
                                    </p>
                                </div>
                            </div>
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/tyler.jpg')} alt="Tyler" />
                                <div className="card-body">
                                    <h5 className="card-title">Tyler Van Brocklin</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, debitis,
                                        nulla incidunt est earum perspiciatis fugit rerum ipsam dolorem exercitationem vitae.
                                    </p>
                                </div>
                            </div>
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/lauren.jpg')} alt="Lauren" />
                                <div className="card-body">
                                    <h5 className="card-title">Lauren Smith</h5>
                                    <p className="card-text">
                                        Lauren is a Junior studying Informatics at UW. She comes from Menlo Park, CA and
                                        her favorite part about Seattle is the Montlake Cut during the summer!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >


                <div className="container">
                    <section id="Usage">
                        <h2>Usage</h2>
                        <p className="lead">This app allows users to discover schools from the <b>Find</b> page
                        in multiple different ways!
                            <br />
                            <br />
                        </p>
                        <ul>
                            <li>
                                Search for a school using its name (i.e. Clemson University) or abbreviated state that
                                it's in (i.e. NY)
                            </li>
                            <li>
                                Constrain the tuition (will write more detail on this once it's up)
                            </li>
                            <li>
                                See schools you already have an eye on with the "Favorites" tab
                            </li>
                        </ul>
                        <p className="lead">
                            Users can discover schools this way whether or not they have created an account.
                            A user can create an account using the  <b>Sign In</b>  tab, where they can enter their
                            name, email, and a password to be able to create a new account. Once an account has
                            been made, the user can sign in or out using this login information whenever they want.
                            Once logged in, a user has the ability to add and remove a college to their favorites
                            list directly from viewing that college's card and clicking on
                            the  <b>Favorite</b>  or  <b>Delete</b>  button on the bottom of the card.
                        </p>
                    </section>
                </div>
            </div >
        );
    }
}

export default About;