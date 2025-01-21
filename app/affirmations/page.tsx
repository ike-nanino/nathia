'use client';

import { useState, useEffect } from 'react';
import { fetchAffirmation } from '@/lib/fetchAffirmation';

const AffirmationsPage = () => {
  const [affirmation, setAffirmation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const fetchedAffirmation = await fetchAffirmation();
      setAffirmation(fetchedAffirmation);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 bg-gradient-to-r from-purple-500 to-purple-900 text-white h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Daily Affirmation</h1>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="flex justify-center items-center">
          <div className="bg-white text-purple-900 p-6 rounded-lg shadow-lg">
            <p className="text-lg">{affirmation}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AffirmationsPage;
