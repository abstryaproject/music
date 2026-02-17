const artists = [
  {
    id: "dj-horizon",
    name: "DJ Horizon",
    image: "assets/images/dj_horizon.jpg",
    genre: "Electronic"
  },
  {
    id: "night-vibes",
    name: "Night Vibes",
    image: "assets/images/night_vibes.jpg",
    genre: "Chill"
  }
];

const artistsContainer = document.getElementById("artistsContainer");

artists.forEach(artist => {
  const card = document.createElement("div");
  card.className = "bg-white dark:bg-gray-700 rounded shadow overflow-hidden cursor-pointer";
  card.innerHTML = `
    <img src="${artist.image}" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="font-semibold text-lg">${artist.name}</div>
      <div class="text-sm text-gray-500 dark:text-gray-300">${artist.genre}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `artist.html?id=${artist.id}`;
  });

  artistsContainer.appendChild(card);
});

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

