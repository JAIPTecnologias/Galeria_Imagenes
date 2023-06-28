const galeria = document.getElementById('galeria');

const cerrarGaleria = () => {
    galeria.classList.remove('galeria--active');
    document.body.style.overflow = '';
}

//Con esta línea se indica lo que esta permitido exportar para que desde otro documento de pueda acceder.
export default cerrarGaleria;