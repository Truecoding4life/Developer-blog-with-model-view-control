const createFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#post_name').value.trim();
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
        alert('Error 500, Request error, Please try again.');
      }
    }
  } 
  
  document
  .querySelector('.create-form')
  .addEventListener('submit', createFormHandler);