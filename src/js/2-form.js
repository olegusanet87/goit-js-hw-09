

const STORAGE_KEY = "feedback-form-state";

const feedbackForm = document.querySelector(".feedback-form");
// const textarea = form.querySelector("textarea");

function readFormData(feedbackForm) {
	const message = feedbackForm.message.value.trim();
	const email = feedbackForm.email.value.trim();
	return {
		message,
		email
	}
}

feedbackForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const data = readFormData(feedbackForm);
	const { email, message } = data;

	// localStorage.clear()
	if (email === "" || message === "") {
		alert("All form fields must be filled in");
		return;
	}

	const feedbackData = {
		email: email,
		message: message,

	}
	localStorage.removeItem(STORAGE_KEY);
	console.log(feedbackData);
	feedbackForm.reset();
})


feedbackForm.addEventListener('input', (event) => {
	
	const data = readFormData(event.currentTarget);
	const jsonData = JSON.stringify(data);
	localStorage.setItem(STORAGE_KEY, jsonData);
});




const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData) {
	const data = JSON.parse(rawData);
	feedbackForm.email.value = data.email;
	feedbackForm.message.value = data.message;
}


const emailInput = document.querySelector('input[name="email"]');
const textareaInput = document.querySelector('textarea[name="message"]');
const btnSubmit = document.querySelector('button');
const labels = document.querySelectorAll('label');




emailInput.classList.add('email');
textareaInput.classList.add('message');
btnSubmit.classList.add('form-submit');
labels.forEach(label => {

	label.classList.add('label');
});

btnSubmit.addEventListener('mouseover', function () {
	btnSubmit.classList.add('hover-effect');
});

btnSubmit.addEventListener('mouseout', function () {
	btnSubmit.classList.remove('hover-effect');
});

emailInput.addEventListener('mouseover', function () {
	emailInput.classList.add('hover-effect');
});

emailInput.addEventListener('mouseout', function () {
	emailInput.classList.remove('hover-effect');
});

textareaInput.addEventListener('mouseover', function () {
	textareaInput.classList.add('hover-effect');
});

textareaInput.addEventListener('mouseout', function () {
	textareaInput.classList.remove('hover-effect');
});

emailInput.addEventListener('focus', function () {
	this.setAttribute('placeholder', 'Enter your email');
});

emailInput.addEventListener('blur', function () {
	this.removeAttribute('placeholder');
});

textareaInput.addEventListener('focus', function () {
	this.setAttribute('placeholder', 'Enter your message');
});

textareaInput.addEventListener('blur', function () {
	this.removeAttribute('placeholder');
});

