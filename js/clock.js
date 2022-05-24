function clock() {
	const now = new Date();
	document.getElementById("clock").innerHTML = now.toLocaleString();
	requestAnimationFrame(clock);
}