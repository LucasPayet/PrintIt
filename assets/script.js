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
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
];

let numSlide = slides.length;
// console.log(numSlide);

const bImage = document.querySelector('.banner-img'); //get banner <img>

const p = document.querySelector('#banner p'); //get banner <p>

let currentPosition = 0; //set default value of the slider

const nextBtn = document.querySelector('.arrow_right'); //get next arrow btn
const prevBtn = document.querySelector('.arrow_left'); //get previous arrow btn

const dotDiv = document.querySelector('.dots'); // get dots div

function classDot(index){ //selected dot
	const targetedDot = document.querySelectorAll('.dot');
	console.log(targetedDot)

	targetedDot.forEach((d, di) => {
		targetedDot[di].classList.remove('dot_selected');
		if (currentPosition === index ) {
			targetedDot[index].classList.add('dot_selected');
		}
	});
}

nextBtn.addEventListener("click", () => { //next slide
	currentPosition++;
	if (currentPosition > numSlide - 1) {
		currentPosition = 0;
	}
	let currentSlide = slides[currentPosition];
	let currentImage = currentSlide.image;
	let currentTagline = currentSlide.tagLine;

	console.log(currentSlide, currentPosition);

	bImage.src = './assets/images/slideshow/' + currentImage;

	p.innerHTML = currentTagline;

	classDot(currentPosition)
});

prevBtn.addEventListener("click", () => { //previous slide
	currentPosition--;
	if (currentPosition < 0) {
		currentPosition = numSlide - 1
	}
	let currentSlide = slides[currentPosition];
	let currentImage = currentSlide.image;
	let currentTagline = currentSlide.tagLine;

	console.log(currentSlide, currentPosition);

	bImage.src = './assets/images/slideshow/' + currentImage;

	p.innerHTML = currentTagline;

	classDot(currentPosition)
});

slides.forEach((slide, index) => { //add dot
	const dot = document.createElement('span');
	dot.className = 'dot';
	dotDiv.appendChild(dot);
	
	// change slide
	dot.addEventListener('click', () => {
	
	console.log(index);
	
	currentPosition = index
	let currentSlide = slides[currentPosition];
	let currentImage = currentSlide.image;
	let currentTagline = currentSlide.tagLine;
	bImage.src = './assets/images/slideshow/' + currentImage;
	p.innerHTML = currentTagline;
	// change slide
	
	classDot(index)
	});
});

classDot(currentPosition)


