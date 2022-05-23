function clock() {
	var now = new Date();
	var strTime=now.toLocaleString();
	document.getElementById("clock").innerHTML = strTime;
	setTimeout(clock, 500);
}