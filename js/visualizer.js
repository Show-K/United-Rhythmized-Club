// Global variables
/**
 * @type {number}
 */
let requestID;
/**
 * @type {AudioContext}
 */
let audioCtx;
const ANALYZER_NODES = new Map();

/**
 * Initialize a visualizer.
 * @param {string} id 
 */
function visualizer(id) {
	if (typeof requestID !== "undefined") cancelAnimationFrame(requestID);
	if (typeof audioCtx === "undefined") {
		audioCtx = new AudioContext();
	}
	else {
		audioCtx.close();
		audioCtx = new AudioContext();
	}
	const audio = document.getElementById(id);
	/**
	 * @type {AnalyserNode}
	 */
	let analyzer;
	if (ANALYZER_NODES.has(audio)) {
		analyzer = ANALYZER_NODES.get(audio);
	}
	else {
		const mediaElementSource = audioCtx.createMediaElementSource(audio);
		analyzer = audioCtx.createAnalyser();
		ANALYZER_NODES.set(audio, analyzer);
		mediaElementSource.connect(analyzer);
		mediaElementSource.connect(audioCtx.destination);
	}
	const byteFrequencyData = new Uint8Array(analyzer.frequencyBinCount);
	const visualizer = document.getElementById("visualizer-" + id);
	visualizer.innerHTML = "";
	for (let i = 0; i < 32; i++) {
		const visualizerBar = document.createElement("div");
		visualizerBar.className = "visualizer-bar";
		visualizerBar.id = "visualizer-bar-" + id + "-" + i;
		visualizer.appendChild(visualizerBar);
	}
	function animationFrame() {
		analyzer.getByteFrequencyData(byteFrequencyData);
		for (let i = 0; i < 32; i++) {
			const bar = document.getElementById("visualizer-bar-" + id + "-" + i);
			const frequency = byteFrequencyData[i * byteFrequencyData.length / 32] || 0;
			bar.style.backgroundColor = "hsl(" + frequency + ", 100%, 50%)";
			bar.style.height = Math.min(100, (frequency * 100 / 360)) + "%";
		}
		requestID = requestAnimationFrame(animationFrame);
	}
	animationFrame();
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
function visualizerTool() {
	document.getElementById("file").addEventListener("change", function (event) {
		const file = event.target.files[0];
		const url = URL.createObjectURL(file);
		const audio = document.getElementById("audio");
		audio.src = url;
		visualizer("audio");
	}, false);
}