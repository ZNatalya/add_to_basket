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
    // проверяет добавлен ли в корзину
    if (order.find(el => el.id === productId)) return alert('Товар уже в корзине');
    // добавляет в корзину
    const product = products.find((item)=> item.id === productId);
    order = [...order, product];

    renderCart();
    renderTotalPrice();
}

// удаление
function removeFormBasket(productId) {
    order = order.filter(item => item.id !== productId);

    renderCart();
    renderTotalPrice();
}

// перерасчет общей стоимости
function renderTotalPrice(productId) {
    const totalPrice = order.reduce((acc, item) => {
        return acc + item.price;
    }, 0);

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