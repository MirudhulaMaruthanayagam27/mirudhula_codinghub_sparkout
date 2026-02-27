// ===== MAP INITIALIZATION =====
const map = L.map('map').setView([20, 0], 2); // Initial world view
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19 }).addTo(map);
let marker;

// ===== SEARCH LOCATION BUTTON =====
const locInput = document.getElementById("locationInput");
const searchBtn = document.getElementById("searchLocationBtn");
const locInfo = document.getElementById("locationInfo");

searchBtn.addEventListener("click", () => {
    const query = locInput.value.trim();
    if (!query) {
        locInfo.textContent = "Please enter a location.";
        return;
    }

    // OpenStreetMap Nominatim API for searching location
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data.length === 0) {
                locInfo.textContent = "Location not found!";
                return;
            }

            const lat = data[0].lat;
            const lon = data[0].lon;

            // Update map
            map.setView([lat, lon], 13);
            if (marker) marker.remove();
            marker = L.marker([lat, lon]).addTo(map)
                     .bindPopup(`Location: ${data[0].display_name}`)
                     .openPopup();

            locInfo.textContent = `Location: ${data[0].display_name}`;
        })
        .catch(err => {
            locInfo.textContent = "Error fetching location.";
            console.error(err);
        });
});

// ===== JOKE SECTION =====
const jokeBtn = document.getElementById("getJokeBtn");
const jokeSetup = document.getElementById("jokeSetup");
const jokePunchline = document.getElementById("jokePunchline");

jokeBtn.addEventListener("click", () => {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(res => res.json())
        .then(data => {
            jokeSetup.textContent = data.setup;
            jokePunchline.textContent = data.punchline;
        })
        .catch(err => {
            jokeSetup.textContent = "Oops! Something went wrong.";
            jokePunchline.textContent = "";
            console.error(err);
        });
});
