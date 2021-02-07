import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const SongList = () => {
  const [songs, setSongs] = useState([
    // array detsructing
    { title: 'Bambaşka Biri', id: 1 },
    { title: 'Melek', id: 2 },
    { title: 'Seni seviyorum', id: 3 },
  ]);
  const addSong = () => {
    setSongs([...songs, { title: 'Seni çöpe atacağım poşete yazık', id: uuidv4() }]);
  };
  return (
    <div className="songList">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <button onClick={addSong}>Add a song</button>
    </div>
  );
};

export default SongList;
