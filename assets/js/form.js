//DEPENDENCIES
const submitButton = document.getElementById("formButton");

//FUNCTIONS
function submitForm(event) {
	event.preventDefault();

	const formUserName = document.getElementById("userName").value;

	const formTitle = document.getElementById("title").value;

	const formContent = document.getElementById("content").value;

	if (formUserName === "") {
		alert("Username cannot be blank.");
	} else if (formTitle === "") {
		alert("Title cannot be blank.");
	} else if (formContent === "") {
		alert("Content cannot be blank.");
	} else {
		const formData = {
			username: formUserName,
			title: formTitle,
			content: formContent,
		};

		const oldData = JSON.parse(localStorage.getItem("postData")) || [];

		oldData.push(formData);

		localStorage.setItem("postData", JSON.stringify(oldData));

		window.location.href = "blog.html";
	}
}

//USER INTERACTIONS
submitButton.addEventListener("click", submitForm);
