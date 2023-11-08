const deleteHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
    const link = ('/api/login');
    if (email && password) {
    const response = await fetch(link, {
      method: 'POST',
      body: JSON.stringify({ email, password, }),
      headers: { 'Content-Type': 'application/json' },
   });

if (response.ok) {
document.location.replace('/');
} else {
alert('Failed to log in.');
}}};



document.querySelector('.blogpost').addEventListener('submit', deleteHandler);