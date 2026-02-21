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
    title: "M Sharif Remix",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/m_Sharif.jpg",
    audio: "assets/audio/m_sharif.mp3",
    download: "assets/audio/m_sharif.mp3",
    featured: false
   },
 {
    id: 4,
    title: "Ali_jita Remix",
    artist: "Others",
    album: "Others",
    cover: "assets/covers/ali_jita.jpeg",
    audio: "assets/audio/ali_jita.mp3",
    download: "assets/audio/ali_jita.mp3",
    featured: false
   }  
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
