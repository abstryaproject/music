let retryCount = 0;
const MAX_RETRIES = 3;
let retryTimeout = null;
function attemptPlay() {
  audio.play().catch(() => {
    handleAudioError();
  });
}
document.addEventListener("DOMContentLoaded", () => {
  // Render featured songs (only 4)
  if (featuredSongs) {
    const featuredList = songs.filter(song => song.featured).slice(0, 4);
    renderSongs(featuredList, featuredSongs);
  }
  // Render playlist
  if (playlistContainer) renderSongs(songs, playlistContainer);

  // Render albums and artists
  if (albumsContainer) renderAlbums();
  if (artistsContainer) renderArtists();

  // Load initial song
  loadSong(currentSongIndex);
});

/* ==============================
   GLOBAL STATE
============================== */
let currentSongIndex = 0;
let isPlaying = false;
let playlist = [...songs];

const audio = new Audio();

/* ==============================
   DOM ELEMENTS
============================== */
const songTitle = document.getElementById("player-title");
const songArtist = document.getElementById("player-artist");
const songCover = document.getElementById("player-cover");

const playBtn = document.getElementById("play-btn");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

const progressBar = document.getElementById("progress");
const volumeBar = document.getElementById("volume");

const featuredSongs = document.getElementById("featured-songs");
const playlistContainer = document.getElementById("playlistContainer");
const albumsContainer = document.getElementById("albumsContainer");
const artistsContainer = document.getElementById("artistsContainer");
const searchInput = document.getElementById("search");

/* ==============================
   LOAD SONG
============================== */
function loadSong(index) {
  const loadingIndicator = document.getElementById("audio-loading");
  const song = playlist[index];
  if (!song) return;
  retryCount = 0;
  clearTimeout(retryTimeout);
  loadingIndicator.classList.remove("hidden");
  audio.src = song.audio;
  songTitle.textContent = song.title;
  songArtist.textContent = song.artist;
  songCover.src = song.cover;
  // When audio can play
audio.addEventListener("canplay", () => {
  loadingIndicator.classList.add("hidden");
});

// When buffering (slow network)
audio.addEventListener("waiting", () => {
  loadingIndicator.classList.remove("hidden");
});

// When playback starts
audio.addEventListener("playing", () => {
  loadingIndicator.classList.add("hidden");
});
  function setControlsDisabled(disabled) {
  document.querySelectorAll(".player-btn").forEach(btn => {
    btn.disabled = disabled;
    btn.style.opacity = disabled ? "0.5" : "1";
  });
}

audio.addEventListener("waiting", () => setControlsDisabled(true));
audio.addEventListener("playing", () => setControlsDisabled(false));
  highlightPlaying(song.id);
}

/* ==============================
   PLAY / PAUSE
============================== */
function playSong() {
  audio.play();
  isPlaying = true;
  playBtn.innerHTML = "⏸";
}

function pauseSong() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = "▶";
}

playBtn?.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

/* ==============================
   NEXT / PREVIOUS
============================== */
nextBtn?.addEventListener("click", () => {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
});

prevBtn?.addEventListener("click", () => {
  currentSongIndex =
    (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong(currentSongIndex);
  playSong();
});

/* ==============================
   PROGRESS BAR
============================== */
audio.addEventListener("timeupdate", () => {
  if (!audio.duration) return;
  progressBar.value = (audio.currentTime / audio.duration) * 100;
});

progressBar?.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});

/* ==============================
   VOLUME
============================== */
volumeBar?.addEventListener("input", () => {
  audio.volume = volumeBar.value;
});

/* ==============================
   HIGHLIGHT PLAYING SONG
============================== */
function highlightPlaying(id) {
  document.querySelectorAll("#featured-songs > div").forEach(card => {
    card.classList.remove("border-indigo-600");
  });

  const currentCard = featuredSongs?.children[currentSongIndex];
  if (currentCard) currentCard.classList.add("border-indigo-600");
}

