export function getFavorites(): string[] {
  if (typeof window === 'undefined') return [];
  
  const favorites = localStorage.getItem('favorites');
  return favorites ? JSON.parse(favorites) : [];
}

export function addToFavorites(countryCode: string): void {
  if (typeof window === 'undefined') return;
  
  const favorites = getFavorites();
  if (!favorites.includes(countryCode)) {
    favorites.push(countryCode);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
}

export function removeFromFavorites(countryCode: string): void {
  if (typeof window === 'undefined') return;
  
  const favorites = getFavorites();
  const updated = favorites.filter(code => code !== countryCode);
  localStorage.setItem('favorites', JSON.stringify(updated));
}

export function isFavorite(countryCode: string): boolean {
  return getFavorites().includes(countryCode);
}