// Expliquemoos: Obtiene los datos del usuario almacenados en 'localStorage' con la clave 'login_success'
// Si no hay datos, devuelve 'false' y asigna a la variable 'user'
const user = JSON.parse(localStorage.getItem('login_success')) || false;

// Si no hay datos de usuario (es decir, si 'user' es 'false')
if(!user){
    // Redirige al usuario a la página 'login.html'
    window.location.href = 'login.html';
}

// Seleccionaa el elemento del DOM con el id 'logout' y lo almacena en la variable 'logout'
const logout = document.querySelector('#logout');

// Agregaaa un evento 'click' al botón de 'logout'
logout.addEventListener('click', () => {
    // Muestra una alerta con el mensaje de despedida
    alert('Gracias por acompañarnos, ¡HASTA PRONTO!');
    // Elimina el dato 'login_success' de 'localStorage'
    localStorage.removeItem('login_success');
    // Redirige al usuario a la página 'login.html'
    window.location.href = 'login.html';
});


// 1. Línea 1: `const user = JSON.parse(localStorage.getItem('login_success')) || false`
//     - Intenta obtener un ítem llamado 'login_success' del `localStorage`. Si existe, se convierte de cadena JSON a objeto JavaScript.
//     - Si no hay ítem (o si no puede ser convertido a objeto), `user` se establece en `false`.

// 2. Líneas 3-5: `if(!user) { window.location.href = 'login.html'; }`
//     - Comprueba si `user` es `false`.
//     - Si es así, redirige al usuario a la página 'login.html'.

// 3. Línea 7: `const logout = document.querySelector('#logout');`
//     - Selecciona el elemento HTML con el id `logout` y lo asigna a la variable `logout`.

// 4. Líneas 9-15: `logout.addEventListener('click', () => { ... });`
//     - Añade un event listener al elemento `logout` para que escuche los eventos 'click'.
//     - Dentro del callback:
//       - Línea 11: `alert('Gracias por acompañarnos, ¡HASTA PRONTO!');`
//         - Muestra una alerta con el mensaje de despedida.
//       - Línea 13: `localStorage.removeItem('login_success');`
//         - Elimina el ítem `login_success` del `localStorage`.
