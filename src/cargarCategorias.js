import dataCategorias from './datos/categorias';
const {categorias} = dataCategorias; //Aqui se destructura la contante categorías.
const contenedorCategorias = document.getElementById('categorias');

categorias.forEach((categoria) => {
    const nuevaCategoria = document.createElement('a'); //Aqui se crea el elemento a
    const plantilla = `
    <img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
    <div class="categoria__datos">
        <p class="categoria__nombre">${categoria.nombre}</p>
        <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
    `;

    nuevaCategoria.innerHTML = plantilla;
    nuevaCategoria.classList.add('categoria');
    nuevaCategoria.href = '#';
    nuevaCategoria.dataset.categoria = categoria.id;

    contenedorCategorias.append(nuevaCategoria); //Aqui se cargan las categorias al DOM

});