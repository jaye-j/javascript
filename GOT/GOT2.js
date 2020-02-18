let charlist = document.querySelector('#names');
// let houselist = document.querySelector('#houses');

let infoArr = [];

for(let i = 0; i <= 64; i++){
    fetch(
        `https://www.anapioficeandfire.com/api/characters?page=${i}&pageSize=50`
        )

    .then((response)=>{

        return response.json();
    })

    .then((characters)=>{

        infoArr = [...infoArr, ...characters];
    })
    .then(()=>{
    // console.log(infoArr);
        if (i == 64){
            for(let i = 0; i < infoArr.length; i++){
                if(infoArr[i].allegiances){
                    fetch(`${infoArr[i].allegiances}`)
                    .then((response)=>{
                        
                        return response.json()
                        
                    .then((houseArr) =>{
                        // console.log(houseArr)
                        let house = houseArr.name
                        // console.log(house)

                        let button = document.createElement('button')
                        button.setAttribute('dataHouse', houseArr.url)

                        button.innerHTML = house
                        button.addEventListener('click', (event)=>{
                            console.log(event.target.getAttribute('dataHouse'))


                            fetch(event.target.getAttribute('dataHouse'))
                            .then((response)=>{
                                return response.json()
                            })
                            .then((obj)=>{

                                console.log(obj);
                                window.alert("Name: " + obj.name + " – " + "Sworn members: " + obj.swornMembers.length)
                            })
                        })

                        if (!infoArr[i].name && !infoArr[i].aliases){
                            let listchar = document.createElement('li');
                            listchar.innerHTML = `Unknown – `
                            listchar.append(button)
                            charlist.append(listchar);
                        }
                        else if (!infoArr[i].name){
                            let listchar = document.createElement('li');
                            listchar.innerHTML = `${infoArr[i].aliases} – `
                            listchar.append(button);
                            charlist.append(listchar);
                        }else{
                            let listchar = document.createElement('li');
                            listchar.innerHTML = `${infoArr[i].name} – `;
                            listchar.append(button)
                            charlist.append(listchar);
                        }
                    })
                    })
                }
                if (!infoArr[i].name && !infoArr[i].aliases){
                    let listchar = document.createElement('li');
                    listchar.innerHTML = "Unknown"
                    charlist.append(listchar);
                }
                else if (!infoArr[i].name){
                    let listchar = document.createElement('li');
                    listchar.innerHTML = infoArr[i].aliases;
                    charlist.append(listchar);
                }else{
                    let listchar = document.createElement('li');
                    listchar.innerHTML = infoArr[i].name;
                    charlist.append(listchar);
                }
            }
        }
    })
}


// document.querySelector('button').addEventListener('onclick',(event)=>{
//     fetch(event.target.dataHouseUrl)
// })

// let elementArr = document.querySelectorAll('button')
                        
// elementArr.forEach((button) => {
//     button.addEventListener('click',(event)=>{
//         console.log(event.target)
//         // fetch(event.target.dataHouseUrl)
//     })
// })