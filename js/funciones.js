//Galeria
const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const navegacionImg = document.querySelectorAll(".modal button");
const navegacion = document.querySelector("nav");
const botones = document.querySelectorAll(".abrir, .cerrar");
let imgActual = 0;

//Menu desplegable
botones.forEach( boton => {
	boton.addEventListener("click", () => {
		navegacion.classList.toggle("desplegado");
	});
});


enlaces.forEach(img => {
	img.addEventListener("mouseover", () => {
		img.style.filter = "drop-shadow(7px 10px 20px rgba(238, 102, 136, 1))";
		img.style.transition = "0.5s";
	});

	img.addEventListener("mouseout", () => {
		img.style.filter = "none"; 
	});
});


enlaces.forEach((enlace, indice) => {
	enlace.addEventListener("click", evento => {
		evento.preventDefault();
		//Guardamos la imagen donde estamos en una variable
		imgActual = indice;
		modal.classList.add("visible");
		//Lee lo que tiene escrito href en enlace y ponselo a la img modal
		imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"));
	});
});

modal.addEventListener("click", () => {
	modal.classList.remove("visible");
})

navegacionImg.forEach((flecha, i) => {
	flecha.addEventListener("click", evento => {
		evento.stopPropagation();
		//modificar el valor de imgActual
		if(i == 0){
			//anterior
			imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;
		}else{
			//suma
			imgActual = imgActual < enlaces.length - 1  ? imgActual + 1 : 0;
		}
		imgModal.setAttribute("src", enlaces[imgActual].getAttribute("href"));
	});
});

