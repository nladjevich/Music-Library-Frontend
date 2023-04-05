import React, { useState } from "react";
import './AddSong.css'

const SongForm2 = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [release_date, setRelease_date] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const songData = {
      title: title,
      artist: artist,
      release_date: release_date,
      album: album,
      genre: genre
    };
    const response = await fetch("http://127.0.0.1:8000/api/music_library/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(songData),
    });
    if (response.ok) {
      console.log("Song added successfully!");
      setTitle("");
      setArtist("");
      setRelease_date("");
      setAlbum("");
      setGenre("");
    } else {
      console.log("Failed to add song");
    }
  };

  return (
    <div className="form-spacing">
        <form onSubmit={handleSubmit}>
        <label>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                />
            </div>
        </label>
        <br />
        <label>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                placeholder="Artist"
                />
            </div>
        </label>
        <br />
        <label>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={release_date}
                onChange={(e) => setRelease_date(e.target.value)}
                placeholder="Year"
                />
            </div>
        </label>
        <br />
        <label>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
                placeholder="Album"
                />
            </div>
        </label>
        <br />
        <label>
            <div className='form-group group-margin'>
                <input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                placeholder="Genre"
                />
            </div>
        </label>
        <br />
        <button className='btn btn-primary' type="submit">Submit</button>
        </form>
    </div>
  );
};

export default SongForm2;