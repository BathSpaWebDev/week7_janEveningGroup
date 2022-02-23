const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

// const myArray = ['apple', 'orange', 'pear']
const targetDiv = document.querySelector('.eq');

document.getElementById('demo');
document.getElementsByClassName('demo'); // returns html collection
document.getElementsByClassName('demo')[0]; //Only returns the first element with specified class
document.querySelector('.myClass');
document.querySelectorAll('.myClass'); // node list

targetDiv.innerHTML
// GET

function fetchData(apiUrl){

  const res = fetch(apiUrl, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      console.log(data.features)

      // With an array, we can loop throughit and print specific
      // bits of data from each item
      const featuresArray = data.features;
      featuresArray.forEach((item)=>{
          console.log(item.properties.title);
          const p = document.createElement('p');
          p.innerHTML = item.properties.title;
          targetDiv.appendChild(p);
      })

      // data.features.map((f,i)=>{
      //   console.log(f.properties.title);
      //   const p = document.createElement('p');
      //   p.innerHTML = f.properties.title;
      //   targetDiv.appendChild(p);
      // })
      return data;
    })
    .catch((error) => console.log(error.message));
}

fetchData(url);
