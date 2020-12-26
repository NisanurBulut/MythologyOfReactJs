import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import Cities from './Cities';

const url = 'http://localhost:3001/cities';
function App() {
  const [loading, setLoading] = useState(true);
  const [cities, setCities] = useState([]);
  const fetchCities = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const cities = await response.json();
      setLoading(false);
      setCities(cities);
    } catch (ex) {
      setLoading(false);
      console.log(ex);
    }
  };
  useEffect(() => {
    fetchCities();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  return (
    <main>
      <Cities cities={cities}></Cities>
    </main>
  );
}

export default App;
