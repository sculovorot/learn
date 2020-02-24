'use strict';
let money, time;
function start(){
    money = +prompt("Ваш бюджет на месяц?", '');  //полученные данные-строка поэтому поставили унарный плюс чтоб преобразовать в число
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    //пока что-то не произошло, мы пользователя задолбаем вопросом про бюджет. isNaN возвращает true если попадает туда не цифры
    while(isNaN(money) || money == '' || money == null) {  //null чтоб пользователь не смог нажать кнопку отмена. Цикл будет продолжаться если один из вариантов выполнится
        money = prompt("Ваш бюджет на месяц", '');
    }
}
start();

let appData = {
    budget: money, //вводимая переменная
    timeData: time, //вводимая дата
    expenses: {},   // ОБЪЕКТ обязательные расходы
    optionalExpenses: {}, //необязательные расходы
    income: [], //данные с доп доходом
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Bведите обязательную статью расходов", ''),  
            b = prompt("Во сколько обойдётся", '');
         // порверяем что входящие данные a и b являются строкой и не нажата кнопка отмены т.е не была равна null != 
         if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
         //также проверяем что пользователь не оставил строку пустой и не более 50 символов
         && a != '' && b != '' && a.length < 50) { 
             console.log("done");  
             appData.expenses[a] = b;
         } else {
             i = i--;
         }
     };
}
chooseExpenses();
// порписываем цикл способ 2
// let i = 0;
// while(i < 2) {
//     i++;
//     let a = prompt("Введите обязательную статью расходов", ''),
//         b = prompt("Во сколько обойдется", '');
//     if( (typeof(a)=== 'string') && (typeof(a) != null) && (typeof(b) != null) && a != '' && b != '' && a.length < 50){
//     console.log("done");
//     appData.expenses[a] = b;
//     } else {
//         continue;
//     }
// };

//определение дневного бюджета
function detectDayBudget(){
     appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed округляем наше число до целого возвр стр значение
     alert("Ежедневный бюджет" + appData.moneyPerDay + "руб");
}
detectDayBudget();

// Выведем уроввень достатка человека в зависимости от ежедневного бюджета
if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровнеь достатка");
}else {
    console.log("Произошла ошибка");
}

//расчитаем накопления с депозита
function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent; //вводим новое св-во 
        alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

//определение необязательных расходов
function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++) {
        let c = prompt("Статья необязательных расходов", '');
    appData.optionalExpenses[i] = c;
    console.log(appData.optionalExpenses);
    }
}
chooseOptExpenses();
