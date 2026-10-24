// feedback form elements
const feedbackForm = document.getElementById("feedback-form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const comments = document.getElementById("comments");
const website = document.getElementById("website"); // website is optional

const fullNameError = document.getElementById("full-name-error");
const emailError = document.getElementById("email-error");
const topicError = document.getElementById("topic-error");
const commentsError = document.getElementById("comments-error");
const websiteError = document.getElementById("website-error");

const commentsCounter = document.getElementById("comments-counter");
const clearButton = document.getElementById("clear-button");
const formStatus = document.getElementById("form-status");

function showFieldError(input, errorElement, message) {
  input.classList.add("error");
  input.classList.remove("valid");
  errorElement.textContent = message;
}

function clearFieldError(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("valid");
  errorElement.textContent = "";
}

function validateFullName() {
  const name = fullName.value.trim(); // Trim whitespace from the input value
  const namePattern = /^[\p{L}\s'-]+$/u; // Regular expression pattern to match names

  if (name.length < 2) {
    showFieldError(
      fullName,
      fullNameError,
      "Full name must contain at least 2 characters.",
    );
      return false;
  }

  if (!namePattern.test(name)) {
    showFieldError(
      fullName,
      fullNameError,
      "Full name can only contain letters, spaces, apostrophes, and hyphens.",
    );
      return false;
  }

  clearFieldError(fullName, fullNameError);
  return true;
}

fullName.addEventListener("blur", validateFullName);
