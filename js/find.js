



document.getElementById('searchButton').addEventListener('click', function (e) {

    e.preventDefault();


    var searchQuery = $('#searchQuery').val();

    fetchSchool(searchQuery);

})


function fetchSchool(searchQuery) {

    //document.getElementById("loading").style.display = 'block';
    var fetchThis = "https://api.data.gov/ed/collegescorecard/v1/schools?school.name=" +
        searchQuery + "&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5"



    fetch(fetchThis)

        .then(function (res) {
            return res.json()

        })
        .then(function (data) {

            // document.getElementById("loading").style.display = 'none';

            renderSearchResults(data)


        })

        .catch(function (error) {
            alert(error)


        })

}


function renderSearchResults(schoolObjs) {
    // document.getElementById('searchResultsWrap').innerHTML = '';
    document.getElementById('searchResultsWrap').innerHTML = `

    ${schoolObjs.results.map(schoolCard).join('')}`
}

function schoolCard(school) {




    var schoolAcceptanceRate = parseFloat(school["latest.admissions.admission_rate.overall"]).toFixed(2)
    var studentLoan = parseFloat(school["latest.aid.students_with_any_loan"]).toFixed(2)


    if (school["latest.cost.tuition.out_of_state"] === null) {
        school["latest.cost.tuition.out_of_state"] = "Unreported"
    }
    if (school["latest.cost.tuition.in_state"] === null) {
        school["latest.cost.tuition.in_state"] = "Unreported"
    }
    if (school["latest.admissions.sat_scores.average.overall"] === null) {
        school["latest.admissions.sat_scores.average.overall"] = "Unreported"
    }


    var singleCard = `<div class=" col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-4  d-flex">

                <div class='cards'>

                    <div class="card mb-4">
                            <div class="card-header" id= "card-header-blue">${school["school.name"]}
                            <br><h7 class="card-subtitle mb-6 text-muted ">${school["school.city"] + "," + " " + school["school.state"]}</h7>
                            </div>
                        <div class="card-body">
                            <p class="card-text">Acceptance Rate:  ${schoolAcceptanceRate * 100 + "%"}</p>
                            <p class="card-text">Average SAT Score:  ${school["latest.admissions.sat_scores.average.overall"]}</p>
                            <p class="card-text">Out of state tuition:  $${school["latest.cost.tuition.out_of_state"]}</p>
                            <p class="card-text">In state tuition:  $${school["latest.cost.tuition.in_state"]}</p>
                            <p class="card-text">Students with any loan:  ${studentLoan * 100 + "%"}</p>
                            <p class="card-text">Students Size:  ${school["latest.student.size"]}</p>
                            <hr>
                            <a href="https://${school["school.school_url"]}" target="_blank" class="btn btn-dark  btn-md">Website</a>
                        </div>
                    </div>
                    </div>
            </div>`

    return singleCard
}





/**********************************************/

document.getElementById('searchButton2').addEventListener('click', function (e) {

    e.preventDefault();

    var searchQueryDemo = $('#searchQueryDemo').val();

    fetchSchoolDemo(searchQueryDemo);

})


function fetchSchoolDemo(searchQueryDemo) {
    
    //document.getElementById("loading").style.display = 'block';
    var fetchThisDemo = ["https://api.data.gov/ed/collegescorecard/v1/schools?school.name=",
        searchQueryDemo,
        "&_fields=school.name,",
        "latest.student.demographics.race_ethnicity.nhpi,",
        "latest.student.demographics.race_ethnicity.non_resident_alien,",
        "latest.student.demographics.race_ethnicity.asian,",
        "latest.student.demographics.race_ethnicity.black,",
        "latest.student.demographics.race_ethnicity.unknown,",
        "latest.student.demographics.race_ethnicity.white,",
        "latest.student.demographics.race_ethnicity.two_or_more,",
        "latest.student.demographics.race_ethnicity.hispanic,",
        "latest.student.demographics.race_ethnicity.aian",
        "&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5"].join('')

    fetch(fetchThisDemo)

        .then(function (res) {
            return res.json()

        })
        .then(function (data) {

            // document.getElementById("loading").style.display = 'none';

            renderSearchResultsDemo(data)


        })

        .catch(function (error) {
            alert(error)


        })

}