/* ==============================
   RENDER SONGS
============================== */
function renderSongs(list, container) {
  if (!container) return;
  container.innerHTML = "";

  list.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${song.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${song.title}</h3>
      <p class="text-gray-400">${song.artist}</p>
    `;
    card.addEventListener("click", () => {
      currentSongIndex = songs.indexOf(song);
      playlist = [...songs];
      loadSong(currentSongIndex);
      playSong();
    });
    container.appendChild(card);
  });
}

/* ==============================
   RENDER ALBUMS
============================== */
function renderAlbums() {
  if (!albumsContainer) return;

  albumsContainer.innerHTML = "";
  albums.forEach(album => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${album.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${album.title}</h3>
      <p class="text-gray-400">${album.songs.length} songs</p>
    `;
    card.addEventListener("click", () => {
      playlist = [...album.songs];
      currentSongIndex = 0;
      loadSong(currentSongIndex);
      playSong();
    });
    albumsContainer.appendChild(card);
  });
}

/* ==============================
   RENDER ARTISTS
============================== */
function renderArtists() {
  if (!artistsContainer) return;

  artistsContainer.innerHTML = "";
  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${artist.photo}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${artist.name}</h3>
      <p class="text-gray-400">${artist.songs.length} songs</p>
    `;
    card.addEventListener("click", () => {
      playlist = [...artist.songs];
      currentSongIndex = 0;
      loadSong(currentSongIndex);
      playSong();
    });
    artistsContainer.appendChild(card);
  });
}

/* ==============================
   SEARCH FILTER
============================== */
searchInput?.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = songs.filter(
    s => s.title.toLowerCase().includes(value) || s.artist.toLowerCase().includes(value)
  );
  renderSongs(filtered, featuredSongs);
});

/* ==============================
   INIT
============================== */
renderSongs(songs, featuredSongs);
renderSongs(songs, playlistContainer);
renderAlbums();
renderArtists();
loadSong(currentSongIndex);
audio.volume = 0.7;

audio.addEventListener("ended", () => nextBtn?.click());

/* ==============================
   DETAIL VIEW STATE
============================== */
let currentView = "home"; // 'home', 'album', 'artist'
let currentDetail = null;  // album or artist object

const mainContent = document.querySelector("main"); // target for detail views

/* ==============================
   OPEN ALBUM
============================== */
function openAlbum(album) {
  currentView = "album";
  currentDetail = album;

  mainContent.innerHTML = `
    <button id="back-btn" class="mb-4 px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black">⬅ Back</button>
    <h2 class="text-xl font-semibold mb-6">${album.title} 💿</h2>
    <div id="albumSongs" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"></div>
  `;

  document.getElementById("back-btn").addEventListener("click", () => {
    currentView = "home";
    renderAlbums();
  });

  const container = document.getElementById("albumSongs");
  album.songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${song.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${song.title}</h3>
      <p class="text-gray-400">${song.artist}</p>
    `;
    card.addEventListener("click", () => {
      playlist = [...album.songs];
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });
    container.appendChild(card);
  });
}

/* ==============================
   OPEN ARTIST
============================== */
function openArtist(artist) {
  currentView = "artist";
  currentDetail = artist;

  mainContent.innerHTML = `
    <button id="back-btn" class="mb-4 px-4 py-2 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black">⬅ Back</button>
    <h2 class="text-xl font-semibold mb-6">${artist.name} 🎤</h2>
    <div id="artistSongs" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"></div>
  `;

  document.getElementById("back-btn").addEventListener("click", () => {
    currentView = "home";
    renderArtists();
  });

  const container = document.getElementById("artistSongs");
  artist.songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${song.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${song.title}</h3>
      <p class="text-gray-400">${song.album}</p>
    `;
    card.addEventListener("click", () => {
      playlist = [...artist.songs];
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });
    container.appendChild(card);
  });
}

/* ==============================
   RENDER ALBUMS (UPDATE)
============================== */
function renderAlbums() {
  if (!albumsContainer) return;
  mainContent.innerHTML = `
    <h2 class="text-xl font-semibold mb-6">💿 Albums</h2>
    <div id="albumsContainer" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"></div>
  `;
  const container = document.getElementById("albumsContainer");

  albums.forEach(album => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${album.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${album.title}</h3>
      <p class="text-gray-400">${album.songs.length} songs</p>
    `;
    card.addEventListener("click", () => openAlbum(album));
    container.appendChild(card);
  });
}

