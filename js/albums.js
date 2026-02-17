const albums = [
  {
    id: "sunrise",
    title: "Sunrise Beats",
    artist: "DJ Horizon",
    cover: "assets/images/sunrise_album.jpg",
    year: 2024
  },
  {
    id: "moonlight",
    title: "Moonlight Vibes",
    artist: "Night Vibes",
    cover: "assets/images/moonlight_album.jpg",
    year: 2023
  }
];

const albumsContainer = document.getElementById("albumsContainer");

albums.forEach(album => {
  const card = document.createElement("div");
  card.className = "bg-white dark:bg-gray-700 rounded shadow overflow-hidden cursor-pointer";
  card.innerHTML = `
    <img src="${album.cover}" class="w-full h-48 object-cover">
    <div class="p-4">
      <div class="font-semibold text-lg">${album.title}</div>
      <div class="text-sm text-gray-500 dark:text-gray-300">${album.artist}</div>
      <div class="text-sm text-gray-400 dark:text-gray-300">${album.year}</div>
    </div>
  `;

  card.addEventListener("click", () => {
    window.location.href = `album.html?id=${album.id}`;
  });

  albumsContainer.appendChild(card);
});

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

