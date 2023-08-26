const products = [
    {
        id: 1,
        title: "Lenovo Yoga",
        price: 3000,
    },
    {
        id: 2,
        title: "Acer Aspire",
        price: 1800,
    },
    {
        id: 3,
        title: "Dell Vostro",
        price: 3400,
    },
];

let order = [];

// Добавление товара в корзину
function addToBasket(productId) {


    renderCart();
    renderTotalPrice();
}

// удаление
function removeFormBasket(productId) {

    renderCart();
    renderTotalPrice();
}

// перерасчет общей стоимости
function renderTotalPrice(productId) {

    document.getElementById('total').innerText = totalPrice;
}

// перерасчет карточки
function renderCart() {
    const cart = document.getElementById('basket-items');

    cart.innerHTML = "";
    order.forEach((item) => {
        const el = document.createElement('li');
        el.innerText = item.title;
        el.onclick = () => removeFormBasket(item.id);
        cart.append(el);
    });
}