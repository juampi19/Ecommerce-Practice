//Modal vista
document.addEventListener( 'DOMContentLoaded', () => {
    

    iniciarApp();
} )

function iniciarApp() {

    crearGaleria();
}


function crearGaleria() {
    for( let i = 1; i <= 9; i++ ) {
       const galeria = document.querySelector( '.galeria' );
       const img = document.createElement( 'img' );
       const body = document.querySelector( 'body' ); 
       img.src = `../img/galeria_0${ i }.jpg`
       img.alt = "Imagen galeria";

       img.onclick = function() {
           mostrarModal( i ); 
           body.classList.add( 'detenerScroll' );
       } 

       galeria.appendChild( img );
    }
}


const mostrarModal = ( imagen ) => {
    const div = document.createElement( 'div' );
    const img = document.createElement( 'img' );
    const btnCerrar = document.createElement( 'p' );
    const body = document.querySelector( 'body' );
    //Atributos de la imagen
    img.src = `../img/galeria_0${ imagen }.jpg`
    img.alt = "Imagen galeria";

    //Creamos el div del overlay
    div.classList.add( 'overlay' );
    div.appendChild( img );
    div.onclick = function() {
        div.remove();
        body.classList.remove( 'detenerScroll' );
    }

    //Creamos el boton para poder cerrar el modal    
    btnCerrar.textContent = 'X';
    btnCerrar.classList.add( 'btn-cerrar' );
    btnCerrar.onclick = function() {
        div.remove();
        body.classList.remove( 'detenerScroll' );
    }
    //Insertamos el boton y el div al body
    div.appendChild( btnCerrar );
    body.appendChild( div );

}

