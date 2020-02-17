 ///a0e12afd98ccbd2fe8caf3b41b17bd0f

//  let url = `https://api.openweathermap.org/data/2.5/weather?q=Houston&APPID=a0e12afd98ccbd2fe8caf3b41b17bd0f`

//  fetch(url)
//  .then((response)=>{
//      return response.json();
//  })
//  .then((weatherObj)=>{
//      let K = weatherObj.main.temp;
//      let C = K - 273.15;
//      let F = C * 1.8 + 32;
//      console.log(K);
//      console.log(C);
//      console.log(F);

//      let body = document.querySelector('body');
//      body.innerHTML = F.toFixed(2);
//  })

let submission = document.querySelector(".button");


//event listeners

submission.addEventListener("click", function(e){
    let cityName = document.querySelector("#cityname");
    console.log(cityName.value);
    document.querySelector('#usercity').append(cityName.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&APPID=a0e12afd98ccbd2fe8caf3b41b17bd0f`)
.then((response)=>{
    return response.json();
})
.then((weatherObj)=>{
    let K = weatherObj.main.temp;
    let C = K - 273.15;
    let F = C * 1.8 + 32;
    console.log(K);
    console.log(C);
    console.log(F);

    let temparea = document.querySelector('.temp');
    temparea.innerText = F.toFixed(2);
})
});
