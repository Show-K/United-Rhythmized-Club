/**
 * Insert line break opportunities into a URL
 */
function formatUrl() {
	var url = document.getElementById("url").value;

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

	var result = document.getElementById("url-result");
	result.value = formatted;
	return formatted;
}

/**
 * Copy to clipboard
 */
function copyToClipboard() {
	var result = document.getElementById("url-result");
	if (result.value.length) {
		if (navigator.clipboard.writeText(result.value)) {
			alert("已复制到剪贴板：" + result.value);
		} else {
			alert("请手动复制！");
		}
	}
	else {
		alert("文本框无内容！");
	}
}