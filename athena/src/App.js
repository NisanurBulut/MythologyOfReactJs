import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = ' http://localhost:3001/jobs';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs]=useState([]);
  const [value, setValue]=useState(0);
  const fetchJobs = async ()=>{
    const response = await fetch(url);
    var newJobs = response.json();
    setJobs(newJobs);
    setLoading(false);
  }
  useEffect(()=>{
    fetchJobs()
  },[])
  return <h2>athena project setup</h2>;
}

export default App;
