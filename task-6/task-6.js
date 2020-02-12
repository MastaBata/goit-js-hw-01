let numb = +prompt("Введите число:")
let total = 0;

while (numb) {
    total += numb;
    numb = +prompt("Введите число:")
}

alert(total);
