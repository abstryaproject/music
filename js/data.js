/* ==============================
   MUSIC DATA
============================== */

const songs = [
  {
    id: 1,
    title: "GDSSS Lailaba",
    artist: "HalaMaye",
    album: "HalaMaye 2025",
    cover: "assets/covers/gdss_lailaba.jpg",
    audio: "assets/audio/gdss_lailaba.mp3",
    download: "assets/audio/gdss_lailaba.mp3",
    featured: true
  },
  {
    id: 2,
    title: "Angon Sakina",
    artist: "HalaMaye",
    album: "HalaMaye 2026",
    cover: "assets/covers/angon_sakina.jpg",
    audio: "assets/audio/angon_sakina.mp3",
    download: "assets/audio/angon_sakina.mp3",
    featured: true
  },
   {
    id: 3,
    title: "Iya Wuya",
    artist: "HalaMaye",
    album: "HalaMaye 2025",
    cover: "assets/covers/angon_sakina.jpg",
    audio: "assets/audio/iyawuya.mp3",
    download: "assets/audio/iyawuya.mp3",
    featured: true
  },
   {
    id: 4,
    title: "Umar M. Sharif",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/m_sharif.jpg",
    audio: "assets/audio/m_sharif.mp3",
    download: "assets/audio/m_sharif.mp3",
    featured: false
   },
 {
    id: 5,
    title: "Ali Jita",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/ali_jita.jpeg",
    audio: "assets/audio/ali_jita.mp3",
    download: "assets/audio/ali_jita.mp3",
    featured: false
   },
   {
    id: 6,
    title: "Sarkin Waka",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/naziru.jpg",
    audio: "assets/audio/naziru.mp3",
    download: "assets/audio/naziru.mp3",
    featured: false
   },
   {
    id: 7,
    title: "Ado Gwanja",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/ado_gwanja.jpg",
    audio: "assets/audio/ado_gwanja.mp3",
    download: "assets/audio/ado_gwanja.mp3",
    featured: false
   },
   {
    id: 8,
    title: "Alhajin Alhaji",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/alhajin_alhaji.jpg",
    audio: "assets/audio/alhajin_alhaji.mp3",
    download: "assets/audio/alhajin_alhaji.mp3",
    featured: false
   },
   {
    id: 9,
    title: "Auta MG",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/auta_mg.jpg",
    audio: "assets/audio/auta_mg.mp3",
    download: "assets/audio/auta_mg.mp3",
    featured: false
   },
   {
    id: 10,
    title: "Auta Waziri",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/auta_waziri.jpg",
    audio: "assets/audio/auta_waziri.mp3",
    download: "assets/audio/auta_waziri.mp3",
    featured: false
   },
   {
    id: 11,
    title: "Namenj",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/namenj.jpg",
    audio: "assets/audio/Namenj_Rayuwata.mp3",
    download: "assets/audio/Namenj_Rayuwata.mp3",
    featured: false
   },
];

  
/* ==============================
   ALBUMS & ARTISTS DATA
============================== */

const albums = [
  {
    title: "HalaMaye 2025",
    cover: "assets/albums/halamaye_album2025_cover.jpg",
    songs: songs.filter(s => s.album === "HalaMaye 2025")
  },
  {
    title: "HalaMaye 2026",
    cover: "assets/albums/halamaye_album2026_cover.jpg",
    songs: songs.filter(s => s.album === "HalaMaye 2026")
  }, 
{
    title: "HalaMaye Remix",
    cover: "assets/albums/halamaye_remix_album_cover.jpg",
    songs: songs.filter(s => s.album === "HalaMaye Remix")
  },
   {
    title: "Others",
    cover: "assets/covers/others.webp",
    songs: songs.filter(s => s.album === "Others")
  }
];

const artists = [
  {
    name: "HalaMaye",
    photo: "assets/artists/Halamaye_artist_cover.jpg",
    songs: songs.filter(s => s.artist === "HalaMaye")
  },
   {
    name: "Others",
    photo: "assets/covers/others.webp",
    songs: songs.filter(s => s.artist === "Others")
  }
];
