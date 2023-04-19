var contenido = document.querySelector('#selectPoke')

fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
    .then(datos => {
        pintarSelect(datos.results);
    })

function pintarSelect(datos) {
    let id = 1
    for (let item  of datos) {
        id++
        contenido.innerHTML +=`
        <option value=${item.name} name=${item.name}>${item.name}</option>
        `
        if (id == 20) {
            break
        }
    }

}

var cambioPokemon = document.getElementById("selectPoke");
cambioPokemon.addEventListener("change",()=>{
    var nombrePoke = document.getElementById("selectPoke").value;
    consultarDetalle(nombrePoke);
})

function consultarDetalle(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`
    fetch(url)
        .then(response => response.json())
            .then(data=>{
                var img= data.sprites.other.dream_world.front_default
                document.getElementById("imagen").src=img
                var name= data.name
                document.getElementById("name").innerText=name
                var hp= data.stats[0].base_stat
                document.getElementById("hp").innerText=hp
                var def= data.stats[2].base_stat
                document.getElementById("defense").innerText=def
                var attack= data.stats[1].base_stat
                document.getElementById("attack").innerText=attack
            })
            

}