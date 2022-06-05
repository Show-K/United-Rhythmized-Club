/**
 * Insert line break opportunities into a URL
 * @param {string} url
 * @returns {string}
 */
function formatUrl(url) {
	// Split the URL into an array to distinguish double slashes from single slashes
	const doubleSlash = url.split("//");
	// Format the strings on either side of double slashes separately
	const formatted = doubleSlash.map(str =>
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
function formatUrlFormat() {
	document.getElementById("format-url-result").value = formatUrl(document.getElementById("format-url-url").value);
}
/**
 * Copy to clipboard
 * @param {string} str
 */
function copyToClipboard(str) {
	if (str.length) {
		if (navigator.clipboard.writeText(str)) {
			alert("已复制到剪贴板：\n" + str);
		} else {
			alert("请手动复制！");
		}
	}
	else {
		alert("无内容！");
	}
}
function formatUrlCopy() {
	copyToClipboard(document.getElementById("format-url-result").value);
}
/**
 * Convert a UTF-8 string to a Base64 string
 * @param {string} str
 */
function utf8ToBase64(str) {
	return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (_match, p1) {
		return String.fromCharCode(parseInt(p1, 16));
	}));
}
/**
 * Convert a Base64 string to a UTF-8 string
 * @param {string} str
 */
function base64ToUtf8(str) {
	return decodeURIComponent(Array.prototype.map.call(atob(str), function (c) {
		return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
	}).join(""));
}
function base64Encode() {
	document.getElementById("base64-base64").value = utf8ToBase64(document.getElementById("base64-utf-8").value);
}
function base64Utf8Copy() {
	copyToClipboard(document.getElementById("base64-utf-8").value);
}
function base64Decode() {
	document.getElementById("base64-utf-8").value = base64ToUtf8(document.getElementById("base64-base64").value);
}
function base64Base64Copy() {
	copyToClipboard(document.getElementById("base64-base64").value);
}