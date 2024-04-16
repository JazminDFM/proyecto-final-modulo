document.addEventListener("DOMContentLoaded", () => {
    const imagenesGemas = document.querySelectorAll("img");
    const arrayGemas = Array.from(imagenesGemas);

    if (arrayGemas.length > 0) {
        const randomIndex = Math.floor(Math.random() * arrayGemas.length);
        const randomGem = arrayGemas.splice(randomIndex, 1)[0];

        randomGem.classList.add("gem");

        arrayGemas.forEach((img) => {
            img.classList.remove("gem");
        });
    }

    setTimeout(() => {
        document.body.classList.add("page-loaded");
        setTimeout(() => {
            window.location.href = "landing.html";
        }, 2000);
    }, 2000);
});