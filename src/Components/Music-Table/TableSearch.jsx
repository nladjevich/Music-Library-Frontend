import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MusicTable.css'

function TableSearch() {
  const [tableData, setTableData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTableData, setFilteredTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('http://127.0.0.1:8000/api/music_library/');
      setTableData(response.data);
    }
    fetchData();
  }, []);

  const filterTableData = (query) => {
    return tableData.filter((row) => {
      return row.title.includes(query) || row.artist.includes(query) || row.album.includes(query) || row.release_date.includes(query) || row.genre.includes(query);
    });
  }

  return (
    <div className='form-margin'>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search"
        />
        <button className='btn btn-primary' onClick={() => setFilteredTableData(filterTableData(searchQuery))}>Search</button>
      </form>
    </div>
  );

}

export default TableSearch;