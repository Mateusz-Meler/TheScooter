import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
console.log(`Everything's fine !`);
const total = document.getElementById("total");
const charging = document.getElementById("charging");
let mileage = document.querySelector(".mileage");
mileage.textContent = 0;

charging.addEventListener("change", (e) => {
  const chargingValue = e.target.value;
  total.addEventListener("change", (e) => {
    const totalValue = e.target.value;
    if (chargingValue && totalValue) {
      mileage = totalValue - chargingValue;
      mileage = mileage.toFixed(1) * 1;
      console.log(mileage);
      document.querySelector(".mileage").innerHTML = mileage;
    } else {
      document.querySelector(".mileage").innerHTML = 0;
    }
  });
});