/* ==============================
   RENDER ARTISTS (UPDATE)
============================== */
function renderArtists() {
  if (!artistsContainer) return;
  mainContent.innerHTML = `
    <h2 class="text-xl font-semibold mb-6">🎤 Artists</h2>
    <div id="artistsContainer" class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"></div>
  `;
  const container = document.getElementById("artistsContainer");

  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${artist.photo}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${artist.name}</h3>
      <p class="text-gray-400">${artist.songs.length} songs</p>
    `;
    card.addEventListener("click", () => openArtist(artist));
    container.appendChild(card);
  });
}

/* ==============================
   INITIALIZE PAGES
============================== */
if (albumsContainer) renderAlbums();
if (artistsContainer) renderArtists();

const detailModal = document.getElementById("detailModal");
const modalClose = document.getElementById("modalClose");
const modalTitle = document.getElementById("modalTitle");
const modalSongs = document.getElementById("modalSongs");

/* ==============================
   OPEN ALBUM MODAL
============================== */
function openAlbum(album) {
  modalTitle.textContent = album.title + " 💿";
  modalSongs.innerHTML = "";

  album.songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${song.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${song.title}</h3>
      <p class="text-gray-400">${song.artist}</p>
    `;
    card.addEventListener("click", () => {
      playlist = [...album.songs];
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
      detailModal.classList.remove("show"); // close modal on play
    });
    modalSongs.appendChild(card);
  });

  detailModal.classList.add("show");
}

/* ==============================
   OPEN ARTIST MODAL
============================== */
function openArtist(artist) {
  modalTitle.textContent = artist.name + " 🎤";
  modalSongs.innerHTML = "";

  artist.songs.forEach((song, index) => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${song.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${song.title}</h3>
      <p class="text-gray-400">${song.album}</p>
    `;
    card.addEventListener("click", () => {
      playlist = [...artist.songs];
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
      detailModal.classList.remove("show");
    });
    modalSongs.appendChild(card);
  });

  detailModal.classList.add("show");
}

/* ==============================
   CLOSE MODAL
============================== */
modalClose.addEventListener("click", () => detailModal.classList.remove("show"));
detailModal.addEventListener("click", (e) => {
  if (e.target === detailModal) detailModal.classList.remove("show");
});

function renderAlbums() {
  if (!albumsContainer) return;

  albumsContainer.innerHTML = "";
  albums.forEach(album => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${album.cover}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${album.title}</h3>
      <p class="text-gray-400">${album.songs.length} songs</p>
    `;
    card.addEventListener("click", () => openAlbum(album));
    albumsContainer.appendChild(card);
  });
}

function renderArtists() {
  if (!artistsContainer) return;

  artistsContainer.innerHTML = "";
  artists.forEach(artist => {
    const card = document.createElement("div");
    card.className = "p-4 cursor-pointer card";
    card.innerHTML = `
      <img src="${artist.photo}" class="rounded-lg mb-3" />
      <h3 class="font-semibold">${artist.name}</h3>
      <p class="text-gray-400">${artist.songs.length} songs</p>
    `;
    card.addEventListener("click", () => openArtist(artist));
    artistsContainer.appendChild(card);
  });
}

const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("currentTime");
const durationEl = document.getElementById("duration");

// Format seconds to mm:ss
function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
}

// Update slider and current time as song plays
audio.addEventListener("timeupdate", () => {
  const { currentTime, duration } = audio;
  if (!isNaN(duration)) {
    progress.value = (currentTime / duration) * 100;
    currentTimeEl.textContent = formatTime(currentTime);
    durationEl.textContent = formatTime(duration);
  }
});

// Seek song when slider is moved
progress.addEventListener("input", () => {
  const { duration } = audio;
  if (!isNaN(duration)) {
    audio.currentTime = (progress.value / 100) * duration;
  }
});


const playerModal = document.getElementById("playerModal");

function openPlayer(song) {
  // Set song info
  document.getElementById("player-cover").src = song.cover;
  document.getElementById("player-title").textContent = song.title;
  document.getElementById("player-artist").textContent = song.artist;

  // Show modal pop-up
  playerModal.classList.add("show");

  // Play song
  playlist = [song];
  currentSongIndex = 0;
  loadSong(currentSongIndex);
  playSong();
}

// Close modal when clicking outside
playerModal.addEventListener("click", (e) => {
  if (e.target === playerModal) playerModal.classList.remove("show");
});
if (playerDownload) {
  if (song.download === false) {
    playerDownload.style.display = "none";
  } else {
    playerDownload.style.display = "inline";
    playerDownload.href = song.download || song.audio;
  }
}