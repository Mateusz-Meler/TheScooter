import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import { registerSW } from "./pwa.js";
// registerSW();

/* place your code below */
let total = document.getElementById("total");
let charging = document.getElementById("charging");
let mileage = document.querySelector(".mileage");
let drive = document.querySelector(".drive");
const save = document.querySelector(".save");
const load = document.querySelector(".load");
let totalStorage = "";
let chargingStorage = "";
mileage.textContent = 0;
drive.textContent = 0;

charging.addEventListener("change", (e) => {
  const chargingValue = e.target.value;

  total.addEventListener("change", (e) => {
    const totalValue = e.target.value;
    if (chargingValue && totalValue) {
      mileage = totalValue - chargingValue;
      mileage = mileage.toFixed(1) * 1;
      document.querySelector(".mileage").innerHTML = mileage;
    } else {
      document.querySelector(".mileage").innerHTML = 0;
    }
    if (mileage <= 41 && mileage >= 0) {
      drive = 41 - mileage;
      drive = drive.toFixed(1) * 1;
      document.querySelector(".drive").innerHTML = drive;
      if (drive <= 5) {
        document.querySelector(".drive").classList.add("red");
      } else {
        document.querySelector(".drive").classList.remove("red");
      }
    }
  });
});
save.addEventListener("click", () => {
  if (total.value && charging.value) {
    localStorage.setItem("total", total.value);
    localStorage.setItem("charging", charging.value);
    console.log("masz coś w storage");
  }
});
load.addEventListener("click", () => {
  totalStorage = localStorage.getItem("total");
  chargingStorage = localStorage.getItem("charging");
  total.value = totalStorage;
  charging.value = chargingStorage;
});
