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

// Show error message and styling for a field
function showFieldError(input, errorElement, message) {
  input.classList.add("error");
  input.classList.remove("valid");
  errorElement.textContent = message;
}

// Clear error message and styling for a field
function clearFieldError(input, errorElement) {
  input.classList.remove("error");
  input.classList.add("valid");
  errorElement.textContent = "";
}

// Validate full name field
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

// Validate email field
function validateEmail() {
   const emailValue = email.value.trim();
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression pattern to match email addresses
   
   if (emailValue === "") {
      showFieldError(email, emailError, "Email is required.");
      return false;
   }

   if (!email.validity.valid || !emailPattern.test(emailValue)) {
      showFieldError(email, emailError, "Please enter a valid email address.");
      return false;
   }
   clearFieldError(email, emailError);
   return true;
}
email.addEventListener("blur", validateEmail);

// Validate topic field
function validateTopic() {
   if (topic.value === "") {
      showFieldError(topic, topicError, "Please select a topic.");
      return false;
   }
   clearFieldError(topic, topicError);
   return true;
}
topic.addEventListener("change", validateTopic);