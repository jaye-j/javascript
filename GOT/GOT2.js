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
    console.log(infoArr);
        if (i == 64){
            for(let i = 0; i < infoArr.length; i++){
                if(infoArr[i].allegiances){
                    fetch(`${infoArr[i].allegiances}`)
                    .then((response)=>{
                        
                        return response.json()
                        
                    .then((houseArr) =>{

                        let house = houseArr.name
                        console.log(house)

                        if (!infoArr[i].name && !infoArr[i].aliases){
                            let listchar = document.createElement('li');
                            listchar.innerHTML = `Unknown – <button>${house}</button>`
                            charlist.append(listchar);
                        }
                        else if (!infoArr[i].name){
                            let listchar = document.createElement('li');
                            listchar.innerHTML = `${infoArr[i].aliases} – <button>${house}</button>`;
                            charlist.append(listchar);
                        }else{
                            let listchar = document.createElement('li');
                            listchar.innerHTML = `${infoArr[i].name} – <button>${house}</button>`;
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


