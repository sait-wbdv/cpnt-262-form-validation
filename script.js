document.getElementById('escape-form').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log(event);

  // Form Field Variables
  const fullNameElement = document.getElementById('name');
  const emailELement = document.getElementById('email');
  const ageElement = document.getElementById('age');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirm-password');
  const agreement = document.getElementById('agreement');

  console.log(fullNameElement.value.trim())
  // Validate name
  if (fullNameElement.value.trim() !== "") {
    hideError('name-error');
  } else {
    showError('name-error');
  }

  console.log(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailELement.value));

  // Validate email
  if (emailELement.value.trim() === '') {
    showError('email-error');
  } else if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailELement.value)) {
    hideError('email-error');
  } else {
    showError('email-error');
  }

  // validate Age
  if (ageElement.value < 18) {
    showError('age-error');
  } else {
    hideError('age-error');
  }

  // validate password

  // validate confirm password

  // validate agreement

})

// Need helper functions to show/hide error element
function showError(id) {
  const errorElement = document.getElementById(id);
  errorElement.style.display = 'block';
}

function hideError(id) {
  const errorElement = document.getElementById(id);
  errorElement.style.display = 'none';
}