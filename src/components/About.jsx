import React, { Component } from "react";
import "../css/about.css";

class About extends Component {

    render() {
        return (
            <div >
                <div className="UsageHeader">

                </div>
                <div className="container containerbkg">
                    <div className="usageWrap">
                        <div id="Usage" className="Usage">
                            <h2>Usage</h2>
                            <p className="usagep">This app allows users to discover schools from the Search page
                            in multiple different ways:
                                <br />
                            </p>
                            <ul className="ul">
                                <li>
                                    Search for a school using its name (i.e. Clemson University) or abbreviated state that
                                    it's in (i.e. NY)
                            </li>
                                <li>
                                    Constrain the out of state tuition and refine your search
                            </li>
                            <li>
                                    Add or remove schools from your favorite list
                            </li>
                                
                            </ul>
                            <p className="usagep">
                                Users can discover schools this way whether or not they have created an account.
                            A user can create an account using the  Sign In page, where they can enter their
                                            name, email, and a password to be able to create a new account. Once an account has
                                            been made, the user can sign in or out using this login information.
                                            Once logged in, a user has the ability to add and remove a college to their favorites
                                            list directly from viewing that college's card and clicking on
                            the  Favorite or Delete button on the bottom of the card. Additionally,
                                            upon logging out and back in, user's preferred tuition value is saved in the search sidebar
                            on the Search page.
                        </p>
                        </div>
                        <div id="SectionAbout">
                            <h2>About</h2>
                            <p className="usagep">
                                We know that there are many amazing colleges and universities in the united states. Although finding the
                                right one might be tiring, we hope to be a support on this amazing journey. We use the College
                                Scorecard API collected by the US government to provide necessary quick facts about specific colleges, such as:
                            <br />
                            </p>
                            <ul className="ul">
                                <li>Location</li>
                                <li>Acceptance rate</li>
                                <li>Average SAT score</li>
                                <li>Tuition</li>
                                <li>Student population</li>
                                <li>A link to the school's website</li>
                            </ul>
                            <p className="usagep">
                                The creation of this web app in this space is to simply
                                address the inaccessibility of colleges information and to present it with easy to use elements that
                                 make the UX more intuitive than what we experience on the web today. Tailored for:
                            <br />

                            </p>
                            <ul className="ul">
                                <li>High school gradates</li>
                                <li>Transferring students</li>
                                <li>And simply for anyone who’s interested in finding quick facts about a college.</li>
                            </ul>

                        </div>
                    </div>
                </div>
                <footer>
                    <Footer />
                </footer>
                {/* <section id="team">
                    <div className="container">
                        <h2 id="TeamH1">Our Team</h2>
                        <div className="flex-container">
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/mikias.jpg')} alt="Mikias" />
                                <div className="card-body">
                                    <h5 className="card-title">Mikias Lema</h5>
                                    <p className="card-text">
                                    Mickey is a Junior studying Informatics at UW and specializing in HCI. 
                                    He was born in Addis Ababa, Ethiopia and enjoys watching and playing soccer.
                                    </p>
                                </div>
                            </div>
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/kyra.jpg')} alt="Kyra" />
                                <div className="card-body">
                                    <h5 className="card-title">Kyra Bautista</h5>
                                    <p className="card-text">
                                        Kyra is senior studying Informatics at UW. She is from Monroe, WA and enjoys
                                        spending time with her cats and making 3D animated films. 
                                    </p>
                                </div>
                            </div>
                            <div className="card id-card" >
                                <img className="card-img-top cardImg" src={require('../imgs/tyler.jpg')} alt="Tyler" />
                                <div className="card-body">
                                    <h5 className="card-title">Tyler Van Brocklin</h5>
                                    <p className="card-text">
                                        Tyler is a Junior studying Informatics at UW. He is from Lake Stevens, WA and
                                        enjoys listening to music and running in his free time.
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
                </section > */}
            </div >


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
                                <a className="footerLinks" href="https://collegescorecard.ed.gov/data/documentation/">API</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footerSection">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="line" />
                            <p> Seattle, WA 98027, US</p>
                            <p><a className="footerLinks" href="mailto: info@example.com">CollegeStudio@uw.edu</a></p>

                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default About;