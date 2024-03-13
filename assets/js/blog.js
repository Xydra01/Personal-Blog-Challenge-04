//DEPENDENCIES

const backButton = document.getElementById("backButton");

const cardSection = document.getElementById("cardSection");

const cardData = JSON.parse(localStorage.getItem("postData")) || [];

console.log(cardData[0].username);

//FUNCTIONS
function goBack() {
	window.location.href = "index.html";
}

createPosts();

function createPosts() {
	for (let i = 0; i < cardData.length; i++) {
		const newPost = document.createElement("div");
		const postTitle = cardData[i].title;
		const postContent = cardData[i].content;
		const postUsername = cardData[i].username;
		const title = document.createElement("p");
		title.className = "cardTitle";
		title.textContent = postTitle;
		newPost.appendChild(title);
		const content = document.createElement("p");
		content.className = "cardContent";
		content.textContent = postContent;
		newPost.appendChild(content);
		const username = document.createElement("p");
		username.className = "cardUsername";
		username.textContent = "Posted by:" + postUsername;
		newPost.appendChild(username);
		newPost.className = "card";
		cardSection.appendChild(newPost);
	}
}

// //USER INTERACTION
backButton.addEventListener("click", goBack);
