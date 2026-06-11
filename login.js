// // capturar el evento click
// let boton = document.getElementById("btnIngresar");

// boton.addEventListener("click", function(){
//     // console.log("se hizo click en el boton");});
//     let usuario = document.getElementById("usuario ").value;
//     let clave = document.getElementById("clave").value;

//     console.log("usuario ingresado: "+usuario);
//     console.log("clave ingresada: "+clave);});



// validacion optimizada
let boton = document.getElementById("btnIngresar");
boton.addEventListener("click", function(){
    let usuario = document.getElementById("usuario").value;
    let clave = document.getElementById("clave").value;
    let mensaje = document.getElementById("mensaje");

    let usuarioValido = "admin";
    let claveValida = "12345";

    if(usuario === "" || clave === ""){
        mensaje.textContent = "Por favor, complete todos los campos";
        mensaje.style.color = "orange";
    } else if(usuario === usuarioValido && clave === claveValida){
        mensaje.style.color = "green";
        mensaje.textContent = "acceso permitido. se te rediccionara en 3 segundos, "+usuario+"!";

        setTimeout(function(){
            window.location.href = "index.html";
        }, 3000);
    } else {
        mensaje.textContent = "Usuario o clave incorrectos";
        mensaje.style.color = "red";
    }
});