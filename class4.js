

// function changeBackground(){
//     var div = document.getElementById('1');
//     div.setAttribute('style', 'background-color: green);
//   };

// function restoreBackground(){
//     var div = document.getElementById('1');
//     div.setAttribute('style', "background-color: yellow; height: 300px; width: 100%;");
// }

let divNode = document.getElementById('1');

// divNode.onclick = function(){
//     window.alert('Hello World')
// }

// divNode.onmouseover = function(){
//     divNode.setAttribute("style", "background-color: green; height: 300px; width: 100%")
// }

// divNode.onmouseout = function(){
//     divNode.setAttribute("style", "background-color: yellow; height: 300px; width: 100%")
// }

divNode.addEventListener('click', function(e){
    alert("Hello " + e.srcElement.innerText + "!");
});

divNode.addEventListener('mouseover', function(e){
    divNode.setAttribute("style", "background-color: green; height: 300px; width: 100%")
})

divNode.addEventListener('mouseout', function(e){
    divNode.setAttribute("style", "background-color: yellow; height: 300px; width: 100%")
})