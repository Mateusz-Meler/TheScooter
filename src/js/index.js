import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */
let total = document.getElementById("total");
let charging = document.getElementById("charging");
let mileage = document.querySelector(".mileage");
let drive = document.querySelector(".drive");
const save = document.querySelector(".save");
const load = document.querySelector(".load");
let totalStorage = 0;
let chargingStorage = 0;

document.querySelector(".mileage").innerHTML = 0;
document.querySelector(".drive").innerHTML = 0;

charging.addEventListener("input", (e) => {
  let chargingValue = e.target.value;

  total.addEventListener("input", (e) => {
    let totalValue = e.target.value;

    if (chargingValue > 0 && totalValue > 0) {
      mileage = totalValue - chargingValue;
      mileage = mileage.toFixed(1) * 1;
      document.querySelector(".mileage").innerHTML = mileage;
      console.log(typeof mileage);
    }
    if (mileage <= 41 && mileage >= 0) {
      drive = 41 - mileage;
      drive = drive.toFixed(1) * 1;
      document.querySelector(".drive").innerHTML = drive;
    } else {
      document.querySelector(".mileage").innerHTML = 0;
      document.querySelector(".drive").innerHTML = 0;
    }

    if (drive <= 5) {
      document.querySelector(".drive").classList.add("red");
    } else {
      document.querySelector(".drive").classList.remove("red");
    }

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
      let jSon = JSON.parse(totalStorage);
      let jSon2 = JSON.parse(chargingStorage);
      total.value = jSon;
      charging.value = jSon2;
    });
  });
});

// console.log(`working !`);