function renderSearchResultsDemo(schoolObjsDemo) {

    $('.searchResultsWrap2').html('')
    document.getElementsByClassName('.searchResultsWrap2').innerHTML = `

    ${schoolObjsDemo.results.map(schoolDemo).join('')}`
}



function schoolDemo(school) {

        //Each school demographics array of objects
    var singleSchoolDemo = [

        {
            school: school["school.name"],
            race: "NHPI",
            number: (school["latest.student.demographics.race_ethnicity.nhpi"] * 100).toFixed(2)
        },

        {
            school: school["school.name"],
            race: "Non-Resident",
            number: (school["latest.student.demographics.race_ethnicity.non_resident_alien"] * 100).toFixed(2)
        },

        {
            school: school["school.name"],
            race: "Asian",
            number: (school["latest.student.demographics.race_ethnicity.asian"] * 100).toFixed(2)
        },

        {
            school: school["school.name"],
            race: "Black",
            number: (school["latest.student.demographics.race_ethnicity.black"] * 100).toFixed(2)
        },


        {
            school: school["school.name"],
            race: "Unknown",
            number: (school["latest.student.demographics.race_ethnicity.unknown"] * 100).toFixed(2)
        },

        {
            school: school["school.name"],
            race: "White",
            number: (school["latest.student.demographics.race_ethnicity.white"] * 100).toFixed(2)
        },

        {
            school: school["school.name"],
            race: "Two or More",
            number: (school["latest.student.demographics.race_ethnicity.two_or_more"] * 100).toFixed(2)
        },

        {
            school: school["school.name"],
            race: "Hispanic",
            number: (school["latest.student.demographics.race_ethnicity.hispanic"] * 100).toFixed(2)
        },
        {
            school: school["school.name"],
            race: "Aian",
            number: (school["latest.student.demographics.race_ethnicity.aian"] * 100).toFixed(2)
        }
    ]




/****************************D3 STUFF ***************************/

    var width = 350;
    var height = 350;
    var radius = Math.min(width, height) / 2

    var dataset = singleSchoolDemo

    var color = d3.scaleOrdinal(d3.schemeSet3);

    var label = d3.select("#labels");
    var label = d3.arc()
        .outerRadius(radius - 40)
        .innerRadius(radius - 40);

    var outerArc = d3.arc()
        .innerRadius(radius * 0.9)
        .outerRadius(radius * 0.9)
    // make a pie constructor
    var pie = d3.pie()
        .value(function (d) { return d.number; });
    var stencil = pie(dataset);

    //console.log(stencil);


    //defining the shape of the pie pieces
    var arc = d3.arc()
        .outerRadius(radius)
        .innerRadius(radius / 2);

    // create an svg element
    var svg = d3.select(".searchResultsWrap2")
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    // put a container in the svg, in order to center things
    var container = svg.append("g")
        .attr('transform', "translate(" + width / 2 + "," + height / 2 + ")");

    // create a "g" tag for every element in the array, store it in the variable g
    var g = container.selectAll("g") // create virtual arc pieces that don't exist yet
        .data(stencil)	// bind the non existent arcs to data
        .enter() 			// create a selection 
        .append('g');

    // append a path element to each g tag, and make it a colorful arc
    g.append("path")
        .attr("stroke", 'white')
        .attr("stroke-width", 3)
        .attr("d", arc)
        .attr("fill", function (d, i) { return color(i); });

    g.append("text")
        .attr("transform", function (d) { return "translate(" + label.centroid(d) + ")"; })
        .style("font-size", "12px")
        .attr("dy", "0.8em")
        .attr('text-anchor', 'middle')
        .text(function (d, i) { return singleSchoolDemo[i].race; });

        g.append("text")
        .attr("text-anchor", "middle")
        .attr("fill","#000")
        .style("font-size", "16px")
        .style("font-weight", "300")
        .text(function (d, i) { return singleSchoolDemo[i].school});
 
} //function schoolDemo ends 



