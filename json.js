
let infoArr = [];

for(let i = 0; i < 2000; i++){
    fetch(
        `https://www.anapioficeandfire.com/api/character?page=${i}&pageSize=50`
        )

    .then((response)=>{

        return response.json();
    })

    .then((characters)=>{

        infoArr.push(characters);

    })

}
