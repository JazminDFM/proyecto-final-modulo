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