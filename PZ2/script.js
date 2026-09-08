
   // Задание 1. 

let userName = "Иван";
let userAge = 20;
let userCity = "Москва";

console.log(`Пользователь: ${userName}`);
console.log(`Возраст: ${userAge}`);
console.log(`Город: ${userCity}`);



   // Задание 2.

let visitorAge = 15;

if (visitorAge >= 16) {
    console.log("Вход разрешён");
} else {
    console.log("Вход запрещён");
}

let shoppingList = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Чай"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);
}


   // Задание 3.

let shoppingList = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Чай"];

for (let i = 0; i < shoppingList.length; i++) {
    console.log(`${i + 1}. ${shoppingList[i]}`);

   // Задание 4.

let cart = ["Телефон", "Наушники", "Чехол"];

cart.push("Зарядное устройство");

console.log("Обновлённая корзина:", cart);

   // Задание 5.

let prices = [150, 300, 450, 800];

let increasedPrices = prices.map(function (price) {
    return price * 1.2;
});

console.log("Исходные цены:", prices);
console.log("Новые цены (+20%):", increasedPrices);

   // Задание 6.

let products = ["Ноутбук", "Мышь", "Клавиатура", "Монитор"];
let foundProduct = products.find(function (item) {
    return item === "Монитор";
});

console.log("Найденный товар:", foundProduct);

   // Задание 7.

let student = {
    name: "Сергей",
    group: "ИC-43",
    course: 4
};

console.log(`Имя: ${student.name}`);
console.log(`Группа: ${student.group}`);
console.log(`Курс: ${student.course}`);

   //Задание 8.

let pupil = {
    name: "Анна",
    grade: 4
};
pupil.attendance = "100%";

console.log("Электронный дневник:", pupil);

   // Задание 9.

function calculateOrder(price, quantity) {
    return price * quantity;
}

console.log("Итоговая стоимость заказа:", calculateOrder(500, 3)); // 1500


   // Задание 10. 

let shopItems = [
    { name: "Наушники", price: 2500 },
    { name: "Клавиатура", price: 1800 },
    { name: "Веб-камера", price: 1200 }
];

for (let item of shopItems) {
    console.log(`${item.name} - ${item.price} руб.`);
}

   // Задание 11.

let employees = [
    { name: "Иванов Иван", position: "Менеджер", salary: 65000 },
    { name: "Петрова Ольга", position: "Разработчик", salary: 95000 },
    { name: "Сидоров Пётр", position: "Дизайнер", salary: 72000 },
    { name: "Кузнецова Анна", position: "Тестировщик", salary: 60000 }
];

let highPaidEmployees = employees.filter(function (employee) {
    return employee.salary > 70000;
});

console.log("Сотрудники с зарплатой выше 70000:", highPaidEmployees);
