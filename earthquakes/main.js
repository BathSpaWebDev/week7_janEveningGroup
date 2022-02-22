const url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';

// const myArray = ['apple', 'orange', 'pear']
const targetDiv = document.querySelector('.eq');

// GET

function fetchData(apiUrl){

  const res = fetch(apiUrl, {
    method: 'GET',
  })
    .then(response => response.json())
    .then(data => {
      // console.log(data.features)

      data.features.map((f,i)=>{
        console.log(f.properties.title);
        const p = document.createElement('p');
        p.innerHTML = f.properties.title;
        targetDiv.appendChild(p);
      })
      return data;
    })
    .catch((error) => console.log(error.message));
}

fetchData(url);
