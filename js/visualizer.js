function visualizer(id) {
	const audio = document.getElementById(id);
	const audioContext = new AudioContext();
	const mediaElementSource = audioContext.createMediaElementSource(audio);
	const analyzer = audioContext.createAnalyser();
	mediaElementSource.connect(analyzer);
	mediaElementSource.connect(audioContext.destination);
	const frequencyData = new Uint8Array(analyzer.frequencyBinCount);
	analyzer.getByteFrequencyData(frequencyData);
	const visualizer = document.getElementById("visualizer-" + id);
	for (let i = 0; i < 32; i++) {
		const visualizerBar = document.createElement("div");
		visualizerBar.className = "visualizer-bar";
		visualizerBar.id = "visualizer-bar-" + id + "-" + i;
		visualizer.appendChild(visualizerBar);
	}
	function update() {
		analyzer.getByteFrequencyData(frequencyData);
		for (let i = 0; i < 32; i++) {
			const bar = document.getElementById("visualizer-bar-" + id + "-" + i);
			const frequency = frequencyData[i * frequencyData.length / 32];
			bar.style.backgroundColor = "hsl(" + frequency + ", 100%, 50%)";
			bar.style.height = (frequency * 100 / 360) + "%";
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