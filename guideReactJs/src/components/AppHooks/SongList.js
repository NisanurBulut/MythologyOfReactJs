import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
const SongList = () => {
  const [songs, setSongs] = useState([
    // array detsructing
    { title: 'Bambaşka Biri', id: 1 },
    { title: 'Melek', id: 2 },
    { title: 'Seni seviyorum', id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };
  const [age, setAge]=useState(20);
  useEffect(()=>{
    console.log('useEffect çalışıyor', uuidv4());
  }, [age])
  return (
    <div className="songList">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong = {addSong}/>
      <button onClick={()=>{setAge(age+1)}}>Add 1 to age {age}</button>
    </div>
  );
};

export default SongList;
