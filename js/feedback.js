// feedback form elements
const feedbackForm = document.getElementById("feedback-form");
const fullName = document.getElementById("full-name");
const email = document.getElementById("email");
const topic = document.getElementById("topic");
const comments = document.getElementById("comments");
const website = document.getElementById("website"); // website is optional

// Error message elements for displaying validation errors
const fullNameError = document.getElementById("full-name-error");
const emailError = document.getElementById("email-error");
const topicError = document.getElementById("topic-error");
const commentsError = document.getElementById("comments-error");
const websiteError = document.getElementById("website-error");

// additional form controls and status elements
const commentsCounter = document.getElementById("comments-counter");
const clearButton = document.getElementById("clear-button");
const formStatus = document.getElementById("form-status");

// Show error message and styling for a field
function showFieldError(input, errorElement, message) {
  input.classList.add("error");
  input.classList.remove("valid");
  errorElement.textContent = message;
}

// remove error message and styling for a field
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

// Validate topic field
function validateTopic() {
  if (topic.value === "") {
    showFieldError(topic, topicError, "Please select a topic.");
    return false;
  }
  clearFieldError(topic, topicError);
  return true;
}

// Validate comments field
function validateComments() {
  const commentsValue = comments.value.trim();

  if (commentsValue.length < 15) {
    showFieldError(
      comments,
      commentsError,
      "Comments must contain at least 15 characters.",
    );
    return false;
  }
  clearFieldError(comments, commentsError);
  return true;
}

// Update comments character counter while user is typing
function updateCommentsCounter() {
  const length = comments.value.length;

  if (length < 15) {
    commentsCounter.textContent = `${length}/15 characters required`;
    commentsCounter.classList.add("error");
    commentsCounter.classList.remove("valid");
  } else {
    commentsCounter.textContent = `${length} characters - minimum reached`;
    commentsCounter.classList.remove("error");
    commentsCounter.classList.add("valid");
  }
}

// Validate optional website field
function validateWebsite() {
  const websiteValue = website.value.trim();

  // an empty website field is considered valid, becoz of optional
  if (websiteValue === "") {
   website.classList.remove("error", "valid");
   websiteError.textContent = "";
    return true;  
  }

  // use the browser's built-in validation for URLs
  if (!website.validity.valid) {
    showFieldError(
      website,
      websiteError,
      "Please enter a valid website URL.",
    );
    return false;
  }
  clearFieldError(website, websiteError);
  return true;
}

// Reset the form, validation states, error messages, and counter
function resetForm() {
   feedbackForm.reset();
   
   const fields = [fullName, email, topic, comments, website];
   fields.forEach((field) => {
     field.classList.remove("error", "valid");
   });

   const errorMessages = [
     fullNameError,
     emailError,
     topicError,
     commentsError,
     websiteError,
   ];

   errorMessages.forEach((errorMessage) => {
     errorMessage.textContent = "";
   });

   commentsCounter.textContent = "0/15 characters required";
   commentsCounter.classList.remove("error", "valid");
}

// validate all fields when the form is submitted
feedbackForm.addEventListener("submit", (event) => {
   // prevent the form from submitting and refreshing the page
  event.preventDefault();

  //run all validation functions
  const isFullNameValid = validateFullName();
  const isEmailValid = validateEmail();
  const isTopicValid = validateTopic();
  const isCommentsValid = validateComments();
  const isWebsiteValid = validateWebsite();

  // continue if all fields are valid
  if (
    isFullNameValid &&
    isEmailValid &&
    isTopicValid &&
    isCommentsValid &&
    isWebsiteValid
  ) {
   // save the name before resetting the form
    const submittedName = fullName.value.trim();

    // display a success message
    formStatus.textContent = `Thank you for your feedback, ${submittedName}!`;
    formStatus.classList.add("success");

    resetForm();

    // remove the success message after 4 seconds
    setTimeout(() => {
      formStatus.textContent = "";
      formStatus.classList.remove("success");
    }, 4000);
    }
});

// clear the form when the clear button is clicked
clearButton.addEventListener("click", () => {
  resetForm();
  formStatus.textContent = "";
  formStatus.classList.remove("success");
});

// ****** Event listener ******
// validate full name field after user leaves the field
fullName.addEventListener("blur", validateFullName);
// revalidate full name field while user is typing
fullName.addEventListener("input", () => {
  if (fullName.classList.contains("error")) {
    validateFullName();
  }
});
// validate email field after user leaves the field
email.addEventListener("blur", validateEmail);
// revalidate email field while user is typing
email.addEventListener("input", () => {
  if (email.classList.contains("error")) {
    validateEmail();
  }
});
// validate topic field while the selection changes
topic.addEventListener("change", validateTopic);
// validate comments field after user leaves the field
comments.addEventListener("blur", validateComments);
// update the counter and revalidate comments field while user is typing
comments.addEventListener("input", () => {
  updateCommentsCounter();
  if (comments.classList.contains("error")) {
    validateComments();
  }
});
// validate website field after user leaves the field
website.addEventListener("blur", validateWebsite);
// revalidate website field while user is typing
website.addEventListener("input", () => {
  if (website.classList.contains("error")) {
    validateWebsite();
  }   
});