{
    console.log("numbers from 1 to 10");
    function num(){
    let i = 0;
    for (i = 1; i <= 10; i++) {
        console.log(`${i}`);
    }
}
num();
}

//sum of numbers
{
    console.log("\n\n\n\n\n");

    console.log("sum of numbers...");
    function Add(){
    let sum = 0;
    for (i = 1; i <= 10; i++)
        sum = sum + i;
    return sum;
}
let sum = Add();
console.log("sum =",sum);
}


//even numbers
{
    console.log("\n\n\n\n");
    console.log("Even numbers...");
    function even(){
    let i = 0;
    for (i = 1; i <= 10; i++)
        if (i % 2 == 0) {
            console.log(i);
        }
    }
    even();
}

//vowels
{
    console.log("\n\n\n\n\n");
    fstr = function (str){
    n = 0;
    strlen = str.length
    for (let i = 0; i <= strlen; i++) {
        if (str[i] == "a" || str[i] == "A" || str[i] == "e" || str[i] == "E" || str[i] == "i" || str[i] == "I" || str[i] == "o" || str[i] == "O" || str[i] == "u" || str[i] == "U") {
            n = n + 1;
        }
    }
    console.log("string:", str)
    return n;
}
 str = "vowels in a string"
 n=fstr(str);
 console.log(n)
}


//patter1
{
    console.log("\n\n\n\n\n");
    function pattern(){
    let str = '';

    for (let i = 5; i >= 0; i--) {

        for (let j = 1; j <= i; j++) {
            str = str + '*';
        }
        str = str + '\n'

    }
    console.log(str)
}
pattern();
}

//pattern2
function printPattern() {
    console.log("\n\n\n\n");
    console.log("pattern");

    let str = '';

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            str = str + j;
        }
        str = str + '\n';
    }

    console.log(str);
}

printPattern();


//prime number
function isPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function checkPrime() {
    console.log("\n\n\n\n");
    console.log("prime number");

    let n = 3;
    if (isPrime(n)) {
        console.log(`${n} is a prime number`);
    } else {
        console.log(`${n} is not a prime number`);
    }
}

checkPrime();
