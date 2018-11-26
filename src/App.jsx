import React, { Component } from "react";
import "./css/App.css";

// State is working and does not clip user input
// Resutls are in sync with input search! need to search by state too...
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],

    };
  }
  componentDidMount() {
    this.fetchData();
  }

  handleUserInput = (e) => {
    this.setState({[e.target.name]: e.target.value});
    // this.setState({ schoolName: e.target.value });
    this.fetchData(this.state.schoolName);

  }
  handleSubmit = (e) => {
    e.preventDefault();
    // may call a different method if school state is being searched...
    // this.fetchData(this.state.schoolName);
  }

  fetchData(SearchQuery) {
    let fetchThis = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${SearchQuery}&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5`;
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
        this.setState({ schools: schoolResults})
      })
      .catch(error => {
        alert(error);
      });
  }

  render() {
    console.log("APP STATE: " + JSON.stringify(this.state));
    let testData = this.state;
    return (
      <div>
        <header>
          <nav className="navbar fixed-top navbar-expand-lg sidebarNavigation">
            <a className="navbar-brand" href="index.html">
              <h3 className="navBrand">CollegeStudio</h3>
            </a>
            <button
              className="navbar-toggler leftNavbarToggler"
              type="button"
              data-toggle="collapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse flex-grow-1 text-left">
              <ul className="navbar-nav ml-auto flex-nowrap NavLinkz">
                <li className="nav-item ">
                  <a className="nav-link" href="index.html">
                    Home
                  </a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link active" href="find.html">
                    Find<span className="sr-only">(current)</span>
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

        <main>
          <div className="findWrapper ">
            <div className="leftWrapper">
              <SchoolFilterSection stateData={testData} handleSubmit={this.handleSubmit} handleUserInput={this.handleUserInput}/>
            </div>

            <div className="rightWrapper">
              <div className="row searchResultsWrap2" id="searchResultsWrap">
                <SchoolCardSection schoolData={this.state.schools} />
              </div>
            </div>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js" />
        </main>
      </div>
    );
  }
}

class SchoolFilterSection extends Component {
  render() {
    return(
      <div className="container-fluid">
      {/* input 1 start */}
        <div className="input-group mb-3" id="form">
          <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
          <br />
          Welcome.
          <br />
          <br /> For finding a specific school, please include the full school
          name and campus name. Or search away and select from related
          results.
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
          onChange={this.props.handleUserInput.bind(this)}/>

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
        {/* input 1 end */}
        
        {/* input 2 start */}
        <div className="input-group mb-3" id="form">
          <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
          Otherwise, if you are unsure of what specific school too look at, then please enter 
          a state to get information on university and colleges within your selected area.
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
          onChange={this.props.handleUserInput.bind(this)}/>

          <div className="input-group-append">
          <button
          className="btn btn-outline-secondary"
          id="searchButton2"
          type="button"
          onClick={this.props.handleSubmit.bind(this)}>
          Search
          </button>
        </div>
        {/* input 2 end */}
      </div>

      <br />
      <hr />
      <a
        href="https://www2.ed.gov/rschstat/landing.jhtml?src=pn"
        className=" DataFrom badge "
        target="_blank" rel="noopener noreferrer">
        Data from U.S. Department of Education.
      </a>
    </div>
    )
  }
}

class SchoolCardSection extends Component {

  render() {
    const { schoolData } = this.props;
    return (
      Object.keys(schoolData).map(key => (
        <SchoolCard key={key} Schooldetails={schoolData[key]} />
      ))
    )
  }
}

class SchoolCard extends Component {
  render() {
    const { Schooldetails } = this.props;
    return (
      <div>
        <div className='cards' style={{ width: 24 + 'em' }}>
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
