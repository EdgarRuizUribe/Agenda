let btnRegistrar = document.querySelector('#idBoton'),
    displayDirecciones = document.querySelector('#idDirecciones'),
    displayRegistrar = document.querySelector('#idRegistrar'),
    contactos = document.querySelector('.contactos'),
    idNew = document.querySelector('#idNew'),
    fotoRegistro = document.querySelector('#photo'),
    nombreRegistro = document.querySelector('#nombre'),
    appRegistro = document.querySelector('#app'),
    tellRegistro = document.querySelector('#tell'),
    direccionRegistro = document.querySelector('#direccion'),
    btnExit= document.querySelector('#exit');

let contact = document.querySelector('my-element-contact'),
    show = document.querySelector('#idconts');
btnExit.addEventListener('click',() =>{
    displayDirecciones.setAttribute('class', 'visible');
    displayRegistrar.setAttribute('class', 'noVisible');
});

idNew.addEventListener('click', () => {

    displayDirecciones.setAttribute('class', 'noVisible');
    displayRegistrar.setAttribute('class', 'visible chulo');

    nombreRegistro.value = "";
    appRegistro.value = "";
    tellRegistro.value = "";
    direccionRegistro.value = "";

});

btnRegistrar.addEventListener('click', () => {
    console.log('escucho');
    displayDirecciones.setAttribute('class', 'datos visible');
    displayRegistrar.setAttribute('class', 'noVisible');

    let elementoo = document.createElement('my-element-contact');
    let urlFoto = document.querySelector('image-input');
    let url2 = urlFoto.url;
    if (url2 != undefined) {
        elementoo.setAttribute('url', url2);
    } else { elementoo.setAttribute('url', 'src/img/user-circle-solid.svg'); }

    elementoo.setAttribute('name', nombreRegistro.value);
    elementoo.setAttribute('last-name', appRegistro.value);
    elementoo.setAttribute('tell', tellRegistro.value);
    elementoo.setAttribute('addres', direccionRegistro.value);

    contactos.appendChild(elementoo);

});

document.addEventListener('mi-evento-edg', e => {
    show.recibeDatos(e);
});