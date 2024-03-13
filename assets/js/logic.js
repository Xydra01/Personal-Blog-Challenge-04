function toggleDarkMode() {
	const body = document.body;
	const lightButton = document.getElementById("lightButton");
	body.classList.toggle("darkmode");

	if (body.classList.contains("darkmode")) {
		document.documentElement.style.setProperty(
			"--borderBlack",
			"2px solid white"
		);
		document.documentElement.style.setProperty(
			"--borderWhite",
			"2px solid black"
		);
		document.documentElement.style.setProperty("--black", "white");
		document.documentElement.style.setProperty("--white", "black");
		document.documentElement.style.setProperty(
			"--gradient",
			"var(--gradientDark)"
		);
		lightButton.textContent = "🌙";
	} else {
		document.documentElement.style.setProperty(
			"--borderBlack",
			"2px solid black"
		);
		document.documentElement.style.setProperty(
			"--borderWhite",
			"2px solid white"
		);
		document.documentElement.style.setProperty("--black", "black");
		document.documentElement.style.setProperty("--white", "white");
		document.documentElement.style.setProperty(
			"--gradient",
			"var(--gradientLight)"
		);
		lightButton.textContent = "☀️";
	}
}

document
	.getElementById("lightButton")
	.addEventListener("click", toggleDarkMode);
