(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(e,t,a){e.exports=a(41)},32:function(e,t,a){},34:function(e,t,a){},36:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),c=a.n(r),s=(a(32),a(6)),i=a(7),o=a(9),m=a(8),u=a(10),d=a(11),h=(a(34),a(36),function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container"},l.a.createElement("section",{id:"SectionAbout"},l.a.createElement("h2",null,"About"),l.a.createElement("p",{className:"lead"},"We know that there\u2019re many amazing colleges and universities in the united states. Although finding the right one might be tiring, we hope to be a support on this amazing journey. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi esse, nam beatae ducimus rerum aperiam eaque iusto inventore debitis reprehenderit pariatur voluptas tempora laborum ullam, in, ipsa vitae doloremque!. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae mollitia et, assumenda modi odio quo fugiat, optio recusandae voluptate illum amet quae ad non dolores eligendi exercitationem quod iure consequatur.",l.a.createElement("br",null),l.a.createElement("br",null),"The creation of this web app in this space is to simply address the inaccessibility of colleges information and to present it with beautiful UI elements that will make the user experience a lot better than what we experience on the web today. Tailored for:",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"High school Gradates"),l.a.createElement("li",null,"Transferring students"),l.a.createElement("li",null,"And simply for anyone who\u2019s interested in finding out more about a college."))))),l.a.createElement("section",{id:"team"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{id:"TeamH1"},"Our Team"),l.a.createElement("div",{className:"card-deck"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top cardImg",src:"../imgs/alex-iby-343837-unsplash.jpg",alt:"Team member one"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Mikias Lema"),l.a.createElement("p",{className:"card-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, debitis, nulla incidunt est earum perspiciatis fugit rerum ipsam dolorem exercitationem vitae."))),l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top cardImg",src:"../imgs/eric-froehling-311481-unsplash.jpg",alt:"Team member two"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Kyra Bautista"),l.a.createElement("p",{className:"card-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, debitis, nulla incidunt est earum perspiciatis fugit rerum ipsam dolorem exercitationem vitae."))),l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-img-top cardImg",src:"../imgs/albert-dera-397063-unsplash.jpg",alt:"Team member three"}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Ebi fry no shippo"),l.a.createElement("p",{className:"card-text"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex hic, debitis, nulla incidunt est earum perspiciatis fugit rerum ipsam dolorem exercitationem vitae.")))))),l.a.createElement("div",{className:"container"},l.a.createElement("section",{id:"Usage"},l.a.createElement("h2",null,"Usage"),l.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, velit sint dignissimos labore, odit sed, sunt similique nihil voluptatibus maxime rem eius id necessitatibus minima nobis unde ipsum sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, velit sint dignissimos labore, odit sed, sunt similique nihil voluptatibus maxime rem eius id necessitatibus minima nobis unde ipsum sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia a, velit sint dignissimos labore, odit sed, sunt similique nihil voluptatibus maxime rem eius id necessitatibus minima nobis unde ipsum sapiente.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio voluptatibus quisquam dignissimos dolor sed inventore officiis praesentium omnis, nobis nihil eveniet magni nisi non natus. Sint nemo asperiores in eveniet."),l.a.createElement("li",null,"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam aliquid tempore eligendi suscipit modi! Rerum harum consequatur nisi. Sit temporibus voluptatibus, fuga illo repudiandae eius sapiente aperiam deleniti dolore quod!"))))))}}]),t}(n.Component)),p=a(23),b=a(14),E=a(20),v=a(24),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={schools:[],input:null},a.handleUserInput=a.handleUserInput.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"handleUserInput",value:function(e){var t=this;this.setState({input:e.target.value.toUpperCase()},function(){t.fetchData(t.state.input)})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.fetchData(this.state.input)}},{key:"fetchData",value:function(e){var t,a=this;t=["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"].indexOf(e)>-1?"https://api.data.gov/ed/collegescorecard/v1/schools?school.state=".concat(e,"&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5"):"https://api.data.gov/ed/collegescorecard/v1/schools?school.name=".concat(e,"&_fields=school.name,school.city,school.state,school.school_url,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.cost.tuition.out_of_state,latest.cost.tuition.in_state,latest.aid.students_with_any_loan,latest.student.size&api_key=TH798jh0Un4LIFZvxWD5iyBwYKSDCpRLVZEWDdR5"),fetch(t).then(function(e){return e.json()}).then(function(e){return e.results.map(function(e){return{name:"".concat(e["school.name"]),location:"".concat(e["school.city"],",").concat(e["school.state"]),AcceptanceRate:"".concat(parseFloat(e["latest.admissions.admission_rate.overall"]).toFixed(2)),AverageSATScore:"".concat(e["latest.admissions.sat_scores.average.overall"]),OutOfStateTuition:"".concat(e["latest.cost.tuition.out_of_state"]),InStateTuition:"".concat(e["latest.cost.tuition.in_state"]),StudentsWithAnyLoan:"".concat(parseFloat(e["latest.aid.students_with_any_loan"]).toFixed(2)),StudentsSize:"".concat(e["latest.student.size"]),SchoolWebsite:"".concat(e["school.school_url"])}})}).then(function(e){a.setState({schools:e})}).catch(function(e){alert(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement("main",null,l.a.createElement(p.a,null,l.a.createElement(b.a,{exact:!0,path:"/",render:function(t){return l.a.createElement(f,Object.assign({},t,{schoolData:e.state.schools,handleUserInput:e.handleUserInput,handleSubmit:e.handleSubmit}))}}),l.a.createElement(b.a,{path:"/about",component:h})),l.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/fetch/2.0.3/fetch.min.js"}),l.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.auto.js"})),l.a.createElement("footer",{className:"page-footer font-small unique-color-dark"},l.a.createElement(j,null)))}}]),t}(n.Component),f=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("section",null,l.a.createElement(y,null)),l.a.createElement("div",{className:"findWrapper ",id:"SideBar"},l.a.createElement("div",{className:"leftWrapper"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement(S,{schoolData:this.props.schoolData,handleUserInput:this.props.handleUserInput,handleSubmit:this.props.handleSubmit}))),l.a.createElement("div",{className:"rightWrapper"},l.a.createElement(x,{schoolData:this.props.schoolData}))))}}]),t}(n.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg"},l.a.createElement("a",{className:"navbar-brand",href:"index.html"},l.a.createElement(v.HashLink,{to:"/#Home"},l.a.createElement("h3",{className:"navBrand"},"CollegeStudio"))),l.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{id:"navbarNavDropdown",className:"navbar-collapse collapse"},l.a.createElement("ul",{className:"navbar-nav mr-auto"}),l.a.createElement("ul",{className:"nav navbar-nav NavLinkz"},l.a.createElement("li",{className:"nav-item "},l.a.createElement(v.HashLink,{to:"/#Home",className:"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item "},l.a.createElement("a",{className:"nav-link ",href:"#SideBar"},"Find")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(E.a,{to:"/about",className:"nav-link"},"About"))))))}}]),t}(n.Component),y=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("section",{className:"Home",id:"Home"},l.a.createElement("div",{className:"HomeContainer"},l.a.createElement("div",{id:"HomeLeft"},l.a.createElement("div",{id:"HomeILL"})),l.a.createElement("div",{id:"HomeRight"},l.a.createElement("div",{className:"container",id:"HRcontainer"},l.a.createElement("h2",{className:"HomeH2"},"Find a college"),l.a.createElement("h1",{className:"HomeH1"},"that's right for you!"),l.a.createElement("p",{className:"HomeP"},"We created this ultimate guide to the college search because we know finding a school that fits you\u2014truly fits you\u2014is the secret to college success. When you find the right college match, everything else tends to fall into place: your chances of being accepted, your financial aid, your happiness.Head over to the find tab to search and visualze."),l.a.createElement("a",{href:"#SideBar",className:" btn btn-dark HomeBtn"},"Find")))))}}]),t}(n.Component),S=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"input-group mb-3",id:"form"},l.a.createElement("label",{htmlFor:"searchQuery",className:"mr-2",id:"searchLabel"},l.a.createElement("br",null),"Welcome.",l.a.createElement("br",null),l.a.createElement("br",null),"Search for the perfect school by entering the name of the university, community college, or grad school. Results will update as partial or complete names.",l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("hr",null),l.a.createElement("input",{type:"text",className:"form-control",id:"searchQuery",placeholder:"School name..",name:"schoolName","aria-label":"School Name","aria-describedby":"basic-addon2",onChange:this.props.handleUserInput.bind(this)}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",id:"searchButton",type:"button",onClick:this.props.handleSubmit.bind(this)},"Search"))),l.a.createElement("div",{className:"input-group mb-3",id:"form"},l.a.createElement("label",{htmlFor:"searchQuery",className:"mr-2",id:"searchLabel"},'Otherwise, if you are unsure of what specific school too look at, then please enter a state to get information on university and colleges within your selected area. (ex. "WA")',l.a.createElement("br",null),l.a.createElement("br",null)),l.a.createElement("hr",null),l.a.createElement("input",{type:"text",className:"form-control",id:"searchQueryDemo",placeholder:"School state..",name:"schoolState","aria-label":"State Name","aria-describedby":"basic-addon2",onChange:this.props.handleUserInput.bind(this)}),l.a.createElement("div",{className:"input-group-append"},l.a.createElement("button",{className:"btn btn-outline-secondary",id:"searchButton2",type:"button",onClick:this.props.handleSubmit.bind(this)},"Search"))),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("div",{className:"container"},l.a.createElement("a",{href:"https://www2.ed.gov/rschstat/landing.jhtml?src=pn",className:" DataFrom badge ",target:"_blank",rel:"noopener noreferrer"},"Data from U.S. Department of Education.")))}}]),t}(n.Component),x=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.schoolData;return l.a.createElement("div",{className:"row searchResultsWrap2",id:"searchResultsWrap"},Object.keys(e).map(function(t){return l.a.createElement(O,{key:t,Schooldetails:e[t]})}),l.a.createElement("h2",{className:"searchTextPH"},"Featured schools"),l.a.createElement("div",{className:"cards",style:{width:"26em"}},l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-header",id:"card-header-blue"},"University of Washington-Seattle Campus",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",{className:"card-subtitle mb-6 text-muted "},"Seattle, WA")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"Acceptance Rate: ",l.a.createElement("strong",null,"45%")),l.a.createElement("p",{className:"card-text"},"Average SAT Score: ",l.a.createElement("strong",null,"1266")),l.a.createElement("p",{className:"card-text"},"Out of state tuition: ",l.a.createElement("strong",null,"$34791")),l.a.createElement("p",{className:"card-text"},"In state tuition: ",l.a.createElement("strong",null,"$10753")),l.a.createElement("p",{className:"card-text"},"Students with any loan: ",l.a.createElement("strong",null,"71%")),l.a.createElement("p",{className:"card-text"},"Students Size: ",l.a.createElement("strong",null,"29831")),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.washington.edu",target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark btn-block btn-md"},"Website")))),l.a.createElement("div",{className:"cards",style:{width:"26em"}},l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-header",id:"card-header-blue"},"Yale University",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",{className:"card-subtitle mb-6 text-muted "},"New Haven, CT")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"Acceptance Rate: ",l.a.createElement("strong",null,"6%")),l.a.createElement("p",{className:"card-text"},"Average SAT Score: ",l.a.createElement("strong",null,"1502")),l.a.createElement("p",{className:"card-text"},"Out of state tuition: ",l.a.createElement("strong",null,"$49480")),l.a.createElement("p",{className:"card-text"},"In state tuition: ",l.a.createElement("strong",null,"$50480")),l.a.createElement("p",{className:"card-text"},"Students with any loan: ",l.a.createElement("strong",null,"45%")),l.a.createElement("p",{className:"card-text"},"Students Size: ",l.a.createElement("strong",null,"5471")),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://www.yale.edu",target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark btn-block btn-md"},"Website")))),l.a.createElement("div",{className:"cards",style:{width:"26em"}},l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-header",id:"card-header-blue"},"Seattle Central College",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",{className:"card-subtitle mb-6 text-muted "},"Seattle, WA")),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"Acceptance Rate: ",l.a.createElement("strong",null,"Unreported")),l.a.createElement("p",{className:"card-text"},"Average SAT Score: ",l.a.createElement("strong",null,"Unreported")),l.a.createElement("p",{className:"card-text"},"Out of state tuition: ",l.a.createElement("strong",null,"$4332")),l.a.createElement("p",{className:"card-text"},"In state tuition: ",l.a.createElement("strong",null,"$39253")),l.a.createElement("p",{className:"card-text"},"Students with any loan: ",l.a.createElement("strong",null,"27%")),l.a.createElement("p",{className:"card-text"},"Students Size: ",l.a.createElement("strong",null,"3398")),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://seattlecentral.edu",target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark btn-block btn-md"},"Website")))))}}]),t}(n.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.Schooldetails;return l.a.createElement("div",null,l.a.createElement("div",{className:"cards",style:{width:"26em"}},l.a.createElement("div",{className:"card mb-4"},l.a.createElement("div",{className:"card-header",id:"card-header-blue"},l.a.createElement("strong",null,e.name),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h6",{className:"card-subtitle mb-6 text-muted "},e.location)),l.a.createElement("div",{className:"card-body"},l.a.createElement("p",{className:"card-text"},"Acceptance Rate:  ",l.a.createElement("strong",null,100*e.AcceptanceRate+"%")),l.a.createElement("p",{className:"card-text"},"Average SAT Score:  ",l.a.createElement("strong",null,e.AverageSATScore)),l.a.createElement("p",{className:"card-text"},"Out of state tuition:  ",l.a.createElement("strong",null,e.OutOfStateTuition)),l.a.createElement("p",{className:"card-text"},"In state tuition:  ",l.a.createElement("strong",null,e.InStateTuition)),l.a.createElement("p",{className:"card-text"},"Students with any loan:  ",l.a.createElement("strong",null,100*e.StudentsWithAnyLoan+"%")),l.a.createElement("p",{className:"card-text"},"Students Size:  ",l.a.createElement("strong",null,e.StudentsSize)),l.a.createElement("hr",null),l.a.createElement("a",{href:"https://"+e.SchoolWebsite,target:"_blank",rel:"noopener noreferrer",className:"btn btn-dark btn-block btn-md"},"Website")))))}}]),t}(n.Component),j=function(e){function t(){return Object(s.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"container text-center text-md-left mt-5"},l.a.createElement("div",{className:"row mt-3"},l.a.createElement("div",{className:"col-md-3 col-lg-4 col-xl-3 mx-auto mb-4"},l.a.createElement("h6",{className:"text-uppercase font-weight-bold"},"CollegeStudio"),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",null,"Home for your future school.This is how you find the perfect college\u2014or colleges\u2014for you")),l.a.createElement("div",{className:"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4"},l.a.createElement("h6",{className:"text-uppercase font-weight-bold"},"Sources"),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",null,l.a.createElement("a",{className:"fotterLinks",href:"https://collegescorecard.ed.gov/data/documentation/"},"API"))),l.a.createElement("div",{className:"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4"},l.a.createElement("h6",{className:"text-uppercase font-weight-bold"},"Contact"),l.a.createElement("hr",{className:"line"}),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-home mr-3"})," Seattle, WA 98027, US"),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-envelope mr-3"})," ",l.a.createElement("a",{className:"contact",href:"mailto: info@example.com"},"info@example.com")),l.a.createElement("p",null,l.a.createElement("i",{className:"fa fa-phone mr-3"})," ",l.a.createElement("a",{className:"contact",href:"tel: 01 234 567 88"},"+ 01 234 567 88"))))),l.a.createElement("div",{className:"footer-copyright text-center py-3"},"\xa9 2018 Copyright"))}}]),t}(n.Component),w=g,k=a(19);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(k.a,null,l.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.eb773492.chunk.js.map