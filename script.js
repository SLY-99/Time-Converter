const elForm = document.getElementById("form");
const elInputDistance = document.getElementById("input");
const elFoot = document.getElementById("walk");
const elBike = document.getElementById("bicycle");
const elCar = document.getElementById("car");
const elPlane = document.getElementById("plane");

let walkSpeed = 3.6;
let bikeSpeed = 20.1;
let carSpeed = 70;
let planeSpeed = 800;



elForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var inputDistance = Number(elInputDistance.value.trim());

    if (inputDistance <= 0) {
        alert("Nuldan katta raqam kiriting");
        return console.log("Nuldan katta raqam kiriting");
    } else if (isNaN(inputDistance)) {
        alert("Raqam kiriting");
        return console.log("Raqam kiriting");
    }
    
    elFoot.textContent = calculateDistance(inputDistance, walkSpeed);
    elBike.textContent = calculateDistance(inputDistance, bikeSpeed);
    elCar.textContent = calculateDistance(inputDistance, carSpeed);
    elPlane.textContent = calculateDistance(inputDistance, planeSpeed);
})



function calculateDistance(distance, speed) {
    var hours = Math.floor(distance / speed);
    var minuts = Math.floor((distance / speed - hours) * 60);
    var seconds = Math.ceil(((distance / speed - hours) * 60 - minuts) * 60);
    
    var minutjon = minuts? `${minuts} minut` : "" ;
    var secundjon = seconds? `${seconds} secund` : "" ;

    if (hours === 0 && minuts === 0) {
        return `${minutjon} ${secundjon}`
    } else if(hours === 0) {
        return `${minutjon} ${secundjon}`
    } else {
        return `${hours} soat ${minutjon} ${secundjon}`
    }

}
