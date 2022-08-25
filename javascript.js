/*let nombre = prompt('Ingresá tu nombre');
let opciones = prompt('Opciones de membresía: \n1 - ORO \n2 - PLATA')
switch (opciones) {
    case '1':
        prompt('ingresa tu mail')
        alert('El descuento es del 10% hasta el 31 de julio')
        const restaOro = function (precioOro, descuentoOro) { return precioOro - descuentoOro }
        alert('el precio con descuento es ' + restaOro(1100, 110) + ' ¡Gracias!')
        break;
    case '2':
        alert('El descuento es del 10% hasta el 31 de julio')
        const restaPlata = function (precioPlata, descuentoPlata) { return precioPlata - descuentoPlata }
        alert('el precio con descuento es ' + restaPlata(750, 75) + ' ¡Gracias!')
        break;
}*/

//costos
let precioOro = 1100;
let descuentoOro = 110; // 10% de descuento
let precioPlata = 750;
let descuentoPlata = 75; // 10% de descuento

//Array de noticias pagas para los sucriptores de la membresía

const noticiasPagas = [{

    nombre: 'Museo uruguayo de arte Contemporáneo dentro del Top ten mundial',
    membresia: 'Oro'
},
{
    nombre: 'Recibimos a La Tabaré en los estudios de Radio Canelones',
    membresia: 'Oro'
},
{
    nombre: 'Se inauguró el sendero de interpretación junto al Arroyo Canelón Chico',
    membresia: 'Oro'
},
{
    nombre: 'Se maneja la posibilidad de trasladar el proyecto de Isla Artificial a Canelones',
    membresia: 'Plata'
},
{
    nombre: 'En UTE hay retraso en compra de materiales y quiebre de stock en cables',
    membresia: 'Oro'
},
{

    nombre: 'Politeama en tu Pueblo»; un proyecto que apuesta a la descentralización',
    membresia: 'Plata'
},
]
//buscar noticia
const buscar = noticiasPagas.find((noticia) => noticia.membresia == 'Oro');

console.log(buscar);

//Array
const nuevasMembresias = [{

    tipoMembresia: 'Oro',
    precio: 990
},
{
    tipoMembresia: 'Plata',
    precio: 675
}]

const comprar = document.querySelectorAll('.btn')


comprar.forEach(btn => {
    btn.addEventListener('click', () => {
        Swal.fire({
            title: 'Gracias por registrarte',
            text: 'A la brevedad nos comunicaremos contigo',
            icon: 'success',
            color: '#d4473d',
        })
    })
})

//Stroge
let enviar = document.getElementById('enviar');
let guardar = document.getElementById('exampleCheck1')
let select = document.getElementById('selectMembresias')
let mail = document.getElementById('exampleInputEmail1')
let costo = document.getElementById('costoMembresias')
let formulario = document.querySelector('.formulario')

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(select.value)
    console.log(mail.value)
    const object = {
        email: mail.value,
        membresia: select.value,
        precio: costo.value
    }
    localStorage.setItem('Membresia', JSON.stringify(object));

})

guardar.addEventListener('change', (e) => {
    (e.target.value)
})


enviar.addEventListener('click', () => {
    fetch('../data.json')
        .then((response) => response.json())

})




