const contenido = document.querySelector("#contenido")
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
    
    seccion.append(p, img)
    contenido.append(seccion)