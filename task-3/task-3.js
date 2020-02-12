const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let pass = prompt('Password:');

if (pass == null) {
    message = 'Отменено пользователем!';
}

else if (pass == ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
}

else if (pass != ADMIN_PASSWORD) {
    message = 'Доступ запрещен, неверный пароль!';
}

alert(message);
