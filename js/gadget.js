function clock() {
	const now = new Date();
	document.getElementById("clock").innerHTML = now.toLocaleString();
	requestAnimationFrame(clock);
}
/**
 * Show a modal
 * @param {string} id 
 */
function modal(id) {
	const img = document.getElementById(id);
	const modal = document.getElementById("modal-" + id);
	img.onclick = _ => {
		modal.style.display = "flex";
		modal.style.alignContent = "center";
		modal.style.alignItems = "center";
		modal.style.justifyContent = "center";
		modal.style.justifyItems = "center";
	}
	modal.onclick = _ => {
		modal.style.display = "none";
	}
}
function modalBmx() {
	modal("b-m-x");
}
function modalBowser() {
	modal("bowser");
}
function modalMnmYumikohimi() {
	modal("mnm-yumikohimi");
}
function modalMassy() {
	modal("massy");
}
function modalMiumiu() {
	modal("miumiu");
}
function modalWindier() {
	modal("windier");
}