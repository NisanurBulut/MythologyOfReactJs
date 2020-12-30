import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestion]=useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions and answers for Chess !</h3>
        <section className="info">
          {
            questions.map((q)=>{
              return <SingleQuestion id={q.id} {...q} />
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
