const idInput = document.querySelector(".idinput");
const inputUserName = document.querySelector(".usname");
const inputUserAge = document.querySelector(".usage");

const getByIdBtn = document.querySelector(".getbyid");
const getAllUsersBtn = document.querySelector(".getall");
const addNewUserBtn = document.querySelector(".adduser");
const deleteBtn = document.querySelector(".del");
const updateUserBtn = document.querySelector(".upd");

const serverAnswer = document.querySelector(".servansw");

const clearButton = document.querySelector(".clear");

function usersData() {

    getAllUsersBtn.addEventListener("click", getAllUsers)

    function getAllUsers() {
        event.preventDefault();
        serverAnswer.innerHTML += '';
        fetch('https://test-users-api.herokuapp.com/users/', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");

            })
            .then(res => {
                for (i = 0; i < res.data.length; i++) {
                    serverAnswer.innerHTML += `USER's NUMBER : ${[i+1]}  <br>
                    USER's NAME : ${res.data[i].name}  <br>
                    USER's AGE: ${res.data[i].age}  <br>
                        USER's ID: ${res.data[i].id}  <br>
                        <hr>  `
                }
            })
    }

    getByIdBtn.addEventListener("click", getUserById);

    function getUserById() {
        event.preventDefault();
        fetch('https://test-users-api.herokuapp.com/users/' + idInput.value, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");

            })
            .then(res => {
                serverAnswer.innerHTML = `USER NAME : ${res.data.name}  <br>
                USER AGE: ${res.data.age}  <br>
                    USER ID: ${res.data.id}  <br> `
            })
    }


    addNewUserBtn.addEventListener("click", addUser)

    function addUser() {
        event.preventDefault();
        fetch('https://test-users-api.herokuapp.com/users', {
                method: 'POST',
                body: JSON.stringify({ name: inputUserName.value + "", age: inputUserAge.value + "" }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            }).then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");

            })
            .then(res => {
                serverAnswer.innerHTML = `USER NAME : ${res.data.name}  <br>
            USER AGE: ${res.data.age}  <br>
                 WAS CREATED !!! `
            }).catch(error => {
                serverAnswer.innerHTML = "ERROR: FILL THE NAME AND AGE FORM"
            })
    }

    deleteBtn.addEventListener("click", removeUser)

    function removeUser() {
        event.preventDefault();

        fetch('https://test-users-api.herokuapp.com/users/' + idInput.value, {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");

            })
            .then(res => {
                serverAnswer.innerHTML = `USER NAME : ${res.data.name}  <br>
                USER AGE: ${res.data.age}  <br>
                    USER ID: ${res.data.id}  <br>
                    WAS DELETED !!! `
            }).catch(error => {
                serverAnswer.innerHTML = "ERROR: FILL THE ID FORM"
            })
    }


    updateUserBtn.addEventListener("click", updateUser)

    function updateUser() {
        event.preventDefault();
        fetch('https://test-users-api.herokuapp.com/users/' + idInput.value, {
                method: 'PUT',
                body: JSON.stringify({ name: inputUserName.value + "", age: inputUserAge.value, }),
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(response => {
                if (response.ok) return response.json();
                throw new Error("Error fetching data");

            })
            .then(res => {
                serverAnswer.innerHTML = `USER NAME : ${res.data.name}  <br>
            USER AGE: ${res.data.age}  <br>
                USER ID: ${res.data.id}  <br>
                WAS EDITED !!! `
            }).catch(error => {
                serverAnswer.innerHTML = "ERROR: FILL THE FORM"
            });
    }


    clearButton.addEventListener("click", () => { serverAnswer.innerHTML = '' })

}
usersData();