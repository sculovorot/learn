let money = +prompt("Ваш бюджет на месяц?", ''),  //полученные данные-строка поэтому поставили унарный плюс чтоб преобразовать в число
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
let appData = {
    budget: money, //вводимая переменная
    timeData: time, //вводимая дата
    expenses: {},   // ОБЪЕКТ обязательные расходы
    optionalExpenses: {}, //необязательные расходы
    income: [], //данные с доп доходом
    savings: false
};

// порписываем цикл способ 1
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

    }
};

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

//бюджет на 1 день
appData.moneyPerDay = appData.budget / 30;
alert("Ежедневный бюджет" + appData.moneyPerDay);

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