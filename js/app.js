const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let articulosCarrito = [];


cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener('click', agregarCurso);
    carrito.addEventListener('click', eliminarCurso);
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML(); // Eliminamos todo el HTML
    })


}

function agregarCurso(e) {
    e.preventDefault();

    if (e.target.classList.contains('agregar-carrito')) {
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function leerDatosCurso(curso) {
    infoCurso = {
        imagen:curso.querySelector('img').src,  
        titulo:curso.querySelector('h4').textContent,
        precio:curso.querySelector('.precio span').textContent,
        id:curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    //Revisar si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id );
    if(existe){
        //Actualizamos la cantidad
        const cursos = articulosCarrito.map(curso => {
            if(curso.id === infoCurso.id ){
                curso.cantidad ++;
                return curso;
            }else{
                return curso; 
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // Agrega elementos al arreglo carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);

    carritoHTML();
}

function carritoHTML(){

    //LIMPIAR HTML
    limpiarHTML();

    // RECORRE EL CARRITO Y GENERA EL HTML
    articulosCarrito.forEach(curso => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        console.log(curso);
        const row = document.createElement('tr');
        row.innerHTML = `
        <td> <img src="${imagen}" width="100"> </td>
        <td>${titulo}</td>
        <td>${precio}</td>
        <td>${cantidad}</td>
        <td> <a href=# class="borrar-curso" data-id="${id}"> X </a> </td>
        `;
        //Agrega el HTML del carrito  en el Tbody
        contenedorCarrito.appendChild(row);
    });
}

function limpiarHTML(){


    while(contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

function eliminarCurso(e) { // e es el evento
    console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);

        carritoHTML(); //iterar sobre el carrito y mostrar su HTML

        console.log(articulosCarrito);
    }


}

