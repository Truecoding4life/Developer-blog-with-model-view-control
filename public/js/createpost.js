const createFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post_title').value.trim();
    const content = document.querySelector('#post_content').value.trim();
  
    if (title && content ) {
      const response = await fetch('/api/create', {
        method: 'POST',
        body: JSON.stringify({ title, content, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to sign up.');
      }
    }
  } 
  
  document
  .querySelector('.create-form')
  .addEventListener('submit', signupFormHandler);