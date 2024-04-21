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
