
// Check for comparison for 2

for (let i = 1; i <= 20; i++) {
    
    if (i % 2 === 0) {
        console.log(i); 
    }
}

// Генерация случайного числа от 1 до 10
const randomNumber = Math.floor(Math.random() * 10) + 1;

let userTry = 0;

while (userTry !== randomNumber) {
    
    userGuess = parseInt(prompt("Угадайте число от 1 до 10:"));

    if (userTry === randomNumber) {
        alert("Вы угадали!");
    } else {
        alert("Попробуйте еще раз!");
    }
}