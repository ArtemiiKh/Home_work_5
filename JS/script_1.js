let user = {};
user.name = "John";
user.SurName = "Smith";
user.name = "Pete";

console.log(user) // Проверка на изменение name

delete user.name;

console.log(user) // Првоерка на итоговый результат 
