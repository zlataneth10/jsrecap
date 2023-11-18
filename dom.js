//DOM SELECTORS
//querySelector()

const title = document.querySelector('.title');

//callback - functions that are passed as an argument
//inside another function
const button = document.querySelector('#button')

button.addEventListener('click', function () {
    console.log(title.classList.contains('blue-bg')); //true
    console.log(title.classList.contains('dark-bg')); //false
    
    //if (title.classList.contains('dark-bg')) {
    //    title.classList.add('blue-bg')
    //    title.classList.remove('dark-bg')
    //} else {
    //    title.classList.remove('blue-bg');
    //    title.classList.add('dark-bg')
    //}

    //if (title.classList.contains('blue-bg')) {
    //    title.classList.replace('blue-bg', 'dark-bg');
    //} else {
    //    title.classList.replace('dark-bg', 'blue-bg');
    //}

    title.classList.toggle('blue-bg');
    title.classList.toggle('dark-bg');
});

const users = document.querySelector('.users');
//display.textContent = 'text';
//display.innerHTML = '<h1>All Displays<h1>'

const users_array = [
    {
        username: 'kenny',
        email: 'kenny@gmail.com',
        password: 'kenny'
    },
    {
        username: 'tunde',
        email: 'tunde@gmail.com',
        password: 'tunde'
    },
    {
        username: 'coker',
        email: 'coker@gmail.com',
        password: 'coker'
    }
]

//users.innerHTML = `<div><h2>${users_array[0].username}</h2><h2>${users_array[0].email}</h2><h2>${users_array[0].password}</h2></div>`;

users_array.forEach(function (user) {
    users.innerHTML += `<div>
                    <h2>${user.username}</h2>
                    <h2>${user.email}</h2>
                    <h2>${user.password}</h2>
                </div>`;
});