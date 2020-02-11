import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <h1> 😎 Coming soon 🧑🏻‍💻 </h1>
      
    <p> 📱 +918340662031 / <b>roshankrsoni1@gmail.com </b></p> 
 
      <p> 🤙 {date ? date : 'Loading date...'}</p>
    </main>
  );
}

export default App;
