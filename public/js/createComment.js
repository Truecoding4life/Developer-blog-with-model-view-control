

const createCMTHandler = async (event) => {
    event.preventDefault();
  
    const content = document.querySelector('#commentContent').value.trim();
    const id = document.querySelector('#postID').textContent()
    if (id && content ) {
      const response = await fetch(('/api/post/'+ id), {
        method: 'POST',
        body: JSON.stringify({ id, content, }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/post/'+id);
      } else {
        alert('Error 500, Request error, Please try again.');
      }
    }
  } 
  
  document
  .querySelector('#commentButton')
  .addEventListener('submit', createCMTHandler);