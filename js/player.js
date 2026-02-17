/* ==============================
   MUSIC DATA
============================== */

const songs = [
  {
    id: 1,
    title: "Hala Vibes",
    artist: "HalaMaye",
    album: "HalaMaye 2025",
    cover: "assets/covers/hala-vibes.jpg",
    audio: "assets/audio/hala-vibes.mp3",
    download: "assets/audio/hala-vibes.mp3",
    featured: true
  },
  {
    id: 2,
    title: "Night Flow",
    artist: "Maya Sound",
    album: "Echoes 2025",
    cover: "assets/covers/night-flow.jpg",
    audio: "assets/audio/night-flow.mp3",
    download: "assets/audio/night-flow.mp3",
    featured: true
  },
  {
    id: 3,
    title: "Afro Wave",
    artist: "Afro King",
    album: "Urban Beats",
    cover: "assets/covers/afro-wave.jpg",
    audio: "assets/audio/afro-wave.mp3",
    download: "assets/audio/afro-wave.mp3",
    featured: true
  },
  {
    id: 4,
    title: "Street Love",
    artist: "HalaMaye",
    album: "HalaMaye 2025",
    cover: "assets/covers/street-love.jpg",
    audio: "assets/audio/street-love.mp3",
    download: "assets/audio/street-love.mp3",
    featured: true
  },
  {
    id: 5,
    title: "Chill Zone",
    artist: "Maya Sound",
    album: "Echoes 2025",
    cover: "assets/covers/chill-zone.jpg",
    audio: "assets/audio/chill-zone.mp3",
    download: "assets/audio/chill-zone.mp3",
    featured: false
  },
{
    id: 6,
    title: "Auta MG Remix",
    artist: "Auta_MGBoy",
    album: "Dj Mansoor",
    cover: "assets/covers/night-flow.jpg",
    audio: "assets/audio/auta_MG.mp3",
    download: "assets/audio/auta_MG.mp3",
    featured: false
  }
];

  
/* ==============================
   ALBUMS & ARTISTS DATA
============================== */

const albums = [
  {
    title: "HalaMaye 2025",
    cover: "assets/albums/hala-vibes.jpg",
    songs: songs.filter(s => s.album === "HalaMaye 2025")
  },
  {
    title: "Echoes 2025",
    cover: "assets/albums/night-flow.jpg",
    songs: songs.filter(s => s.album === "Echoes 2025")
  },
  {
    title: "Urban Beats",
    cover: "assets/albums/afro-wave.jpg",
    songs: songs.filter(s => s.album === "Urban Beats")
  },
{
    title: "Dj Mansoor",
    cover: "assets/albums/night-flow.jpg",
    songs: songs.filter(s => s.album === "Dj Mansoor")
  }
];

const artists = [
  {
    name: "HalaMaye",
    photo: "assets/artists/dj-hala.jpg",
    songs: songs.filter(s => s.artist === "HalaMaye")
  },
  {
    name: "Maya Sound",
    photo: "assets/artists/maya-sound.jpg",
    songs: songs.filter(s => s.artist === "Maya Sound")
  },
  {
    name: "Afro King",
    photo: "assets/artists/afro-king.jpg",
    songs: songs.filter(s => s.artist === "Afro King")
  },
{
    name: "Auta_MGBoy",
    photo: "assets/artists/maya-sound.jpg",
    songs: songs.filter(s => s.artist === "Auta_MGBoy")
  }
];