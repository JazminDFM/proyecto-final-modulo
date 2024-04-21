const cookie = document.querySelector(".cookie")

function activarShake(){
	cookie.style.animation = "shake 0.5s ease-in-out infinite";
	cookie.style.filter = "drop-shadow(7px 10px 20px rgba(238, 102, 136, 1))";
}

function desactivarShake(){
	cookie.style.animation = "float 2s ease-in-out infinite"; 
	cookie.style.filter = "none"; 
}

cookie.addEventListener("mouseover", activarShake);
cookie.addEventListener("mouseout", desactivarShake);


let creandoConfeti = false;

cookie.addEventListener("click", () => {
    if (!creandoConfeti) {
        creandoConfeti = true;
        cookie.disabled = true; // Desactivar el botón temporalmente
        
        for(let i = 0; i < 100; i++) {
            crearConfeti();
        }
        
        setTimeout(() => {
            creandoConfeti = false;
            cookie.disabled = false; // Activar el botón después de un tiempo de espera
            
            // Ocultar las imágenes del confeti
            const confetiElements = document.querySelectorAll(".confeti");
            confetiElements.forEach(element => {
                element.classList.add("hide-confeti");
            });
        }, 3000); // Esperar el tiempo de duración de la animación del confeti
    }
});

function crearConfeti() {
    const confeti = document.createElement("img");
    confeti.src = "../img/cookie.png"; // Imagen de confeti
    confeti.classList.add("confeti");
    
    // Posición aleatoria en la pantalla
    confeti.style.left = Math.random() * window.innerWidth + 'px';
    confeti.style.top = Math.random() * window.innerHeight + 'px';
    
    // Añadir el confeti al cuerpo del documento
    document.body.appendChild(confeti);
    
    // Eliminar el confeti después de que termine la animación
    confeti.addEventListener('animationend', function() {
        confeti.remove();
    });
}