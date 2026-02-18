<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>HALA MAYE | Music Streaming Platform</title>

  <style>
    :root {
      --bg: #0f172a;
      --card: #111827;
      --accent: #7c3aed;
      --accent-soft: #a78bfa;
      --text: #e5e7eb;
      --muted: #9ca3af;
      --border: rgba(255,255,255,0.08);
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Segoe UI", system-ui, -apple-system, sans-serif;
    }

    body {
      background: radial-gradient(circle at top, #1e1b4b, var(--bg));
      color: var(--text);
      line-height: 1.6;
    }

    header {
      text-align: center;
      padding: 80px 20px 40px;
    }

    header h1 {
      font-size: 3rem;
      background: linear-gradient(135deg, #c4b5fd, #7c3aed);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin-bottom: 10px;
    }

    header p {
      color: var(--muted);
      font-size: 1.1rem;
    }

    .container {
      max-width: 1100px;
      margin: auto;
      padding: 40px 20px 80px;
    }

    .card {
      background: linear-gradient(145deg, rgba(255,255,255,0.03), transparent);
      border: 1px solid var(--border);
      border-radius: 18px;
      padding: 30px;
      margin-bottom: 30px;
      backdrop-filter: blur(12px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    }

    h2 {
      font-size: 1.4rem;
      margin-bottom: 15px;
      color: var(--accent-soft);
    }

    p {
      color: var(--muted);
      font-size: 0.95rem;
    }

    ul {
      list-style: none;
      margin-top: 10px;
    }

    li {
      margin: 10px 0;
      color: var(--muted);
      font-size: 0.95rem;
      padding-left: 22px;
      position: relative;
    }

    li::before {
      content: "✔";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 0.9rem;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 20px;
    }

    .highlight {
      color: var(--text);
      font-weight: 500;
    }

    footer {
      text-align: center;
      padding: 40px 20px;
      color: var(--muted);
      border-top: 1px solid var(--border);
    }

    .badge {
      display: inline-block;
      margin-top: 10px;
      padding: 6px 14px;
      border-radius: 999px;
      background: rgba(124, 58, 237, 0.15);
      color: var(--accent-soft);
      font-size: 0.8rem;
      border: 1px solid rgba(124, 58, 237, 0.25);
    }
  </style>
</head>

<body>

<header>
  <h1>🎵 HALA MAYE</h1>
  <p>Next-Generation Music Streaming Experience</p>
</header>

<div class="container">

  <div class="card">
    <h2>✨ Overview</h2>
    <p>
      <span class="highlight">HALA MAYE</span> is a modern, immersive, and user-centric music streaming platform
      designed to deliver a seamless digital listening experience. Built with performance,
      elegance, and scalability in mind, HALA MAYE transforms how users discover,
      stream, and enjoy music.
    </p>
  </div>

  <div class="card">
    <h2>🚀 Key Features</h2>
    <div class="grid">
      <ul>
        <li>Beautiful & responsive modern UI</li>
        <li>Real-time smooth music playback</li>
        <li>Dynamic metadata updates</li>
        <li>Albums & artists navigation</li>
      </ul>
      <ul>
        <li>Smart player controls</li>
        <li>Cover art integration</li>
        <li>Optimized performance</li>
        <li>Mobile-first experience</li>
      </ul>
    </div>
  </div>

  <div class="card">
    <h2>🎧 User Experience</h2>
    <p>
      HALA MAYE focuses on clarity, fluidity, and aesthetics:
    </p>
    <ul>
      <li>Smooth animations & transitions</li>
      <li>Clean typography & spacing</li>
      <li>Minimalist distraction-free design</li>
      <li>Elegant music-centric layouts</li>
    </ul>
  </div>

  <div class="card">
    <h2>🧩 Platform Capabilities</h2>
    <ul>
      <li>High-quality music streaming</li>
      <li>Album browsing & discovery</li>
      <li>Artist exploration</li>
      <li>Artwork & cover display</li>
      <li>Cross-device responsiveness</li>
    </ul>
  </div>

  <div class="card">
    <h2>💎 Design Philosophy</h2>
    <p>
      HALA MAYE follows a <span class="highlight">premium minimalist approach</span> —
      combining simplicity with sophistication to create a visually engaging yet
      effortless user experience.
    </p>
  </div>

  <div class="card">
    <h2>🛠 Ideal Use Cases</h2>
    <ul>
      <li>Music streaming applications</li>
      <li>UI/UX showcase projects</li>
      <li>Web audio platforms</li>
      <li>Progressive Web App (PWA) concepts</li>
      <li>Educational/demo systems</li>
    </ul>
  </div>

  <div class="card">
    <h2>🌟 Vision</h2>
    <p>
      To deliver a refined digital music experience that feels
      <span class="highlight">personal, fluid, beautiful, and effortless</span>.
    </p>
    <span class="badge">🚧 Actively Evolving</span>
  </div>

</div>

<footer>
  <p>❤️ HALA MAYE — Where Music Meets Experience</p>
</footer>

</body>
</html>
