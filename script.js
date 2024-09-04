const url = "https://fakestoreapi.com/users";

fetch(url)
    .then(response => response.json())
    .then(data => {
        const userList = document.getElementById('userList');

        data.forEach(user => {
            const tr = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.classList.add('Id');
            idCell.innerHTML = user.id;
            tr.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.innerHTML = `
                                          <strong>${user.name.firstname} ${user.name.lastname}</strong><br>
                                          <small>${user.username}</small>`;
            tr.appendChild(nameCell);

            const addressCell = document.createElement('td');
            addressCell.classList.add('address');
            addressCell.innerHTML = user.address.city;
            tr.appendChild(addressCell);

            const streetCell = document.createElement('td');
            streetCell.classList.add('street');
            streetCell.innerHTML = user.address.street;
            tr.appendChild(streetCell);

            const emailCell = document.createElement('td');
            emailCell.textContent = user.email;
            tr.appendChild(emailCell);

            const phoneCell = document.createElement('td');
            phoneCell.classList.add('phone');
            phoneCell.innerHTML = user.phone;
            tr.appendChild(phoneCell);

            const showCell = document.createElement('td');
            showCell.classList.add('show');


            const viewButton = document.createElement('button');
            viewButton.textContent = "View";
            viewButton.classList.add('view-btn');
            viewButton.addEventListener('click', () => {
                window.location.href = `user.html?id=${user.id}`;
            
             });
            showCell.appendChild(viewButton);
            tr.appendChild(showCell)

            userList.appendChild(tr);
        });
    })

    
    .catch(error => console.error('Error fetching user data:', error));

    {
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }
        
        const userId = getQueryParam('id');
        
        if (userId) {
            const userUrl = `https://fakestoreapi.com/users/${userId}`;
        
            fetch(userUrl)
                .then(response => response.json())
                .then(user => {
                    const userDetailsDiv = document.getElementById('userDetails');
        
                    userDetailsDiv.innerHTML = `
                        <p><strong>Name:</strong> ${user.name.firstname} ${user.name.lastname}</p>
                        <p><strong>Username:</strong> ${user.username}</p>
                        <p><strong>Email:</strong> ${user.email}</p>
                        <p><strong>Phone:</strong> ${user.phone}</p>
                        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                    `;
                })
                .catch(error => console.error('Error fetching user details:', error));
        } else {
            console.error('User ID not provided in the URL');
        }
        }
