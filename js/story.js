const cookie = document.querySelector(".cookie");
const botones = document.querySelectorAll(".botones img");
const navegacion = document.querySelector("nav");
const menu = document.querySelectorAll(".abrir, .cerrar");
const botonesNav = document.querySelectorAll(".botones");

//Menu desplegable
menu.forEach( boton => {
	boton.addEventListener("click", () => {
		navegacion.classList.toggle("desplegado");
        if (navegacion.classList.contains("desplegado")) {
            botonesNav.forEach(boton => {
                boton.style.zIndex = '-1'; // Menú desplegado
            });
        } else {
            botonesNav.forEach(boton => {
                boton.style.zIndex = '1'; // Menú cerrado
            });
        }
    });
});

//Botones characters.html
botones.forEach(boton => {
    boton.addEventListener("mouseover", () => {
        // Agregar estilos al pasar el ratón
        if (!boton.classList.contains('selected')) {
            aplicarEstilos(boton);
        }
    });

    boton.addEventListener("mouseout", () => {
        // Restablecer estilos al quitar el ratón
        if (!boton.classList.contains('selected')) {
            restablecerEstilos(boton);
        }
    });

    boton.addEventListener("click", () => {
        // Alternar la clase 'selected' al hacer clic en el botón
        botones.forEach(otroBoton => {
            if (otroBoton !== boton) {
                otroBoton.classList.remove('selected');
                restablecerEstilos(otroBoton);
            }
        });

        boton.classList.toggle('selected');
        if (boton.classList.contains('selected')) {
            // Aplicar estilos cuando el botón está seleccionado
            aplicarEstilos(boton);
        } else {
            // Restablecer estilos cuando el botón no está seleccionado
            restablecerEstilos(boton);
        }
    });

});

function aplicarEstilos(elemento) {
    elemento.style.opacity = "1";
    elemento.style.filter = "drop-shadow(4px 8px 12px rgba(238, 102, 136, 1))";
}

function restablecerEstilos(elemento) {
    elemento.style.opacity = "0.5";
    elemento.style.filter = "none";
}

function scrollToSection(sectionClass) {
    const section = document.querySelector('.' + sectionClass);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Boton de story.html
cookie.addEventListener("mouseover", () => {
    cookie.style.animation = "shake 0.5s ease-in-out infinite";
	cookie.style.filter = "drop-shadow(7px 10px 20px rgba(238, 102, 136, 1))";
});

cookie.addEventListener("mouseout", () => {
    cookie.style.animation = "float 2s ease-in-out infinite"; 
	cookie.style.filter = "none"; 
});

//Creacion confeti :D
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