document.getElementById('colorButton').addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    bg.innerHTML = "Background colour :#"+randomColor
    
    document.body.style.backgroundColor = randomColor;
});
