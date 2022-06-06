let index = 0;
function message() {
	const messageTextarea = document.getElementById("message-textarea");
	document.getElementById("message-button").onclick = _ => {
		if (!messageTextarea.value.length) {
			alert("请输入内容！");
			return;
		}
		index++;
		const article = document.createElement("article");
		const messageForm = document.getElementById("message-form");
		messageForm.after(article);
		article.className = "box";
		article.id = "message-" + index;
		const h2 = document.createElement("h2");
		article.appendChild(h2);
		h2.innerText = "留言#" + index;
		const h3 = document.createElement("h3");
		article.appendChild(h3);
		const time = document.createElement("time");
		h3.appendChild(time);
		const date = new Date();
		time.dateTime = date.toISOString();
		time.innerText = date.toLocaleString();
		const p = document.createElement("p");
		article.appendChild(p);
		p.innerText = messageTextarea.value;
		messageTextarea.value = "";
		const messageDelete = document.createElement("button");
		article.appendChild(messageDelete);
		messageDelete.id = "message-delete-" + index;
		messageDelete.innerText = "删除";
		messageDelete.onclick = _ => {
			document.getElementById("message").removeChild(article);
		}
	}
}