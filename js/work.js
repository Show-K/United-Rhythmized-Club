function formatUrl(url) {
	// Split the URL into an array to distinguish double slashes from single slashes
	var doubleSlash = url.split("//");

	// Format the strings on either side of double slashes separately
	var formatted = doubleSlash.map(str =>
		// Insert a word break opportunity after a colon
		str.replace(/(?<after>:)/giu, "$1<wbr>")
			// Before a single slash, tilde, period, comma, hyphen, underline, question mark, number sign, or percent symbol
			.replace(/(?<before>[/~.,\-_?#%])/giu, "<wbr>$1")
			// Before and after an equals sign or ampersand
			.replace(/(?<beforeAndAfter>[=&])/giu, "<wbr>$1<wbr>")
		// Reconnect the strings with word break opportunities after double slashes
	).join("//<wbr>");

	return formatted;
}

function superSmashTabletop() {
	var content = document.getElementById("content");
	content.innerHTML = "";

	var h2 = document.createElement("h2");
	h2.innerHTML = "大乱桌斗";

	content.appendChild(h2);

	var p = document.createElement("p");

	var a = document.createElement("a");
	a.href = "https://super-smash-tabletop.show-k.win";
	a.target = "_blank";
	a.innerHTML = formatUrl("https://super-smash-tabletop.show-k.win");

	p.appendChild(a);

	content.appendChild(p);

	var ul = document.createElement("ul");

	var li = document.createElement("li");
	li.innerHTML = "《大乱桌斗》（原《大乱斗杀》）是基于《无名杀》的《任天堂明星大乱斗》同人游戏，不隶属于<i>任天堂</i>、<i>Sora</i>和其他相关公司。";

	ul.appendChild(li);

	var li2 = document.createElement("li");
	li2.innerHTML = "GitHub仓库：";

	ul.appendChild(li2);

	var ul2 = document.createElement("ul");

	var li3 = document.createElement("li");

	var a2 = document.createElement("a");
	a2.href = "https://github.com/Show-K/noname";
	a2.target = "_blank";
	a2.innerHTML = formatUrl("https://github.com/Show-K/noname");

	li3.appendChild(a2);

	ul2.appendChild(li3);

	ul.appendChild(ul2);

	content.appendChild(ul);
}

function stepForward() {
	var content = document.getElementById("content");
	content.innerHTML = "";

	var h2 = document.createElement("h2");
	h2.innerHTML = "Step Forward";

	content.appendChild(h2);

	var img = document.createElement("img");
	img.src = "../img/Step Forward.png";
	img.alt = "Step Forward";

	content.appendChild(img);

	var audio = document.createElement("audio");
	audio.controls = true;

	var source = document.createElement("source");
	source.src = "../music/Step Forward.ogg";
	source.type = "audio/ogg";
	source.innerHTML = "您的浏览器不支持音频元素（还在用IE？！还不快去换现代浏览器！！）";

	audio.appendChild(source);

	content.appendChild(audio);
}

function immersion() {
	var content = document.getElementById("content");
	content.innerHTML = "";

	var h2 = document.createElement("h2");
	h2.innerHTML = "Immersion";

	content.appendChild(h2);

	var audio = document.createElement("audio");
	audio.controls = true;

	var source = document.createElement("source");
	source.src = "../music/Immersion.ogg";
	source.type = "audio/ogg";
	source.innerHTML = "您的浏览器不支持音频元素（还在用IE？！还不快去换现代浏览器！！）";

	audio.appendChild(source);

	content.appendChild(audio);
}

function intensity() {
	var content = document.getElementById("content");
	content.innerHTML = "";

	var h2 = document.createElement("h2");
	h2.innerHTML = "Intensity";

	content.appendChild(h2);

	var img = document.createElement("img");
	img.src = "../img/Intensity.png";
	img.alt = "Intensity";

	content.appendChild(img);

	var audio = document.createElement("audio");
	audio.controls = true;

	var source = document.createElement("source");
	source.src = "../music/Intensity.ogg";
	source.type = "audio/ogg";
	source.innerHTML = "您的浏览器不支持音频元素（还在用IE？！还不快去换现代浏览器！！）";

	audio.appendChild(source);

	content.appendChild(audio);
}

function bilibili() {
	var content = document.getElementById("content");
	content.innerHTML = "";

	var h2 = document.createElement("h2");
	h2.innerHTML = "Bilibili主页";

	content.appendChild(h2);

	var p = document.createElement("p");

	var a = document.createElement("a");
	a.href = "https://space.bilibili.com/18277975";
	a.target = "_blank";
	a.innerHTML = formatUrl("https://space.bilibili.com/18277975");

	p.appendChild(a);

	content.appendChild(p);
	/*
	var iframe = document.createElement("iframe");
	iframe.src = "https://space.bilibili.com/18277975";

	content.appendChild(iframe);
	*/
}