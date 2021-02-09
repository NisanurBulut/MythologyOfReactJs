import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';
import classes from '../../containers/AppHooks/AppHooks.css';
const SongList = () => {
  const [songs, setSongs] = useState([
    // array detsructing
    { title: 'Şarkı 1', id: 1 },
    { title: 'Şarkı 2', id: 2 },
    { title: 'Şarkı 3', id: 3 },
  ]);
  const addSong = (title) => {
    setSongs([...songs, { title, id: uuidv4() }]);
  };
  const [age, setAge]=useState(20);
  useEffect(()=>{
    console.log('useEffect çalışıyor', uuidv4());
  }, [age])
  return (
    <div className={classes.songList}>
      <ul>
        {songs.map((song) => {
          return <li className={classes.liTag} key={song.id}>{song.title}</li>;
        })}
      </ul>
      <NewSongForm addSong = {addSong}/>
      <button className={classes.btnAge} onClick={()=>{setAge(age+1)}}>Add 1 to age {age}</button>
    </div>
  );
};

export default SongList;
