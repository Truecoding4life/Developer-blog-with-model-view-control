const postid= document.querySelector('.postid').textContent
const deleteHandler = async (event) => {
    event.preventDefault();
    const link = ('/api/dashboard');
    console.log(postid);
    const response = await fetch(link, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', 
         
        },
       body: JSON.stringify({id: postid})
     
   });

if (response.ok) {
document.location.replace('/dashboard');
} else {
alert('Delete Failed.');
}};



document.querySelector('.blogpost').addEventListener('click', deleteHandler);