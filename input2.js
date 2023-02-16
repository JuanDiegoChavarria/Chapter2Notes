const readline = require('readline-sync');
//1
let number1 = Number(readline.question('give me any number of your choice \nyour answer: '));
let number2 = Number(readline.question('give me another number of your choice \nyour answer: '));
console.log(`${number1} + ${number2} = ${number1 + number2}`);

//2
let number3 = Number(readline.question('give me any number of your choice \nyour answer: '));
let number4 = Number(readline.question('give me another number of your choice \nyour answer: '));
console.log(`${number3} - ${number4} = ${number3 - number4}`);

//3
let number5 = Number(readline.question('give me any number of your choice \nyour answer: '));
let number6 = Number(readline.question('give me another number of your choice \nyour answer: '));
console.log(`${number5} * ${number6} = ${number5 * number6}`);

//4
let number7 = Number(readline.question('give me any number of your choice \nyour answer: '));
let number8 = Number(readline.question('give me another number of your choice \nyour answer: '));
console.log(`${number7} / ${number8} = ${number7 / number8}`);

//5
let number9 = Number(readline.question('give me any number of your choice \nyour answer: '));
let number10 = Number(readline.question('give me another number of your choice \nyour answer: '));
console.log(`${number9} % ${number10} = ${number9 % number10}`);

//6
let answer1 = readline.question("what is your first name ?\nYour answer: ");
let answer2 = readline.question("what is your last name ?\nYour answer: ");
console.log(`Greetings ${answer2}, ${answer1}`)

//7
let answer4 = readline.question("what is your first name ?\nYour answer: ");
let answer3 = readline.question("Are you a Mr.,Mrs., or a Ms. ?\nYour answer: ");
let answer5 = readline.question("Are you a jnr., the first or ect. ?\nYour answer: ");
console.log(`Welcome ${answer3}, ${answer4} ${answer5}`)

//8
let answer6 = readline.question("street number\nYour answer: ");
let answer7 = readline.question("street name\nYour answer: ");
let answer8 = readline.question("city\nYour answer: ");
let answer9 = readline.question("state\nYour answer: ");
let answer10 = readline.question("zip code\nYour answer: ");
console.log(`${answer6} ${answer7} ${answer8}`)
console.log(`${answer9} ${answer10}`)

//9
let question1 = Number(readline.question('give me any number of your choice \nyour answer: '));
let question2 = Number(readline.question('give me another number of your choice \nyour answer: '));
console.log(`${question1} divided by ${question2} equals ${answer8}`)