const contenido = document.querySelector("#contenido")

const crearCard = () => {
    const imagenes = ['./img/1.jpg', './img/2.jpg', './img/3.jpg'];
    const img = document.createElement('img')
    const seccion = document.createElement('section')
    const p = document.createElement('p')
    p.textContent = 'Mushashi Miyamoto'
    img.src = imagenes[1]
    img.alt = 'logo'
    seccion.classList.add('card')
    p.classList.add('titulo')
    img.classList.add('img')
    //img.classList.remove('img')
    img.classList.add('titulo', 'otraClase', 'clase') //podemos ingresar varias clases en una etiqueta

    seccion.append(p, img)
    contenido.append(seccion)


}
