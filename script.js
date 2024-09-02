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

                    userList.appendChild(tr);
                });
            })
            .catch(error => console.error('Error fetching user data:', error));
    