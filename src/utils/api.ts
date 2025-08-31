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