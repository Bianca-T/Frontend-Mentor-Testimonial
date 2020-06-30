document.addEventListener("DOMContentLoaded", function () {
	let slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
	const nextButton = document.querySelector(".next-button");
	const prevButton = document.querySelector(".prev-button");

	function nextSlide() {
		//current slide becomes hidden
		slides[currentSlide].className = "slide";
		//set current slide as next one
		currentSlide = (currentSlide + 1) % slides.length;
		//add the class "showing" to the slide to make it visible
		slides[currentSlide].classNames = "showing";
	}
	function prevSlide() {
		//current slide becomes hidden
		slides[currentSlide].className = "slide";
		//set current slide as slide1
		currentSlide = [currentSlide - 1] % slides.length;
		if (currentSlide == -1) {
			currentSlide = slides.length - 1;
		}
		// add the class "showing" to make it visible
		slides[currentSlide].className = "showing";
	}

	nextButton.addEventListener("click", function () {
		nextSlide();
	});
	prevButton.addEventListener("click", function () {
		prevSlide();
	});
});
