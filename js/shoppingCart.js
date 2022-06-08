document.addEventListener('DOMContentLoaded', () => {
    const data = [{
        id: 1,
        name: 'Tae Te King',
        price: 3500,
        image: '../img/libro_tao_te_king.jpg'
    }, {
        id: 2,
        name: 'La Voz de tu Alma',
        price: 9200,
        image: '../img/libro_la_voz_de_tu_alma.jpg'
    }, {
        id: 3,
        name: 'Hacking',
        price: 5090,
        image: '../img/libro_hacking.jpg'
    }];

    let cart = [];
    const currency = ' $';
    const DOMitems = document.querySelector('#items');
    const DOMcart = document.querySelector('#cart');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonErase = document.querySelector('#boton-clean');

    function books() {
        data.forEach((info) => {
            const nodo = document.createElement('section');
            nodo.classList.add('card', 'col-sm-4');
            const nodoCardBody = document.createElement('section');
            nodoCardBody.classList.add('card-body');
            const nodoTitle = document.createElement('h5');
            nodoTitle.classList.add('card-title');
            nodoTitle.textContent = info.name;
            const nodoimage = document.createElement('img');
            nodoimage.classList.add('img-fluid');
            nodoimage.setAttribute('src', info.image);
            const nodoprice = document.createElement('p');
            nodoprice.classList.add('card-text');
            nodoprice.textContent = `${info.price}${currency}`;
            const nodoBoton = document.createElement('button');
            nodoBoton.classList.add('btn', 'btn-primary');
            nodoBoton.textContent = '+';
            nodoBoton.setAttribute('marcador', info.id);
            nodoBoton.addEventListener('click', addBooksCart);
            nodoCardBody.appendChild(nodoimage);
            nodoCardBody.appendChild(nodoTitle);
            nodoCardBody.appendChild(nodoprice);
            nodoCardBody.appendChild(nodoBoton);
            nodo.appendChild(nodoCardBody);
            DOMitems.appendChild(nodo);
        });
    }

    function addBooksCart(evento) {
        cart.push(evento.target.getAttribute('marcador'))
        generateCart();
    }

    function generateCart() {
        DOMcart.textContent = '';
        const cartSinDuplicados = [...new Set(cart)];
        cartSinDuplicados.forEach((item) => {
            const miItem = data.filter((itemdata) => {
                return itemdata.id === parseInt(item);
            });
            const numeroUnidadesItem = cart.reduce((total, itemId) => {
                return itemId === item ? total += 1 : total;
            }, 0);
            const nodo = document.createElement('li');
            nodo.classList.add('list-group-item', 'text-right', 'mx-2');
            nodo.textContent = `${numeroUnidadesItem} x ${miItem[0].name} - ${miItem[0].price}${currency}`;
            sessionStorage.setItem('bookT', miItem[0].name);
            const boton = document.createElement('button');
            boton.classList.add('btn', 'btn-danger', 'mx-5');
            boton.textContent = 'X';
            boton.style.marginLeft = '1rem';
            boton.dataset.item = item;
            boton.addEventListener('click', cleanItemCart);
            nodo.appendChild(boton);
            DOMcart.appendChild(nodo);
        });
        DOMtotal.textContent = calcTotal();
    }

    function cleanItemCart(evento) {
        const id = evento.target.dataset.item;
        cart = cart.filter((cartId) => {
            return cartId !== id;
        });
        generateCart();
    }

    function calcTotal() {
        return cart.reduce((total, item) => {
            const miItem = data.filter((itemdata) => {
                return itemdata.id === parseInt(item);
            });
            return total + miItem[0].price;
        }, 0).toFixed(2);
    }

    function vaciarCart() {
        cart = [];
        generateCart();
    }

    DOMbotonErase.addEventListener('click', vaciarCart);

    books();
    generateCart();

});