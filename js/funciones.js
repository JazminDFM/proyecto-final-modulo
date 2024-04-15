//Cada vez que se recargue aparezca una gema aleatoria
document.addEventListener("DOMContentLoaded", () => {
    const imagenesGemas = document.querySelectorAll("img");
    const arrayGemas = Array.from(imagenesGemas);

    if (arrayGemas.length > 0) { // Verificar si hay imágenes disponibles
        const randomIndex = Math.floor(Math.random() * arrayGemas.length);
        const randomGem = arrayGemas.splice(randomIndex, 1)[0]; // Elimina y obtiene la imagen aleatoria

        randomGem.classList.add("gem"); // Agregar la clase gem a la imagen aleatoria

        arrayGemas.forEach((img) => {
            img.classList.remove("gem"); // Quitar la clase gem de las otras imágenes
        });
    }
});
//Galeria
const enlaces = document.querySelectorAll(".galeria a");
const modal = document.querySelector(".modal");
const imgModal = document.querySelector(".modal img");
const navegacionImg = document.querySelectorAll(".modal button");
let imgActual = 0;

//Enlace viene a ser como la i en un for
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