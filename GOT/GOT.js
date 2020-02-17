
let charlist = document.querySelector('#charlist');


fetch(`https://www.anapioficeandfire.com/api/characters?pagesize=30`)

.then((response)=>{
    return response.json();
})
.then((charArr)=>{
    let char = charArr.name
    console.log(charArr)
    let characters = charArr.map((character) => {
        console.log(character.name)
        if(character.allegiances){
            fetch(`${character.allegiances}`)
        .then((response)=>{
            return response.json();
        })
        .then((houseArr)=>{
            console.log("HEY")
            console.log(houseArr)
            let house = houseArr.name
            console.log(house)

            if (!character.name){
                return `<li>Name: ${character.aliases}</li>`
            }
            return `<li>Name: ${character.name}</li>`
        })
        }
        if (!character.name){
            return `<li>Name: ${character.aliases}</li>`
        }
        return `<li>Name: ${character.name}</li>`
    })
    charlist.innerHTML = characters.join(" ")
})