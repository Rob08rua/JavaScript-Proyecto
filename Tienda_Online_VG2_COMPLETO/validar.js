document.getElementById('registro-form').addEventListener('submit', function(event) {
    // Evitar que el formulario se envíe si hay errores
    event.preventDefault();
    
    let isValid = true;
    
    // Validación de campos vacíos
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let telefono = document.getElementById('telefono').value;
    let direccion = document.getElementById('direccion').value;
    
    if (nombre.trim() === "") {
        alert("El campo 'Nombre' no puede estar vacío.");
        isValid = false;
    }
    
    if (email.trim() === "") {
        alert("El campo 'Correo' no puede estar vacío.");
        isValid = false;
    } else if (!validateEmail(email)) {
        alert("Por favor, ingresa un correo válido.");
        isValid = false;
    }

    if (password.trim() === "") {
        alert("El campo 'Contraseña' no puede estar vacío.");
        isValid = false;
    } else if (password.length < 6) {
        alert("La contraseña debe tener al menos 6 caracteres.");
        isValid = false;
    }

    if (telefono.trim() === "") {
        alert("El campo 'Teléfono' no puede estar vacío.");
        isValid = false;
    } else if (!validatePhoneNumber(telefono)) {
        alert("Por favor, ingresa un teléfono válido.");
        isValid = false;
    }

    if (direccion.trim() === "") {
        alert("El campo 'Dirección' no puede estar vacío.");
        isValid = false;
    }

    if (isValid) {
        // Si todo es válido, se puede enviar el formulario
        this.submit();
    }
});

// Validación de correo electrónico
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

// Validación de número de teléfono
function validatePhoneNumber(phone) {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
}
