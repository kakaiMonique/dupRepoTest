import React, { Component } from "react";
import "./css/App.css";

class App extends Component {
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
                <FormSideBar />
              </div>
            </div>

            <div className="rightWrapper">
              <div className="row searchResultsWrap2" id="searchResultsWrap">
                <SchoolCardSection />
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

class FormSideBar extends Component {
  render() {
    return (
      <div>
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
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              id="searchButton"
              type="button"
            >
              Search
            </button>
          </div>
        </div>

        <div className="input-group mb-3" id="form">
          <label htmlFor="searchQuery" className="mr-2" id="searchLabel">
            Enter school name to visualize its demographics using a pie
            chart.Include the full school name and campus name for specific
            school.
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
          target="_blank"
        >
          Data from U.S. Department of Education.
        </a>
      </div>
    );
  }
}
class SchoolCardSection extends Component {
  render() {
    return <div>LETS GOOOO</div>;
  }
}

export default App;
