// Cuando visitamos un sitio o aplicación web, existen una gran cantidad de eventos que pasan...

// Los eventos utilizan el método en el document de addEventListener, este registra un evento en especifico, 
// como puede ser un click en un enlace o imagen, submit a un formulario, o cuando el usuario escribe...

// La sintaxis es de las sig forma:

// document.addEventListener(EventoQueEscuchamos, FuncionQueEjecutamos)

// Uno que es muy común y utilizaras en todos tus proyectos es DOMContentLoaded, 
// se usa para esperar a que el documento esté listo

document.addEventListener('DOMContentLoaded', () => {
    console.log("Docs Listo")
})


// console.log("1")
// document.addEventListener('DOMContentLoaded', () => {
//     console.log("2")
// })
// console.log("3")
