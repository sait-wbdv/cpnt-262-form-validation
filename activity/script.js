document.getElementById('password').addEventListener('keyup', function () {
  const password = this.value;
  const strengthBar = document.getElementById('strength-bar');

  let score = 0;

  // Check each requirement and update feedback
  if (password.length >= 8) {
    document.getElementById('length-req').style.color = 'green';
    score++;
  } else {
    document.getElementById('length-req').style.color = 'red';
  }

  // contains uppercase
  if (/[A-Z]/.test(password)) {
    document.getElementById('uppercase-req').style.color = 'green';
    score++;
  } else {
    document.getElementById('uppercase-req').style.color = 'red';
  }

  // contains numbers
  if (/[0-9]/.test(password)) {
    document.getElementById('number-req').style.color = 'green';
    score++;
  } else {
    document.getElementById('number-req').style.color = 'red';
  }

  // contains special characters
  if (/[^a-zA-Z0-9]/.test(password)) {
    document.getElementById('special-req').style.color = 'green';
    score++;
  } else {
    document.getElementById('special-req').style.color = 'red';
  }

  // Update strength bar based on score
  strengthBar.style.width = `${score * 25}%`;
  if (score === 4) {
    strengthBar.style.backgroundColor = 'green';
  } else if (score === 3) {
    strengthBar.style.backgroundColor = 'yellow';
  } else {
    strengthBar.style.backgroundColor = 'red';
  }
});
