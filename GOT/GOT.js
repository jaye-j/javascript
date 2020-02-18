
let charlist = document.querySelector('#charlist');
// let houselist = document.querySelector('#houselist')


fetch(`https://www.anapioficeandfire.com/api/characters?pagesize=30`)

.then((response)=>{
    return response.json();
})
.then((charArr)=>{
    let char = charArr.name
    console.log(charArr)
    let characters = charArr.map((character) => {
        console.log(character.name)
        // if(character.allegiances){
        //     fetch(`${character.allegiances}`)
        // .then((response)=>{
        //     return response.json();
        // })
        // .then((houseArr)=>{
        //     console.log("HEY")
        //     console.log(houseArr.name)
        //     console.log("hey2");
        //     let house = houseArr.name
        //     console.log(house) //logs the allegiance name

        //     if (!houseArr.name){
        //         return `<li>none</li>`
        //     }
        //     return `<li>Name: ${houseArr.name}</li>`
        // })
        // }
        if (!character.name){
            return `<li>Name: ${character.aliases}</li>`
        }
        return `<li>Name: ${character.name}</li>`
    })
    charlist.innerHTML = characters.join(" ")
    // houselist.innerHTML = characters.join(" ")
})