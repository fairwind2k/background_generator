var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");

css.textContent = getComputedStyle(document.body).backgroundImage + ";";

function setGradient() {
	body.style.backgroundImage =
	 "linear-gradient(to right, "
	 + color1.value
	 + ", "
	 + color2.value
	 + ")" ;

	 css.textContent = body.style.backgroundImage + ";"
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomRgbColors() {
	let arr = [];
	for (let i = 0; i < 3; i++) {
		arr[i] = Math.floor(Math.random() * 255);
	};
	var str = "rgb(" + arr[0] + ", " + arr[1] + ", " + arr[2] + ")";
	return str;
}

button.addEventListener("click", function() {
	let first = randomRgbColors();
	let second = randomRgbColors();
	body.style.backgroundImage =
	 "linear-gradient(to right, "
	 + first
	 + ", "
	 + second
	 + ")" ;

	 css.textContent = body.style.backgroundImage + ";"
});
