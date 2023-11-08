const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector('#firstName').value.trim();
    const lastName = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
  
    if (firstName && lastName && email && password) {
      const response = await fetch('/api/signup', {
        method: 'POST',
        body: JSON.stringify([{ first_Name: firstName,
        last_Name: lastName, 
        email: email,
      password: password, }]),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up.');
      }
    }
  } 
  
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);