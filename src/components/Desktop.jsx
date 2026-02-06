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
        <div className="spotify-icon" onClick={() => setspotifyOpen(true)}>
            <img src="/icons/spotify-128.png" alt="" />
            <p>Spotify</p>
        </div>
        <div className="resume-icon" onClick={() => setresumeOpen(true)}>
            <img src="/icons/resume.png" alt="" />
            <p>Resume.pdf</p>
        </div>
    </div>
    {spotifyOpen && <Spotify onClose={() => setspotifyOpen(false)} />}
    {resumeOpen && <Resume onClose={() => setresumeOpen(false)} />}
    </>
  )
}

export default Desktop
