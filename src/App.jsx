import React, { Component } from "react";
import "./css/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      input: null
    };
  }
  componentDidMount() {
    this.fetchData();
  }

  handleUserInput(e) {
    this.setState({ input: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.fetchData(this.state.input);
  }

  fetchData(SearchQuery) {


    let fetchThis = `https://api.data.gov/ed/collegescorecard/v1/schools?school.name=${SearchQuery}&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5`;
    console.log(fetchThis);


    fetch(fetchThis)
      .then(res => {
        return res.json();
      })
      .then(data => data.results.map(school => (
        {
          name: `${school["school.name"]}`,
          location: `${school["school.city"]},${school["school.state"]}`,
          AcceptanceRate: `${parseFloat(school["latest.admissions.admission_rate.overall"]).toFixed(2)}`,
          AverageSATScore: `${school["latest.admissions.sat_scores.average.overall"]}`,
          OutOfStateTuition: `${school["latest.cost.tuition.out_of_state"]}`,
          InStateTuition: `${school["latest.cost.tuition.in_state"]}`,
          StudentsWithAnyLoan: `${parseFloat(school["latest.aid.students_with_any_loan"]).toFixed(2)}`,
          StudentsSize: `${school["latest.student.size"]}`,
          SchoolWebsite: `${school["school.school_url"]}`
        }

      )))

      .then(schools => this.setState({
        schools: schools
      }))

      .catch(error => {
        alert(error);
      });
  }

  render() {
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
              <div className="container-fluid">
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
                    placeholder="Your school.."
                    aria-label="School Name"
                    aria-describedby="basic-addon2"
                    onChange={this.handleUserInput.bind(this)}
                  />
                  <div className="input-group-append">
                    <button
                      // onClick={() => this.props.fetchData(userInput)}
                      className="btn btn-outline-secondary"
                      id="searchButton"
                      type="button"
                      onClick={this.handleSubmit.bind(this)}
                    >
                      Search
                      </button>
                  </div>
                </div>
                <div className="input-group mb-3" id="form">
                  <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
                    Enter state/city to get information on university and colleges within your selected area.
                 </label>
                  <hr />

                  <input
                    type="text"
                    className="form-control"
                    id="searchQueryDemo"
                    placeholder="Your school.."
                    aria-label="School Name"
                    aria-describedby="basic-addon2"

                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      id="searchButton2"
                      type="button"

                    >
                      Search
            </button>
                  </div>
                </div>

                <br />
                <hr />
                <a
                  href="https://www2.ed.gov/rschstat/landing.jhtml?src=pn"
                  className=" DataFrom badge "
                  target="_blank" rel="noopener noreferrer"
                >
                  Data from U.S. Department of Education.
        </a>
              </div>
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
