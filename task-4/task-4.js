let credits = 23580;
let pricePerDroid = 3000;

let numDroid = prompt('Количество дроидов:');

let totalPrice = pricePerDroid*numDroid;

let cash =  credits - totalPrice;

if (numDroid == null) {
    alert('Отменено пользователем!')
}

else if (credits>totalPrice) {
    alert(`Вы купили ${numDroid} дроидов, на счету осталось ${cash} кредитов.`)
}

else if (credits<totalPrice) {
    alert('Недостаточно средств на счету!')
}

