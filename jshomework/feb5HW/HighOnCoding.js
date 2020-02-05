//Row 1

var container = document.getElementById("container");
var row1 = document.createElement("div");
var col1 = document.createElement("div");
var col2 = document.createElement("div");
var col3 = document.createElement("div");
var col4 = document.createElement("div");
var h1 = document.createElement("h1");
var h4 = document.createElement("h4");
var p = document.createElement("p");

container.className = "container";
row1.className = "row justify-content-md-around align-items-md-center";
col1.className = "col text-center";
col2.className = "col text-center";
col3.className = "col text-center";
col4.className = "col text-center";

//styling

row1.style.height = "100px";
row1.style.backgroundColor = "dodgerblue";

h1.style.color = "white";
h4.style.color = "white";
p.style.color = "white";
h1.style.margin = "auto";
h4.style.margin = "auto";
p.style.margin = "auto";
p.style.fontSize = "24px";
row1.style.padding = "20px";
row1.style.marginBottom = "20px";

//content

h1.textContent = "HighOnCoding";
h4.textContent = "Home";
p.textContent = "Categories";


col1.appendChild(h1);
col2.appendChild(h4);
col3.appendChild(p);
row1.appendChild(col1);
row1.appendChild(col2);
row1.appendChild(col3);
row1.appendChild(col4);
container.appendChild(row1);

//row 2

var row2 = document.createElement("div");
var h2 = document.createElement("h2");
var p2 = document.createElement("p");

row2.className = 'row';

//styling

row2.style.width = "95%";
row2.style.backgroundColor = "lightgray";
row2.style.paddingTop = "20px";
row2.style.paddingLeft = "20px";
row2.style.paddingRight = "20px";
row2.style.marginLeft = "auto";
row2.style.marginRight = "auto";
row2.style.marginBottom = "20px";
h2.style.color = "#585858";
h2.style.marginBottom = "40px";

//content

h2.textContent = "Curse of the Current Reviews";
p2.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle.   Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors: price, screenshot, and reviews.";

row2.append(h2, p2);
container.appendChild(row2);


//row3


var row3 = document.createElement("div");
var h3 = document.createElement("h3");
var p3 = document.createElement("p3");

row3.className = 'row'

//styling

row3.style.width = "95%";
row3.style.backgroundColor = "white";
row3.style.paddingTop = "20px";
row3.style.paddingLeft = "20px";
row3.style.paddingRight = "20px";
row3.style.marginLeft = "auto";
row3.style.marginRight = "auto";
row3.style.marginBottom = "20px";
h3.style.color = "dodgerBlue";

//content

h3.textContent = "Hello WatchKit";
p3.textContent = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the Watchkit framework and developing apps for the Apple Watch."

row3.append(h3, p3);
container.appendChild(row3);

//row4

row4 = document.createElement("div");
col41 = document.createElement("div");
col42 = document.createElement("div");
col43 = document.createElement("div");
h51 = document.createElement("h5");
h52 = document.createElement("h5");

row4.className = "row"
col41.className = "col-2"
col42.className = "col-2"
col43.className = "col-2"

//styling

row4.style.backgroundColor = "orange";
row4.style.width = "93%";
row4.style.height = "30px";
row4.style.marginLeft = "auto";
row4.style.marginRight = "auto";
row4.style.marginBottom = "20px";
h51.style.color = "white";
h52.style.color = "white";


//content

h51.textContent = "12 comments";
h52.textContent = "124 likes";

col41.appendChild(h51);
col42.appendChild(h52);
row4.appendChild(col41);
row4.appendChild(col42);
row4.appendChild(col43);
container.append(row4);


//row 5

var row5 = document.createElement("div");
var h52 = document.createElement("h2");
var p5 = document.createElement("p");

row5.className = "row";


//styling

row5.style.width = "93%";
row5.style.marginLeft = "auto";
row5.style.marginRight = "auto";
row5.style.paddingRight = "20px";
h52.style.color = "dodgerblue";
h52.style.marginBottom = "20px";
p5.style.marginBottom = "0px";


//content

h52.textContent = "Introduction to Swift";
p5.textContent = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.";

row5.appendChild(h52);
row5.appendChild(p5);
container.appendChild(row5);

//row 6

row6 = document.createElement("div");
col51 = document.createElement("div");
col52 = document.createElement("div");
col53 = document.createElement("div");
h61 = document.createElement("h5");
h62 = document.createElement("h5");

row6.className = "row"
col51.className = "col-2"
col52.className = "col-2"
col53.className = "col-2"

//styling

row6.style.backgroundColor = "orange";
row6.style.width = "93%";
row6.style.height = "30px";
row6.style.marginLeft = "auto";
row6.style.marginRight = "auto";
row6.style.marginBottom = "20px";
h61.style.color = "white";
h62.style.color = "white";


//content

h61.textContent = "15 comments";
h62.textContent = "45 likes";

col51.appendChild(h61);
col52.appendChild(h62);
row6.appendChild(col51);
row6.appendChild(col52);
row6.appendChild(col53);
container.append(row6);