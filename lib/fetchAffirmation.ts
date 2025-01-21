import axios from 'axios';



const API_URL = 'https://affirmations-api-by-apirobots.p.rapidapi.com/v1/affirmations/random';


export async function fetchAffirmation(): Promise<string> {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        'x-rapidapi-key': 'eaafad0ecbmsh68cb3b64fbb3a4ep1c2a86jsn4f7300c1a8ae',
        'x-rapidapi-host': 'affirmations-api-by-apirobots.p.rapidapi.com'
      }
    });
    return response.data.affirmation;
  } catch (error) {
    console.error('Failed to fetch affirmation:', error);

    // Add error specifics
    if (axios.isAxiosError(error)) {
      console.error('Axios error details:', error.toJSON());
    }

    return 'Could not fetch affirmation at this time. Please try again later.';
  }
}


