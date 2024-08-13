{
    console.log("numbers from 1 to 10");
    let i = 0;
    for (i = 1; i <= 10; i++) {
        console.log(`${i}`);
    }
}

//sum of numbers
{
    console.log("\n\n\n\n\n");

    console.log("sum of numbers...");
    let sum = 0;
    for (i = 1; i <= 10; i++)
        sum = sum + i;
    console.log("sum = ", sum);
}


//even numbers
{
    console.log("\n\n\n\n");
    console.log("Even numbers...");
    letbi = 0;
    for (i = 1; i <= 10; i++)
        if (i % 2 == 0) {
            console.log(i);
        }

}

//vowels
{
    console.log("\n\n\n\n\n");

    str = "vowels in a string"
    n = 0;
    strlen = str.length
    for (let i = 0; i <= strlen; i++) {
        if (str[i] == "a" || str[i] == "A" || str[i] == "e" || str[i] == "E" || str[i] == "i" || str[i] == "I" || str[i] == "o" || str[i] == "O" || str[i] == "u" || str[i] == "U") {
            n = n + 1;
        }
    }
    console.log("string:", str)
    console.log(n)
}


//patter1
{
    console.log("\n\n\n\n\n");
    let str = '';

    for (let i = 5; i >= 0; i--) {

        for (let j = 1; j <= i; j++) {
            str = str + '*';
        }
        str = str + '\n'

    }
    console.log(str)
}

//pattern2
{
    console.log("\n\n\n\n")
    console.log("pattern");

    let str = '';

    for (let i = 1; i <= 5; i++) {
        for (let j = 1; j <= i; j++) {
            str = str + j;
        }
        str = str + '\n'
    }
    console.log(str);
}

//prime number

{
    console.log("\n\n\n\n");
    console.log("prime number");
    let n = 3;
    let prime = true;
    if (n <= 1) {
        prime = false;
    } else {
        for (let i = 2; i < n; i++) {
            if (n % i === 0) {
                prime = false;
                break;
            }
        }
    }
    if (prime) {
        console.log(`${n} is prime number`);
    } else {
        console.log(`${n} is not prime number`);
    }
}