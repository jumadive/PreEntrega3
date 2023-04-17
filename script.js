// ARRAY DE OBJETOS
let peliculas = [
    {
        id: 1,
        titulo: "Pulp Fiction",
        año: 1994,
        duracion: 153,
        direccion: "Quentin Tarantino",
        genero: "Thriller",
        img: "https://pics.filmaffinity.com/pulp_fiction-210382116-large.jpg"
    },
    {
        id: 2,
        titulo: "Wild at Heart",
        año: 1990,
        duracion: 125,
        direccion: "David Lynch",
        genero: "Drama",
        img: "https://pics.filmaffinity.com/wild_at_heart-799674263-large.jpg"
    },
    {
        id: 3,
        titulo: "Casino",
        año: 1995,
        duracion: 173,
        direccion: "Martin Scorsese",
        genero: "Thriller",
        img: "https://pics.filmaffinity.com/casino-348445329-large.jpg"
    },
    {
        id: 4,
        titulo: "Wall Street",
        año: 1987,
        duracion: 120,
        direccion: "Oliver Stone",
        genero: "Drama",
        img: "https://pics.filmaffinity.com/wall_street-224965061-large.jpg"
    }
]

// VARIABLES GLOBALES
let login = document.getElementById("login")
let usuarioReg = document.getElementById("usuarioReg")
let passwordReg = document.getElementById("passwordReg")
let registrarse = document.getElementById("registrarse")
let usuario = document.getElementById("usuario")
let password = document.getElementById("password")
let iniciarSesion = document.getElementById("iniciarSesion")
let cerrarSesion = document.getElementById("cerrarSesion")
let buscador = document.getElementById("buscador")
let contenedorPeliculas = document.getElementById("contenedorPeliculas")
let bienvenido

// REGISTRO - INICIO/CIERRE DE SESION
registrarse.addEventListener("click", () => {
    registroInfo = { usuarioReg: usuarioReg.value, passwordReg: passwordReg.value }
    localStorage.setItem("registroInfo", JSON.stringify(registroInfo))  
})
iniciarSesion.addEventListener("click", () => {
    let registroInfo = JSON.parse(localStorage.getItem("registroInfo"))
    if (registroInfo.usuarioReg === usuario.value && registroInfo.passwordReg === password.value) {
        login.classList.add("ocultar")
        cerrarSesion.classList.remove("ocultar")
        bienvenido = document.createElement("h2")
        bienvenido.innerHTML = ` 
        Bienvenido ${usuario.value}!
        `
        usuarioLogueado.append(bienvenido)

    } else {
        alert("Usuario/Contraseña Incorrectos")
    }
})
cerrarSesion.addEventListener("click", () => {
    login.classList.remove("ocultar")
    cerrarSesion.classList.add("ocultar")
    bienvenido.remove()
})

// BUSCADOR
buscador.addEventListener("input", filtrarNombre)

// TARJETAS
renderizarTarjetas(peliculas)

// FUNCIONES
function renderizarTarjetas(arrayPeliculas) {
    contenedorPeliculas.innerHTML = ""
    arrayPeliculas.forEach(pelicula => {
        let tarjeta = document.createElement("div")
        tarjeta.innerHTML = `
        <img class="img" src="${pelicula.img}" alt="${pelicula.titulo}">
        <h2>${pelicula.titulo}</h2>
        <p>Año: ${pelicula.año}</p>
        <p>Duracion: ${pelicula.duracion}</p>
        <p>Direccion: ${pelicula.direccion}</p>
        <p>Genero: ${pelicula.genero}</p>
        `
        tarjeta.className = "tarjeta"
        contenedorPeliculas.append(tarjeta)
    });
}

function filtrarNombre(e) {
    let arrayFiltradoNombre = peliculas.filter(pelicula => pelicula.titulo.includes(buscador.value))
    renderizarTarjetas(arrayFiltradoNombre)
}