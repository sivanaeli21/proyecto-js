// Selecciona el formulario de registro con el id 'signupForm'
const signupForm = document.querySelector('#signupForm');

// Agrega un event listener al formulario para el evento 'submit'
signupForm.addEventListener('submit', (e) => {
    // Previene el comportamiento por defecto del formulario (evita que se recargue la página al enviarse)
    e.preventDefault();
    
    // Obtiene el valor del campo de nombre con el id 'name'
    const name = document.querySelector('#name').value;
    // Obtiene el valor del campo de correo electrónico con el id 'email'
    const email = document.querySelector('#email').value;
    // Obtiene el valor del campo de contraseña con el id 'password'
    const password = document.querySelector('#password').value;

    // Intenta obtener el array de usuarios almacenados en 'localStorage' con la clave 'users'
    // Si no existe, devuelve un array vacío
    const Users = JSON.parse(localStorage.getItem('users')) || [];

    // Verifica si ya hay un usuario registrado con el mismo correo electrónico
    const isUserRegistered = Users.find(user => user.email === email);

    // Si ya hay un usuario registrado con el mismo correo electrónico
    if (isUserRegistered) {
        // Muestra una alerta indicando que el usuario ya está registrado y termina la función
        return alert('El usuario ya está registrado!');
    }

    // Si el usuario no está registrado, agrega un nuevo objeto usuario al array 'Users'
    Users.push({ name: name, email: email, password: password });

    // Almacena el array actualizado de usuarios en 'localStorage' con la clave 'users'
    localStorage.setItem('users', JSON.stringify(Users));

    // Muestra una alerta indicando que el registro fue exitoso
    alert('Registro Exitoso!');

    // Redirige al usuario a la página de inicio de sesión 'login.html'
    window.location.href = 'login.html';
});
