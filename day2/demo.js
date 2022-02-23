const car_1 = {
  name: 'BMW',
  model: 'XSeries',
  number_doors: 2,
  four_wheel_drive: false,
  horsepower: 2
}
const cars = [
  {
    name: 'BMW',
    model: 'XSeries',
    number_doors: 2,
    four_wheel_drive: false,
    horsepower: 2
  },
  {
    name: 'Volvo',
    model: 's40',
    number_doors: 4,
    four_wheel_drive: true,
    horsepower: 3
  },
  {
    name: 'Mazda',
    model: '6',
    number_doors: 4,
    four_wheel_drive: false,
    horsepower: 2.4
  },
]

function printCarNames(){
  cars.forEach((car)=>{
    const p = document.createElement('p');
    p.innerHTML = car.name;
    document.getElementById('demo').appendChild(p);
  })
}
printCarNames();

// console.log(cars[0])
// const selectedCar =  cars[1].name + ' ' + cars[1].model ;
//
//
// document.getElementById('demo')
// .innerHTML = selectedCar;
