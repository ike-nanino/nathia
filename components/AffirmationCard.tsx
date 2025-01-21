import React from 'react'
import { useState, useEffect } from 'react';
import { fetchAffirmation } from '../lib/fetchAffirmation';

function AffirmationCard() {
    const [affirmation, setAffirmation] = useState('');

    useEffect(() => {
      fetchAffirmation().then(setAffirmation);
    }, []);
  
  return (
    <div className="glass-container">
    <p>{affirmation}</p>
  </div>
  )
}

export default AffirmationCard




