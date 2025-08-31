import type { Country } from '../types/country';

const BASE_URL = 'https://restcountries.com/v3.1';

export async function fetchAllCountries(): Promise<Country[]> {
  try {
    const response = await fetch(`${BASE_URL}/all?fields=name,capital,region,subregion,population,flags,languages,currencies,borders,area,timezones,demonyms,idd,cca3`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch countries: ${response.status}`);
    }
    
    const countries: Country[] = await response.json();
    return countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
  } catch (error) {
    console.error('Error fetching countries:', error);
    throw error;
  }
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