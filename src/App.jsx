import React, { Component } from "react";
import "./css/App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      input: ''
    };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.fetchData();
  }

  handleUserInput(e) {
    this.setState({ input: (e.target.value).toUpperCase() }, () => {
      this.fetchData(this.state.input);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.fetchData(this.state.input)
  }

  fetchData(SearchQuery) {

    let states = ["AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
      "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
      "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
      "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
      "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"]

    let fetchThis;
    console.log("This is searchQuery: " + SearchQuery)
    // states.includes(SearchQuery)
    if (states.indexOf(SearchQuery) > -1) {

      console.log(SearchQuery.length);


      fetchThis = `https://api.data.gov/ed/collegescorecard/v1/schools?school.state=${SearchQuery}&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5`;
      console.log(fetchThis)


    }
    else {
      fetchThis = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${SearchQuery}&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5`;
      console.log(fetchThis)
    }


    fetch(fetchThis)
      .then(res => {
        return res.json();
      })
      .then(

        data => data.results.map(school => ({
          name: `${school["school.name"]}`,
          location: `${school["school.city"]},${school["school.state"]}`,
          AcceptanceRate: `${parseFloat(school["latest.admissions.admission_rate.overall"]).toFixed(2)}`,
          AverageSATScore: `${school["latest.admissions.sat_scores.average.overall"]}`,
          OutOfStateTuition: `${school["latest.cost.tuition.out_of_state"]}`,
          InStateTuition: `${school["latest.cost.tuition.in_state"]}`,
          StudentsWithAnyLoan: `${parseFloat(school["latest.aid.students_with_any_loan"]).toFixed(2)}`,
          StudentsSize: `${school["latest.student.size"]}`,
          SchoolWebsite: `${school["school.school_url"]}`
        }))
      )
      .then(schoolResults => {
        this.setState({ schools: schoolResults })
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {

    return (
      <div>
        <Navigation />
        <main>
          <section>
            <Home />
          </section>

          <section>
            <div className="findWrapper " id="SchoolFilterSection">
              <div className="leftWrapper">
                <div className="container-fluid">

                  <SchoolFilterSection handleUserInput={this.handleUserInput} handleSubmit={this.handleSubmit} />

                </div>

              </div>

              <div className="rightWrapper">


                <SchoolCardSection schoolData={this.state.schools} />


              </div>
            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js" />
          </section>
        </main>
        <footer className="page-footer font-small unique-color-dark">
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
        <div className="container text-center text-md-left mt-5">

          <div className="row mt-3">


            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">CollegeStudio</h6>
              <hr className="line" />
              <p>Home for your future school.This is how you find the perfect college—or colleges—for you</p>

            </div>



            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">


              <h6 className="text-uppercase font-weight-bold">Sources</h6>
              <hr className="line" />
              <p>
                <a className="fotterLinks" href="https://collegescorecard.ed.gov/data/documentation/">API</a>
              </p>

            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">


              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              <hr className="line" />
              <p>
                <i className="fa fa-home mr-3"></i> Seattle, WA 98027, US</p>
              <p>
                <i className="fa fa-envelope mr-3"></i> <a className="contact" href="mailto: info@example.com">info@example.com</a></p>
              <p>
                <i className="fa fa-phone mr-3"></i> <a className="contact" href="tel: 01 234 567 88">+ 01 234 567 88</a>
              </p>

            </div>


          </div>


        </div>

        <div className="footer-copyright text-center py-3">© 2018 Copyright
    </div>
      </div>
    );
  }
}

class Navigation extends Component {

  render() {
    return (
      <header>

        <nav className="navbar fixed-top navbar-expand-lg">

          <a className="navbar-brand" href="index.html">
            <h3 className="navBrand">CollegeStudio</h3>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button" data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div id="navbarNavDropdown" className="navbar-collapse collapse">
            <ul className="navbar-nav mr-auto">
            </ul>
            <ul className="nav navbar-nav NavLinkz">
              <li className="nav-item ">
                <a className="nav-link" href="#Home">
                  Home
              </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#SchoolFilterSection">
                  Find
                  </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html">
                  About
              </a>
              </li>
            </ul>
          </div>
        </nav>

      </header>
    );
  }
}

class Home extends Component {
  render() {
    return (
      <section className="Home" id="Home">

        <div className="HomeContainer">


          <div id="HomeLeft">

            <div id="HomeILL">

            </div>
          </div>

          <div id="HomeRight">

            <div className="container" id="HRcontainer">

              <h2 className="HomeH2" >Find a college</h2>
              <h1 className="HomeH1">that's right for you!</h1>

              <p className="HomeP">We created this ultimate guide to the
              college search because we know finding a school that fits
              you—truly fits you—is the secret to college success. When
              you find the right college match, everything else tends to
              fall into place: your chances of being accepted, your
              financial aid, your happiness.Head over to the find tab
                  to search and visualze.</p>


              <a href="#SchoolFilterSection" className=" btn btn-dark HomeBtn">Find</a>
            </div>

          </div>

        </div>

      </section>
    );
  }
}

class SchoolFilterSection extends Component {
  render() {
    return (
      <div >
        <div className="input-group mb-3" id="form">
          <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
            <br />
            Welcome.
          <br />
            <br /> Search for the perfect school by entering the name of the university, community college, or grad school. Results will update as
                   partial or complete names.
          </label>
          <hr />

          <input
            type="text"
            className="form-control"
            id="searchQuery"
            placeholder="School name.."
            name="schoolName"
            aria-label="School Name"
            aria-describedby="basic-addon2"
            onChange={this.props.handleUserInput.bind(this)} />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              id="searchButton"
              type="button"
              onClick={this.props.handleSubmit.bind(this)}>
              Search
            </button>
          </div>
        </div>

        <div className="input-group mb-3" id="form">
          <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
            Otherwise, if you are unsure of what specific school too look at, then please enter
            a state to get information on university and colleges within your selected area. 
            (ex. "WA")
          </label>
          <hr />

          <input
            type="text"
            className="form-control"
            id="searchQueryDemo"
            placeholder="School state.."
            name="schoolState"
            aria-label="State Name"
            aria-describedby="basic-addon2"
            onChange={this.props.handleUserInput.bind(this)} />

          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              id="searchButton2"
              type="button"
              onClick={this.props.handleSubmit.bind(this)}>
              Search
          </button>
          </div>
        </div>

        <br />
        <hr />
        <div className="container">
          <a
            href="https://www2.ed.gov/rschstat/landing.jhtml?src=pn"
            className=" DataFrom badge "
            target="_blank" rel="noopener noreferrer">
            Data from U.S. Department of Education.
      </a>
        </div>

      </div>
    )
  }
}


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

        <div className='cards' style={{ width: 25 + 'em' }}>

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
              <a href="https://www.washington.edu" target="_blank" rel="noopener noreferrer" className="btn btn-dark  btn-md">Website</a>

            </div>
          </div>
        </div>

        <div className='cards' style={{ width: 25 + 'em' }}>
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
              <a href="https://www.yale.edu" target="_blank" rel="noopener noreferrer" className="btn btn-dark  btn-md">Website</a>
            </div>
          </div>
        </div>

        <div className='cards' style={{ width: 25 + 'em' }}>
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
              <a href="https://seattlecentral.edu" target="_blank" rel="noopener noreferrer" className="btn btn-dark  btn-md">Website</a>
            </div>
          </div>
        </div>

      </div>


    )
  }
}

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
              <a href={"https://" + Schooldetails.SchoolWebsite} target="_blank" rel="noopener noreferrer" className="btn btn-dark  btn-md">Website</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App;
