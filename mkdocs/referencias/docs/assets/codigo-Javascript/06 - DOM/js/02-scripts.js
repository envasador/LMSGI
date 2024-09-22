// getElementsByClassName()
// Selecciona elementos por su clase, y lo devuelve en formato colección (HTMLCollection).
// Podemos recorrer los valores como si fuera un array.

// Seleccionamos los elementos con clase header
const header = document.getElementsByClassName('header')
console.log(header)


const hero = document.getElementsByClassName('hero')
console.log(hero)

// Si hay varias clases, me devuelve una colección...
const contenedores = document.getElementsByClassName('contenedor')
console.log(contenedores)
// Podemos acceder a sus elementos como si se tratase de un array
console.log(contenedores[0])

// Si una clase no existe, devolverá una colección vacía...
const noExiste = document.getElementsByClassName('no-existe')
console.log(noExiste)


// Realmente es un selector antiguo y en desuso, no recomendaría su uso.
// Pero conviene cnocerlo ya que nos lo vamos a encontrar en código menos actual.
