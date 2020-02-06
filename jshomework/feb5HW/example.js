//functions
function className(name, location) {
    location.className = name;
};


function addText(text, textLocation) {
    textLocation.textContent = text;
};

function appendContent(appendContent, location) {
    location.append(appendContent);
};

function setAttribute(content, location) {
    location.setAttribute('href', location);
};

function backgroundcolor(color, location) {
    location.style = color;
};

//

var container = document.querySelector('#container');

className("container-fluid", container);

var link1 = document.createElement('a');
addText("HighOnCoding", link1);
className("nav-item nav-link active", link1);
setAttribute('#', link1);

var link2 = document.createElement('a');
addText("Home", link2);
className("nav-item nav-link active small pl-5", link2);
setAttribute('#', link2);

var link3 = document.createElement('a');
addText("Categories", link3);
className("nav-item nav-link active small pl-5", link3);
setAttribute('#', link3);


var headerDiv = document.createElement('div');

className("nav navbar-nav h3", headerDiv);
appendContent(link1, headerDiv);
appendContent(link2, headerDiv);
appendContent(link3, headerDiv);

var headerNav = document.createElement('nav');
className("navbar navbar-expand navbar-dark p-4", headerNav);
backgroundcolor("background-color: rgb(82, 167, 250); ", headerNav);


appendContent(headerDiv, headerNav);
appendContent(headerNav, container);

var heading1 = document.createElement('h2');
className("h-auto w-auto p-4 color: #585858; mb-20px", heading1);
addText("Curse of the Current Reviews", heading1);
backgroundcolor("background-color: lightgrey; ", heading1);

var content1 = document.createElement('p');
className("p-4 h-auto w-auto color: #585858; ", content1);
addText("When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.", content1);
backgroundcolor("background-color: lightgrey; ", content1);

var orangebar = document.createElement('h3');
className("p-2 h-auto w-auto color: #ffffff; ", orangebar);
addText("12 comments    124 likes", orangebar);
backgroundcolor("background-color: orange; ", orangebar)

appendContent(heading1, container);
appendContent(content1, heading1);
appendContent(orangebar, container);