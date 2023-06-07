const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/*Change slides : images and text*/
let number = 0;
function changeSlide(direction) {
	number = number + direction;
	if (number > slides.length - 1) {
		number = 0;
	}
	if (number < 0) {
		number = slides.length - 1;
	}
	document.getElementById("slides").src = "./assets/images/slideshow/" + slides[number].image;
	document.getElementById("information").innerHTML = slides[number].tagLine;
	changeActiveDot()
}


/*Create slides dots according to slides's table*/
const dots = document.getElementsByClassName("dots")[0]
function createDots() {
	for (let i = 0; i < slides.length; i++){
		const dot = document.createElement("div");
		dot.classList.add("dot");
		dots.appendChild(dot);
	}
	dots.children[0].classList.add("dot_selected");
}
createDots()


/*Change active dot when we change the slide*/
function changeActiveDot() {
	for(let i = 0; i < dots.children.length; i++) {
		dots.children[i].classList.remove("dot_selected")
	}
	dots.children[number].classList.add("dot_selected")
}


/*Actions on click*/
let left_arrow = document.getElementById("left_arrow")
left_arrow.addEventListener("click", () => {
	console.log("previous slide")
	changeSlide(-1)
})


let right_arrow = document.getElementById("right_arrow")
right_arrow.addEventListener("click", () => {
	console.log("next slide")
	changeSlide(1)
})