import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://mwhkqvtbvsaqjvkjawha.supabase.co/rest/v1',
  headers: {
    apikey:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13aGtxdnRidnNhcWp2a2phd2hhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjgyMzU2MCwiZXhwIjoyMDUyMzk5NTYwfQ.diHo6XqEQQ92B5L2mrD_zdx40J-TMn3M10WwPBKkBlA',
    authorization:
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13aGtxdnRidnNhcWp2a2phd2hhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNjgyMzU2MCwiZXhwIjoyMDUyMzk5NTYwfQ.diHo6XqEQQ92B5L2mrD_zdx40J-TMn3M10WwPBKkBlA',
  },
});
