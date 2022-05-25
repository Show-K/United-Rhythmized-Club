function visualizer(id) {
	const audio = document.getElementById(id);
	const audioContext = new AudioContext();
	const mediaElementSource = audioContext.createMediaElementSource(audio);
	const analyzer = audioContext.createAnalyser();
	mediaElementSource.connect(analyzer);
	mediaElementSource.connect(audioContext.destination);
	const byteFrequencyData = new Uint8Array(analyzer.frequencyBinCount);
	const visualizer = document.getElementById("visualizer-" + id);
	visualizer.innerHTML = "";
	for (let i = 0; i < 32; i++) {
		const visualizerBar = document.createElement("div");
		visualizerBar.className = "visualizer-bar";
		visualizerBar.id = "visualizer-bar-" + id + "-" + i;
		visualizer.appendChild(visualizerBar);
	}
	function update() {
		analyzer.getByteFrequencyData(byteFrequencyData);
		for (let i = 0; i < 32; i++) {
			const bar = document.getElementById("visualizer-bar-" + id + "-" + i);
			const frequency = byteFrequencyData[i * byteFrequencyData.length / 32] || 0;
			bar.style.backgroundColor = "hsl(" + frequency + ", 100%, 50%)";
			bar.style.height = Math.min(100, (frequency * 100 / 360)) + "%";
		}
		requestAnimationFrame(update);
	}
	update();
}
function visualizerStepForward() {
	visualizer("step-forward");
}
function visualizerImmersion() {
	visualizer("immersion");
}
function visualizerIntensity() {
	visualizer("intensity");
}
function visualizerDesperation() {
	visualizer("desperation");
}
function visualizerDetermination() {
	visualizer("determination");
}
function visualizerOptimism() {
	visualizer("optimism");
}