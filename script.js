const apiUrl = 'https://reqres.in/api/users?page=2';

fetch(apiUrl, {
  method: 'GET'
})
  .then(response => {
    console.log(response);
    if(response.status == '200') {
      alert('HTTP request worked')
    }
    return response.json()
  })
  .catch((error) => console.log(error.message));

// fetch(apiUrl, {
//   method: 'GET'
// })
//   .then(response => response.json())
//   .then(data => {
//    console.log(data);
//    //WE want to loop through the users and add the users email to the demo div
//
//    const div = document.getElementById('demo');
//    const users = data.data;
//
//    users.map((user,i)=>{
//      const p = document.createElement('p');
//      p.innerHTML = user.email;
//      div.appendChild(p);
//      // console.log(user.email);
//    })
//   })
//   .catch((error) => console.log(error.message));



// {
//   name: 'bob',
//   email: 'bob@gmail.com'
//   bobsFunction: function(){
//
//   }
// }
