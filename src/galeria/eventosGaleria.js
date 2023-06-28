import cerrarGaleria from "./cerrarGaleria";
import slideClick from './slideClick';
import {cargarAnteriorSiguiente} from './cargarImagen';
import carousel from "./carousel";

const galeria = document.getElementById('galeria');
/*
Este Código es para hacer una propagación de eventos (desde el contenedor principal se propaga hacia los hijos), es decir con addEventListener se esta monitoreando cuando se haga click en cualquier elemento
de la página web
*/
galeria.addEventListener('click', (e) => {
    //A lo que le hagas click buscame el botón mas cercano de abajo hacia arriba
    const boton = e.target.closest('button');
    
    /*Con dataset podemos acceder a los atributos personalizados y el nombre empienzan con data
     📌Con los signos de interrogación estamos forzando a que si no encuenta un botón no siga buscando, en caso que si lo encuentre busca un  dataset y en caso que no lo encuentre no sigue con el proceso
    */
    if(boton?.dataset?.accion === 'cerrar-galeria'){
        cerrarGaleria();
    }

        //Carousel de las imagenes
        if(e.target.dataset.id){
            slideClick(e);
        }

        //Código del botón siguiente imagen
        if(boton?.dataset?.accion === 'siguiente-imagen'){
            cargarAnteriorSiguiente('siguiente');
        }

         //Código del botón anterior imagen
         if(boton?.dataset?.accion === 'anterior-imagen'){
            cargarAnteriorSiguiente('anterior');
        }

         //- - - Carousel Adelante
         if(boton?.dataset?.accion === 'siguiente-slide'){
           carousel('adelante');
        }

         //- - - Carousel Atrás
         if(boton?.dataset?.accion === 'anterior-slide'){
            carousel('atras');
        }

});