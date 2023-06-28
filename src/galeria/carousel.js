const galeria = document.getElementById('galeria');
const carousel = (direccion) => {
    const opciones = {
        //Aquí se especifica cuando las imagenes entran o salen de la parte visible del carousel
        root: document.querySelector('.galeria__carousel'),
        rootMargin: '0px',
        //Aqui se específica cuanto porcentaje queremos que la imagen este dentro del carousel para considerarse visible
        threshold: 0.9
    };
    //IntersectionObserver es una API de JavaScript
    const observer = new IntersectionObserver((entradas) => {
        //console.log(entradas[0]);
        const slidesVisibles = entradas.filter((entrada) => {
            if(entrada.isIntersecting === true){
                return entrada;
            }
        });

        if(direccion === 'atras'){
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
            if(indexPrimerSlideVisible >= 1){
                entradas[indexPrimerSlideVisible - 1].target.scrollIntoView({
                    behavior: 'smooth',
                    inline: 'start'
            });
        }


        }else if (direccion === 'adelante'){
            const ultimoSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimoSlideVisible = entradas.indexOf(ultimoSlideVisible);
                if(entradas.length -1 > indexUltimoSlideVisible){
                    entradas[indexUltimoSlideVisible + 1].target.scrollIntoView({
                        behavior: 'smooth',
                        inline: 'start'
                });
            }
           
        }


        const slides = galeria.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide) => {
            observer.unobserve(slide);
        });

    }, opciones);


    const slides = galeria.querySelectorAll('.galeria__carousel-slide');
    slides.forEach((slide) => {
        observer.observe(slide);
    });
};

export default carousel;