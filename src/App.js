import React, { useState, useEffect } from 'react';
import MusicTable from './Components/Music-Table/MusicTable';
import './App.css'
import SongForm from './Components/AddSong/AddSong2';
import TableSearch from './Components/Music-Table/TableSearch';
import { Tab } from 'bootstrap';
import SongForm2 from './Components/AddSong/AddSong3.';



function App() {
  return (
    <div>
      <header className='header-margin'>
        <h1>Music Library</h1>
        <h6>by Nicholas Ladjevich</h6>
        <hr></hr>
      </header>
      <TableSearch></TableSearch>
      <MusicTable></MusicTable>
      <SongForm2></SongForm2>
      
      
    </div>
  );
}

export default App;
