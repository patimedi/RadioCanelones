//Se pide nombre para sucribirse a membresía

let nombre = prompt('Ingresá tu nombre');


let opciones = prompt('¿Querés suscrbirte para recibir un descuento en tu membresía?: \n1 - Sí \n2 - No')



switch (opciones) {
    case '1':
        prompt('ingresa tu mail')
        alert('El descuento es del 10% hasta el 31 de julio')
        break;
    case '2':
        alert('Gracias por tu respuesta, te esperamos pronto')
        break;
}

const resta = function (precioNormal, descuento) { return precioNormal - descuento }
alert('el precio con descuento es ' + resta(1100,110) + ' ¡Gracias!')

//costos
let precioNormal = 1100;
let descuento = 110; // 10% de descuento

//Array de noticias pagas para los sucriptores de la membresía
const noticiasPagas = [{

    nombre: 'noticia1',
    fecha: 'Enero'
},
    {
    nombre: 'noticia2',
    fecha: 'Febrero'
},
{
    nombre: 'noticia3',
    fecha: 'Marzo'
},
{
    nombre: 'noticia4',
    fecha: 'Abril'
},
{
    nombre: 'noticia5',
    fecha: 'Mayo'
},
{
    nombre: 'noticia6',
    fecha: 'Junio'
},
{
    nombre: 'noticia7',
    fecha: 'Julio'
},
{
    nombre: 'noticia8',
    fecha: 'Agosto'
},
{
    nombre: 'noticia9',
    fecha: 'Setiembre'
},
{
    nombre: 'noticia10',
    fecha: 'Octubre'
},
{
    nombre: 'noticia11',
    fecha: 'Noviembre'
},
{
    nombre: 'noticia12',
    fecha: 'Diciembre'
},
]


const buscar = noticiasPagas.find ((noticia)=> noticia.nombre == 'noticia8');

console.log(buscar);


let fecha = prompt('Buscar por fecha');
const filtrar = noticiasPagas.filter ((noticia) => noticia.fecha.includes(fecha));

console.log(filtrar);
