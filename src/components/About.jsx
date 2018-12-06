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
                            We know that there’re many amazing colleges and universities in the united states. Although finding the
                            right one might be tiring, we hope to be a support on this amazing journey.
                            We use the xxx API collected by the government
                            Lorem ipsum dolor sit amet
                            consectetur adipisicing elit. Quaerat sequi esse, nam beatae ducimus rerum aperiam eaque iusto
                            inventore debitis reprehenderit pariatur voluptas tempora laborum ullam, in, ipsa vitae doloremque!.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae mollitia et, assumenda modi odio
                            quo fugiat, optio recusandae voluptate illum amet quae ad non dolores eligendi exercitationem quod iure
                            consequatur.
                            <br />
                            <br />
                            The creation of this web app in this space is to simply
                            address the inaccessibility of colleges information and to present it with beautiful UI elements that
                            will make the user experience a lot better than what we experience on the web today. Tailored for:
                            <br />
                            <br />
                        </p>
                        <ul>
                            <li>High school Gradates</li>
                            <li>Transferring students</li>
                            <li>And simply for anyone who’s interested in finding fast facts about a college.</li>
                        </ul>
                    </section>
                </div>
                <section id="team">
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
                </section >
                <div className="container">
                    <section id="Usage">
                        <h2>Usage</h2>
                        <p className="lead">This app allows users to discover schools from the Find page
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
                        <p>
                            Users can discover schools this way whether or not they have created an account.
                            A user can create an account using the Sign In tab, where they can enter their name, email,
                            and a password to be able to create a new account. Once an account has been made, the user
                            can sign in or out using this login information whenever they want. Once logged in, a
                            user has the ability to add and remove a college to their favorites list directly from
                            viewing that college's card and clicking on the
                        </p>
                    </section>
                </div>
            </div >
        );
    }
}
export default About;