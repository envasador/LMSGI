// Arrow functions en métodos de propiedad (métodos de objetos)
// Copiamos el ejemplo de la playlist


// const reproductor = {
//     reproducir: function(id) {
//         console.log(`Reproduciendo canción id ${id}`);
//     },
//     pausar: function() {
//         console.log('pausando...');
//     },
//     borrar: function(id) { //Lo declaramos primero fuera, y luego lo subimos
//         console.log(`Borrando canción con id: ${id}`)
//     },
//     crearPlaylist: function(nombre) { // playlist
//         console.log(`Creando la Playlist ${nombre}`);
//     },
//     reproducirPlaylist: function(nombre) {// playlist
//         console.log(`Reproduciendo la Playlist ${nombre}`)
//     }
// }



const reproductor = {
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción id ${id}`),
    pausar: () => console.log('pausando...'),
    borrar: id => console.log(`Borrando canción con id: ${id}`),
    crearPlaylist: nombre =>  console.log(`Creando la Playlist ${nombre}`),
    reproducirPlaylist: nombre =>  console.log(`Reproduciendo la Playlist ${nombre}`),

    // También existen los Set y Get,  set es para añadir un valor, get es para obtenerlo...

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`)
    },
    get obtenerCancion() {
        console.log(`${this.cancion}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien podemos añadir los métodos fuera
// reproductor.borrar = function(id) {
    
// }

reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');


// Probando set y get se utilizando de la siguiente forma
reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCancion;