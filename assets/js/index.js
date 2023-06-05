// initialisation de la librairie locomotive.js
const scroll = new LocomotiveScroll({
	el: document.querySelector("[data-scroll-container]"),
	smooth: true,
	tablet: { smooth: true },
	smartphone: { smooth: true },
});
// --------------------------------

// la couleur du body
scroll.on("scroll", () => {
	if (document.querySelector("#color.is-inview")) {
		//si l'element #color (nom) est visible
		document.body.style.background = "#000101";
		document.body.style.color = "#fefeff";
	} 
  else {
		//si l'element #color (nom) est n'est pas visible
		document.body.style.background = "#fefeff";
		document.body.style.color = "#000101";
	}
});


