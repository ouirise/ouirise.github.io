// index.js
// Client-side logic for index route

import { useEffect } from 'react';

export function useIndex() {
  useEffect(() => {
    console.log('🌫️🌒 index mounted');
  }, []);
  
  return {
    status: 'active',
    sigil: '🌫️🌒'
  };
}
