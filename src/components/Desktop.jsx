import React, { useState } from 'react'
import "./Desktop.css"
import Spotify from './windows/Spotify';
import Resume from './windows/Resume';

const Desktop = () => {
    const [spotifyOpen, setspotifyOpen] = useState(false);
    const [resumeOpen, setresumeOpen] = useState(false)
  return (
    <>
    <div className="icons">
  {/* Spotify Icon */}
  <div
    className="desktop-icon"
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
    onDoubleClick={(e) => {
      e.stopPropagation()
      setresumeOpen(true)
    }}
  >
    <img src="/icons/resume.png" alt="Resume" />
    <p>Resume.pdf</p>
  </div>
</div>
    {spotifyOpen && <Spotify onClose={() => setspotifyOpen(false)} />}
    {resumeOpen && <Resume onClose={() => setresumeOpen(false)} />}
    </>
  )
}

export default Desktop
