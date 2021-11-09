const elForm = document.getElementById("form");
const elInput = document.getElementById("input");
const elTittle1 = document.getElementById("walk");
const elTittle2 = document.getElementById("bicycle");
const elTittle3 = document.getElementById("car");
const elTittle4 = document.getElementById("plane");

let walkSpeed = 3.6;
let bikeSpeed = 20.1;
let carSpeed = 70;
let planeSpeed = 800;

elForm.addEventListener('submit', function(e){
    e.preventDefault()
    

        let walkResult = (Number(elInput.value) / walkSpeed)*3600;
        let walkHour = Math.floor(walkResult/3600);
        let walkHourRemain = walkResult%3600;
        let walkMinute = Math.floor(walkHourRemain/60);
        let walkMinuteRemain = Math.floor(walkHourRemain%60);
        elTittle1.textContent = walkHour + " h : " + walkMinute + " min : " + walkMinuteRemain + " sek";

        let bikeResult = (Number(elInput.value) / bikeSpeed)*3600;
        let bikeHour = Math.floor(bikeResult/3600);
        let bikeHourRemain = bikeResult%3600;
        let bikeMinute = Math.floor(bikeHourRemain/60);
        let bikeMinuteRemain = Math.floor(bikeHourRemain%60);
        elTittle2.textContent = bikeHour + " h : " + bikeMinute + " min : " + bikeMinuteRemain + " sek";

        let carResult = (Number(elInput.value) / carSpeed)*3600;
        let carHour = Math.floor(carResult/3600);
        let carHourRemain = carResult%3600;
        let carMinute = Math.floor(carHourRemain/60);
        let carMinuteRemain = Math.floor(carHourRemain%60);
        elTittle3.textContent = carHour + " h : " + carMinute + " min : " + carMinuteRemain + " sek";

        let planeResult = (Number(elInput.value) / planeSpeed)*3600;
        let planeHour = Math.floor(planeResult/3600);
        let planeHourRemain = planeResult%3600;
        let planeMinute = Math.floor(planeHourRemain/60);
        let planeMinuteRemain = Math.floor(planeHourRemain%60);
        elTittle4.textContent = planeHour + " h : " + planeMinute + " min : " + planeMinuteRemain + " sek";

})
