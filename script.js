const toggleBtn = document.getElementById('toggle');
const body = document.body;

toggleBtn.addEventListener('click', function(){

    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if(body.classList.contains('dark-mode')){
        toggleBtn.innerHTML = 'Toggle';
    }else{
        toggleBtn.innerHTML = 'Toggle';
    }

});
