const artistSelect = document.getElementById("artistSelect");
const albumSelect = document.getElementById("albumSelect");
const songSelect = document.getElementById("songSelect");
const downloadBtn = document.getElementById("downloadBtn");

/* ==============================
   LOAD ARTISTS
============================== */
artists.forEach(artist => {
  const option = document.createElement("option");
  option.value = artist.name;
  option.textContent = artist.name;
  artistSelect.appendChild(option);
});

/* ==============================
   ARTIST → ALBUM
============================== */
artistSelect.addEventListener("change", () => {
  albumSelect.innerHTML = `<option value="">Select album</option>`;
  songSelect.innerHTML = `<option value="">Select song</option>`;
  albumSelect.disabled = true;
  songSelect.disabled = true;
  disableDownload();

  const artistName = artistSelect.value;
  if (!artistName) return;

  const artistAlbums = albums.filter(a =>
    a.songs.some(s => s.artist === artistName)
  );

  artistAlbums.forEach(album => {
    const option = document.createElement("option");
    option.value = album.title;
    option.textContent = album.title;
    albumSelect.appendChild(option);
  });

  albumSelect.disabled = false;
});

/* ==============================
   ALBUM → SONG
============================== */
albumSelect.addEventListener("change", () => {
  songSelect.innerHTML = `<option value="">Select song</option>`;
  songSelect.disabled = true;
  disableDownload();

  const albumTitle = albumSelect.value;
  if (!albumTitle) return;

  const album = albums.find(a => a.title === albumTitle);

  album.songs.forEach(song => {
    const option = document.createElement("option");
    option.value = song.id;
    option.textContent = song.title;
    songSelect.appendChild(option);
  });

  songSelect.disabled = false;
});

/* ==============================
   SONG → DOWNLOAD
============================== */
songSelect.addEventListener("change", () => {
  const songId = songSelect.value;
  if (!songId) return disableDownload();

  const song = songs.find(s => s.id == songId);

  downloadBtn.href = song.download || song.audio;
  downloadBtn.setAttribute("download", "");
  downloadBtn.classList.remove("opacity-50", "pointer-events-none");
});

/* ==============================
   HELPERS
============================== */
function disableDownload() {
  downloadBtn.href = "#";
  downloadBtn.classList.add("opacity-50", "pointer-events-none");
}