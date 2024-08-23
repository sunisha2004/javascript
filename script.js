const baseUnitsInMeters = {
    inches: 0.0254,
    feet: 0.3048,
    yards: 0.9144,
    miles: 1609.344,
    centimeters: 0.01,
    meters: 1,
    kilometers: 1000,
};

document.getElementById('inputValue').addEventListener('input', convert);
document.getElementById('inputUnit').addEventListener('change', convert);
document.getElementById('outputUnit').addEventListener('change', convert);
document.getElementById('resetButton').addEventListener('click', reset);

function convert() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    if (isNaN(inputValue) || !inputUnit || !outputUnit) {
        updateResults("Invalid input", "Invalid output");
        return;
    }

    const meters = inputValue * baseUnitsInMeters[inputUnit];
    const result = meters / baseUnitsInMeters[outputUnit];

    updateResults(`${capitalize(inputUnit)}: ${inputValue}`, `${capitalize(outputUnit)}: ${result}`);
}

function reset() {
    document.getElementById('inputValue').value = '';
    document.getElementById('inputUnit').value = '';
    document.getElementById('outputUnit').value = '';
    updateResults("Input:", "Output:");
}

function updateResults(inputText, outputText) {
    document.getElementById('inputResult').textContent = inputText;
    document.getElementById('outputResult').textContent = outputText;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
