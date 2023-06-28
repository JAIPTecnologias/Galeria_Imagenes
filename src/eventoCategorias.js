import dataFotos from './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';


const contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');

contenedorCategorias.addEventListener('click', (e) => {
    e.preventDefault();
   
    if(e.target.closest('a')){//Closest busca elementos desde abajo hacia arriba
        galeria.classList.add('galeria--active');
        document.body.style.overflow = 'hidden'; //Es para eliminar el scroll de la página
        
        /*
        !Aqui había un error y es que al momento de dar click en el texto de la imagen, abria la galería pero sin imagenes. Se agrego closest y con eso quedó corregido.
        */
        const categoriaActiva = e.target.closest('a').dataset.categoria;
        //Se agrega un tributo personalizado llamado categoriaActiva
        galeria.dataset.categoria = categoriaActiva;

        const fotos = dataFotos.fotos[categoriaActiva];
        const carousel = galeria.querySelector('.galeria__carousel-slides');

        //Aquí se destructura el array fotos, es decir se vuele un objeto
        const {id, nombre, ruta, descripcion} = fotos[0];
        cargarImagen(id, nombre, ruta, descripcion);

        carousel.innerHTML = '';
        fotos.forEach((foto) => {
            //console.log(foto);
            //Se agrega el atributo personalziado "data-id" con javascript.
            const slide = `
                    <a href="#" class="galeria__carousel-slide">
					    <img class="galeria__carousel-image" src="${foto.ruta}"   data-id="${foto.id}" alt="" />
					</a>
            `;
             //Con querySelector buscamos el elemento que contiene la clase con el nombre galeria__carousel-slides y se le agregar lo que contien la constante slide
        galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
        });
       
       // Agregamos la clase active al primer elemento.
		galeria.querySelector('.galeria__carousel-image').classList.add('galeria__carousel-slide--active');


    }
});