import React, { useState } from 'react';
import classes from '../../containers/AppHooks/AppHooks.css';
const NewSongForm = ({ addSong }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title);
    addSong(title);
    setTitle('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>New song</label>
      <input
        type="text"
        value={title}
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <input className={classes.btnAdd} type="submit" value="Add A Song" />
    </form>
  );
};
export default NewSongForm;
