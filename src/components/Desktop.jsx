import React, { useState } from 'react'
import "./Desktop.css"
import Spotify from './windows/Spotify';
import Resume from './windows/Resume';
import { playClick } from '../utils/sound';

const Desktop = () => {
    const [spotifyOpen, setspotifyOpen] = useState(false);
    const [resumeOpen, setresumeOpen] = useState(false)
  return (
    <>
    <div className="icons">
  {/* Spotify Icon */}
  <div
    className="desktop-icon"
    onMouseDown={playClick}
    onDoubleClick={(e) => {
      e.stopPropagation()
      setspotifyOpen(true)
    }}
  >
    <img src="/icons/spotify-128.png" alt="Spotify" />
    <p>Spotify</p>
  </div>

  {/* Resume Icon */}
  <div
    className="desktop-icon"
    onMouseDown={playClick}
    onDoubleClick={(e) => {
      e.stopPropagation()
      setresumeOpen(true)
    }}
  >
    <img src="/icons/resume.png" alt="Resume" />
    <p>Resume.pdf</p>
  </div>
  <div
    className="desktop-icon"
    onMouseDown={playClick}
    onDoubleClick={(e) => {
      e.stopPropagation()
      window.open("https://github.com/DEVSINGH2004", "_blank", "noopener,noreferrer")
    }}
  >
    <img src="/icons/github.png" alt="GitHub" />
    <p>GitHub</p>
  </div>
  <div
    className="desktop-icon"
    onMouseDown={playClick}
    onDoubleClick={(e) => {
      e.stopPropagation()
      window.open("https://linkedin.com/in/contactdevsingh/", "_blank", "noopener,noreferrer")
    }}
  >
    <img src="/icons/linkedin.png" alt="LinkedIn" />
    <p>LinkedIn</p>
  </div>
  <div
    className="desktop-icon"
    onMouseDown={playClick}
    onDoubleClick={(e) => {
      e.stopPropagation()
      window.open("https://x.com/DevsinghEngg", "_blank", "noopener,noreferrer")
    }}
  >
    <img src="/icons/x.png" alt="Twitter" />
    <p>Twitter</p>
  </div>
</div>
    {spotifyOpen && <Spotify onClose={() => setspotifyOpen(false)} />}
    {resumeOpen && <Resume onClose={() => setresumeOpen(false)} />}
    </>
  )
}

export default Desktop
