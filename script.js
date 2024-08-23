// First Counter
const firstCounter = document.getElementById('first-counter');
const firstDecrease = document.getElementById('first-decrease');
const firstReset = document.getElementById('first-reset');
const firstIncrease = document.getElementById('first-increase');

let firstCount = 0;

firstIncrease.addEventListener('click', () => {
    firstCount++;
    firstCounter.innerText = firstCount;
});

firstDecrease.addEventListener('click', () => {
    if (firstCount > 0) {
        firstCount--;
        firstCounter.innerText = firstCount;
    }
});

firstReset.addEventListener('click', () => {
    firstCount = 0;
    firstCounter.innerText = firstCount;
});

// Second Counter
const secondCounter = document.getElementById('second-counter');
const secondDecrease = document.getElementById('second-decrease');
const secondReset = document.getElementById('second-reset');
const secondIncrease = document.getElementById('second-increase');

let secondCount = 0;

secondIncrease.addEventListener('click', () => {
    secondCount++;
    secondCounter.innerText = secondCount;
});

secondDecrease.addEventListener('click', () => {
    if (secondCount > 0) {
        secondCount--;
        secondCounter.innerText = secondCount;
    }
});

secondReset.addEventListener('click', () => {
    secondCount = 0;
    secondCounter.innerText = secondCount;
});
