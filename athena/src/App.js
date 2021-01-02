import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const url = ' http://localhost:3001/jobs';
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    var newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };
  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading ...</h1>
        <div className="underline"></div>
      </section>
    );
  }
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Athena</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((job,index)=>{
            return <button
            key={job.id}
            onClick={()=>setValue(index)}
            className={`job-btn ${index===index && 'active-btn'}`}>
              {
               job.company
              }
            </button>
          })
          }
        </div>
        {/* job info */}
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {
            duties.map((duty,index)=>{
              return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon">
                </FaAngleDoubleRight>
                <p>{duty}</p>
              </div>)
            })
          }
        </article>
      </div>
    </section>
  );
}

export default App;
