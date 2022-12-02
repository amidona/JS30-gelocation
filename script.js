// Note that this is simulated code written at a desktop and wasn't able to be tested (I couldn't take the damn thing for a run)

const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed-value");

navigator.geolocation.watchPosition((data) => {
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.log(err);
    alert("Hey! You gotta allow that to happen! Please refresh the page and click Allow.");
});