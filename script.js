'use strict';
let money = prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
var appData = {
    budget: money, //вводимая переменная
    timeData: time, //вводимая дата
    expenses: {},   //обязательные расходы
    optionalExpenses: {}, //необязательные расходы
    income: [], //данные с доп доходом
    savings: false
};
let a1 = prompt("Bведите обязательную статью расходов", ''),
    a2 = prompt("Во сколько обойдётся", ''),
    a3 = prompt("Bведите обязательную статью расходов", ''),
    a4 = prompt("Во сколько обойдётся", '');

    //записываем ответы в объект expences
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

//бюджет на 1 день
alert(appData.budget/30);
