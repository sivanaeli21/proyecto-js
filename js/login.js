// Selecciona el formulario de inicio de sesión con el id 'loginForm'
const loginForm = document.querySelector('#loginForm');

// Agrega un event listener al formulario para el evento 'submit'
loginForm.addEventListener('submit', (e) => {
    // Previene el comportamiento por defecto del formulario (evita que se recargue la página)
    e.preventDefault();
    
    // Obtiene el valor del campo de correo electrónico con el id 'email'
    const email = document.querySelector('#email').value;
    // Obtiene el valor del campo de contraseña con el id 'password'
    const password = document.querySelector('#password').value;
    
    // Intenta obtener el array de usuarios almacenados en 'localStorage' con la clave 'users'
    // Si no existe, devuelve un array vacío
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Busca un usuario válido que tenga el mismo correo electrónico y contraseña que los proporcionados
    const validUser = Users.find(user => user.email === email && user.password === password);
    
    // Si no se encuentra un usuario válido
    if (!validUser) {
        // Muestra una alerta indicando que el usuario o la contraseña son incorrectos
        return alert('Usuario y/o contraseña incorrectos!');
    }
    
    // Muestra una alerta de bienvenida con el nombre del usuario válido
    alert(`HOLA, Explora con nosotros: ${validUser.name}`);
    
    // Almacena el usuario válido en 'localStorage' con la clave 'login_success'
    localStorage.setItem('login_success', JSON.stringify(validUser));
    
    // Redirige al usuario a la página 'index.html'
    window.location.href = 'index.html';
});
