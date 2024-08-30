let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://fakestoreapi.com/products');

let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    xhr.send();
});

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let response = xhr.responseText; 
            let parsed_response = JSON.parse(response);

            let dataContainer = document.getElementById('datacontainer');

            let cards = '';

            for (let i = 0; i < parsed_response.length; i++) {
                cards += `
                <div class="card">
                    <img src="${parsed_response[i].image}" alt="${parsed_response[i].title}">
                    <h3>${parsed_response[i].title}</h3>
                    <p>${parsed_response[i].description.substring(0, 30)}...</p>
                    <div class="price">$${parsed_response[i].price}</div>
                    <button>Add to cart</button>
                </div>`;
            }

            dataContainer.innerHTML = cards;
        } else {
            alert("Failed to load response!");
        }
    }
};
