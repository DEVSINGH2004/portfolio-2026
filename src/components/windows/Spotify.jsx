import React from "react"
import { Rnd } from "react-rnd"
import "./Spotify.css"

const Spotify = ({ onClose }) => {
  return (
    <Rnd
      default={{
        x: 200,
        y: 120,
        width: 420,
        height: 420,
      }}
      minWidth={320}
      minHeight={300}
      bounds="window"
      dragHandleClassName="spotify-header"
    >
      <div className="spotify-window">
        {/* Header (drag handle) */}
        <div className="spotify-header">
          <span>Spotify</span>
          <button onClick={onClose}>✖</button>
        </div>

        {/* Content */}
        <div className="spotify-content">
          <iframe
  data-testid="embed-iframe"
  style={{ borderRadius: "12px" }}
  src="https://open.spotify.com/embed/playlist/37i9dQZF1EIg14kyQFjAdu?utm_source=generator"
  width="100%"
  height="352"
  frameBorder="0"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  title="Spotify Player"
/>
        </div>
      </div>
    </Rnd>
  )
}

export default Spotify

