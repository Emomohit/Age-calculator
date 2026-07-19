import { useState, useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import 'flatpickr/dist/themes/dark.css';
import { getAstrologyProfile } from './utils/astrology';
import { getBiologicalEstimates, getChronology, getPlanetaryAges, getAnimalAges, getMilestones } from './utils/metrics';

function App() {
  const [dob, setDob] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const dateInputRef = useRef(null);

  useEffect(() => {
    flatpickr(dateInputRef.current, {
      maxDate: "today",
      dateFormat: "Y-m-d",
      onChange: (selectedDates) => {
        if (selectedDates.length > 0) {
          setDob(selectedDates[0]);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (!dob) return;
    
    // Generate all 100+ metrics
    const now = new Date();
    const astro = getAstrologyProfile(dob);
    const chrono = getChronology(dob, now);
    const bio = getBiologicalEstimates(chrono.diffDays);
    const planets = getPlanetaryAges(chrono.diffDays);
    const animals = getAnimalAges(chrono.diffYears);
    const milestones = getMilestones(dob, now);

    setMetrics({ astro, chrono, bio, planets, animals, milestones });
  }, [dob]);

  return (
    <div className="container">
      <header className="header">
        <h1>Life Analytics OS</h1>
        <p>Computing 100+ Bio-Chronological Metrics</p>
      </header>
      
      <div className="input-section">
        <input 
          type="text" 
          ref={dateInputRef} 
          placeholder="Select your birth date..." 
          className="date-input"
        />
      </div>

      {metrics && (
        <div className="dashboard">
          <MetricCategory title="Identity & Astrological Lore" data={metrics.astro} />
          <MetricCategory title="Core Chronology" data={metrics.chrono.display} />
          <MetricCategory title="Biological Estimates" data={metrics.bio} />
          <MetricCategory title="Cosmic & Planetary Age" data={metrics.planets} />
          <MetricCategory title="Animal Equivalent Age" data={metrics.animals} />
          <MetricCategory title="Upcoming Milestones" data={metrics.milestones} />
        </div>
      )}
    </div>
  );
}

function MetricCategory({ title, data }) {
  return (
    <>
      <h2 className="category-title">{title}</h2>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="card">
          <h3>{key}</h3>
          <div className="value">{value}</div>
        </div>
      ))}
    </>
  );
}

export default App;
