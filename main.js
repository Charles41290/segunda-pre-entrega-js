/*
El presente codigo corresponde a un proyecto de una libreria la cual posee una pagina web 
en la cual se pueden realizar compras. Hasta el momento se han creado un inventario de 7
libros y 5 autores. Se puede realizar una busqueda de los libros disponibles por titulo
o autor de este.

Los titulos son:
El señor de los anillos, Cien años de soledad, El cementerio de Praga, Travesura de la niña mala,
El túnel, El nombre de la Rosa, Del amor y otros demonios.

En autores se tiene:
J.R.R.Tolkien, Gabriel Garcia Marquez, Umberto Eco, Ernesto Sabato y Mario Vargas Llosa
*/

// Defino las clases Libro y Autor
class Autor{
    constructor(nombre, nacionalidad){
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
    }
}

class Libro{
    constructor(titulo, precio, autor, descripcion){
        this.titulo = titulo;
        this.precio = precio;
        this.autor = autor;
        this.descripcion = descripcion;
    }
}

// creo un arreglo con de autores;
const autores = [
    new Autor("J.R.R. Tolkien", "Sudafrica"),
    new Autor("Umberto Eco", "Italia"),
    new Autor("Gabriel García Márquez", "Colombia"),
    new Autor("Ernesto Sabato", "Argentina"),
    new Autor("Mario Vargas Llosa", "Perú"),
];

// creo un arreglo de libros
let libros = [
    new Libro("El señor de los anillos", 25000, autores[0],'La historia se desarrolla en la Tierra Media...'),
    new Libro("Cien años de soledad", 35700, autores[2],'Historia de la familia Buendia...'),
    new Libro("El cementerio de Praga", 26900, autores[1],'El capitán Simonini experto en falisificar...'),
    new Libro("Travesuras de la niña mala", 45000, autores[4],'Ambientada en Santo Domingo...'),
    new Libro("El túnel", 26000, autores[3],'Novela de crímenes pasionales...'),
    new Libro("El nombre de la rosa", 15720, autores[1],'La historia se desarrolla en un abadía...'),
    new Libro("Del amor y otros demonios", 23000, autores[2],'Basada en una historia real...'),
];

function mostrarResultados(resultado){
    const resultadosDiv = document.getElementById("resultados")
    // verifico que el arreglo resultado contenga elementos
    if(resultado.length > 0){
        resultado.forEach((libro) => {
            let div = document.createElement("div");
            div.innerHTML = `
            <h2>Título: ${libro.titulo}</h2>
            <h3>Autor: ${libro.autor.nombre}</h3>
            <b>$${libro.precio}<b>
            <p>Descripcion: ${libro.descripcion}</p>
            `
            resultadosDiv.append(div);
        });
    } else{
        let div = document.createElement("div");
        div.innerHTML = `<h2>No se encontraron resultados</h2>`;
    }
}

function buscarTitulo(tituloBuscado){
    const resultado = libros.filter((libro) => libro.titulo.toLowerCase().includes(tituloBuscado.toLowerCase()));
    mostrarResultados(resultado);

}

function buscarAutor(autorBuscado){
    const resultado = libros.filter((libro) => libro.autor.nombre.toLowerCase().includes(autorBuscado.toLowerCase()));
    mostrarResultados(resultado);
}

function realizarBusqueda(opcion){
    switch (opcion) {
        case '1':
            let tituloBuscado = prompt("Ingrese título del libro ");
            buscarTitulo(tituloBuscado);
            break;
        case '2':
            let autorBuscado = prompt("Ingrese autor del libro ")
            buscarAutor(autorBuscado);
            break;
        case '3':
            alert('Gracias por usar el sistema')
            break;
        default:
            alert("La opcion ingresada no corresponde a ninguna opción válida");
            opcionIngresada = prompt(mensaje);
            realizarBusqueda(opcionIngresada);
            break;
    }
}

const mensaje = `Ingrese la opción de búsqueda:\n1-Búsqueda por título\n2-Búsqueda por autor\n3-Salir`;
let opcionIngresada = prompt(mensaje);
realizarBusqueda(opcionIngresada);