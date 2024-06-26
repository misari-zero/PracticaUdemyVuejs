// objetos
const web = {
    nombre: 'bluweb',
    links: {
        enlace: 'www.bluuweb.cl'
    },
    redesSociales: {
        youtube: {
            enlace: 'youtube.com/bluuweb',
            nombre: 'bluuweb yt'
        }
    }
}

console.log(web.redesSociales.youtube.enlace);
// Destructuring
const {enlace, nombre} = web.redesSociales.youtube

const miweb = {enlace, nombre}
console.log(miweb);