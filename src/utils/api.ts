import type { Country } from '../types/country';
import { fallbackCountries } from './fallback-data';

const BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchAllCountries(): Promise<Country[]> {
  // Try different API strategies in order of preference
  const strategies = [
    // Strategy 1: Limited fields for better compatibility
    () => fetch(`${BASE_URL}/all?fields=name,capital,region,population,flags,languages,currencies,cca3`),
    // Strategy 2: No field filtering (all data)
    () => fetch(`${BASE_URL}/all`),
    // Strategy 3: Alternative endpoint
    () => fetch(`https://restcountries.com/v3/all`),
  ];

  for (let i = 0; i < strategies.length; i++) {
    try {
      console.log(`Trying API strategy ${i + 1}...`);
      const response = await strategies[i]();
      
      if (!response.ok) {
        console.warn(`Strategy ${i + 1} failed with status: ${response.status}`);
        continue;
      }
      
      const countries: Country[] = await response.json();
      console.log(`Successfully loaded ${countries.length} countries`);
      return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    } catch (error) {
      console.warn(`Strategy ${i + 1} failed:`, error);
      if (i === strategies.length - 1) {
        throw new Error(`All API strategies failed. Last error: ${error}`);
      }
    }
  }

  // Last resort: return fallback data
  console.warn('All API strategies failed, using fallback data');
  return fallbackCountries as Country[];
}

export async function fetchCountryByName(name: string): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/name/${encodeURIComponent(name)}`);
    
    if (!response.ok) {
      if (response.status === 404) {
        return [];
      }
      throw new Error(`Failed to fetch country: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching country by name:', error);
    throw error;
  }
}

export async function fetchCountriesByRegion(region: string): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/region/${encodeURIComponent(region)}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch countries by region: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching countries by region:', error);
    throw error;
  }
}

export async function fetchCountriesByCurrency(currency: string): Promise<Country[]> {
  const strategies = [
    () => fetch(`${BASE_URL}/currency/${encodeURIComponent(currency)}`),
    () => fetch(`https://restcountries.com/v3/currency/${encodeURIComponent(currency)}`),
  ];

  for (let i = 0; i < strategies.length; i++) {
    try {
      const response = await strategies[i]();
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Currency search strategy ${i + 1} failed:`, error);
    }
  }
  
  throw new Error(`Failed to fetch countries by currency: ${currency}`);
}

export async function fetchCountriesByLanguage(language: string): Promise<Country[]> {
  const strategies = [
    () => fetch(`${BASE_URL}/lang/${encodeURIComponent(language)}`),
    () => fetch(`https://restcountries.com/v3/lang/${encodeURIComponent(language)}`),
  ];

  for (let i = 0; i < strategies.length; i++) {
    try {
      const response = await strategies[i]();
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Language search strategy ${i + 1} failed:`, error);
    }
  }
  
  throw new Error(`Failed to fetch countries by language: ${language}`);
}

export async function fetchCountriesByCapital(capital: string): Promise<Country[]> {
  const strategies = [
    () => fetch(`${BASE_URL}/capital/${encodeURIComponent(capital)}`),
    () => fetch(`https://restcountries.com/v3/capital/${encodeURIComponent(capital)}`),
  ];

  for (let i = 0; i < strategies.length; i++) {
    try {
      const response = await strategies[i]();
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Capital search strategy ${i + 1} failed:`, error);
    }
  }
  
  throw new Error(`Failed to fetch countries by capital: ${capital}`);
}

export async function fetchCountriesByDemonym(demonym: string): Promise<Country[]> {
  const strategies = [
    () => fetch(`${BASE_URL}/demonym/${encodeURIComponent(demonym)}`),
    () => fetch(`https://restcountries.com/v3/demonym/${encodeURIComponent(demonym)}`),
  ];

  for (let i = 0; i < strategies.length; i++) {
    try {
      const response = await strategies[i]();
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Demonym search strategy ${i + 1} failed:`, error);
    }
  }
  
  throw new Error(`Failed to fetch countries by demonym: ${demonym}`);
}

export async function fetchIndependentCountries(independent: boolean = true): Promise<Country[]> {
  const strategies = [
    () => fetch(`${BASE_URL}/independent?status=${independent}`),
    () => fetch(`https://restcountries.com/v3/independent?status=${independent}`),
  ];

  for (let i = 0; i < strategies.length; i++) {
    try {
      const response = await strategies[i]();
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Independent countries strategy ${i + 1} failed:`, error);
    }
  }
  
  throw new Error(`Failed to fetch independent countries`);
}