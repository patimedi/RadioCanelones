//Se pide nombre para sucribirse a membresía

let nombre = prompt('Ingresá tu nombre');


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
}

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


const buscar = noticiasPagas.find((noticia) => noticia.nombre == 'Politeama en tu Pueblo»; un proyecto que apuesta a la descentralización');

console.log(buscar);


const noticiasOro = document.getElementById('membresiaOro')
const noticiasPlata = document.getElementById('membresriaPlata')
const comprar = document.querySelector('.btn')

let agradecimiento = prompt('Gracias por realizar tu compra')

comprar.addEventListener('click', agradecimiento);


let mail = document.querySelector('.eform-label');
let enviar = document.querySelector('.btn');

enviar.addEventListener('click',()=>{
    localStorage.setItem('email', mail.value);
}
)
