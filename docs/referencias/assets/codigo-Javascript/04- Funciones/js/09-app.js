// Vamos a ver lo que son los métodos de propiedad (métodos)

const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo canción id ${id}`);
    },
    pausar: function() {
        console.log('pausando...');
    },
    borrar: function(id) { //Lo declaramos primero fuera, y luego lo subimos
        console.log(`Borrando canción con id: ${id}`)
    },
    crearPlaylist: function(nombre) { // playlist
        console.log(`Creando la Playlist ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {// playlist
        console.log(`Reproduciendo la Playlist ${nombre}`)
    }
}
reproductor.reproducir(30);
reproductor.pausar();

// Tambien podemos declarar métodos fuera (siempre que no hayamos sellado el objeto)
// reproductor.borrar = function(id) {
// }
// Lo pasamos al objeto..

//Ahora creamos la playlist
reproductor.borrar(20);
reproductor.crearPlaylist('Heavy Metal');
reproductor.reproducirPlaylist('Heavy Metal');

