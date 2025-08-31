// Fallback data for when API is down
export const fallbackCountries = [
  {
    name: { common: "Indonesia", official: "Republic of Indonesia" },
    capital: ["Jakarta"],
    region: "Asia",
    subregion: "South-Eastern Asia",
    population: 273523615,
    flags: { png: "https://flagcdn.com/w320/id.png", svg: "https://flagcdn.com/id.svg" },
    languages: { ind: "Indonesian" },
    currencies: { IDR: { name: "Indonesian rupiah", symbol: "Rp" } },
    cca3: "IDN"
  },
  {
    name: { common: "United States", official: "United States of America" },
    capital: ["Washington, D.C."],
    region: "Americas",
    subregion: "North America", 
    population: 329484123,
    flags: { png: "https://flagcdn.com/w320/us.png", svg: "https://flagcdn.com/us.svg" },
    languages: { eng: "English" },
    currencies: { USD: { name: "United States dollar", symbol: "$" } },
    cca3: "USA"
  },
  {
    name: { common: "United Kingdom", official: "United Kingdom of Great Britain and Northern Ireland" },
    capital: ["London"],
    region: "Europe",
    subregion: "Northern Europe",
    population: 67886011,
    flags: { png: "https://flagcdn.com/w320/gb.png", svg: "https://flagcdn.com/gb.svg" },
    languages: { eng: "English" },
    currencies: { GBP: { name: "British pound", symbol: "£" } },
    cca3: "GBR"
  },
  {
    name: { common: "Japan", official: "Japan" },
    capital: ["Tokyo"],
    region: "Asia",
    subregion: "Eastern Asia",
    population: 125836021,
    flags: { png: "https://flagcdn.com/w320/jp.png", svg: "https://flagcdn.com/jp.svg" },
    languages: { jpn: "Japanese" },
    currencies: { JPY: { name: "Japanese yen", symbol: "¥" } },
    cca3: "JPN"
  },
  {
    name: { common: "Germany", official: "Federal Republic of Germany" },
    capital: ["Berlin"],
    region: "Europe", 
    subregion: "Central Europe",
    population: 83783942,
    flags: { png: "https://flagcdn.com/w320/de.png", svg: "https://flagcdn.com/de.svg" },
    languages: { deu: "German" },
    currencies: { EUR: { name: "Euro", symbol: "€" } },
    cca3: "DEU"
  },
  {
    name: { common: "Australia", official: "Commonwealth of Australia" },
    capital: ["Canberra"],
    region: "Oceania",
    subregion: "Australia and New Zealand", 
    population: 25687041,
    flags: { png: "https://flagcdn.com/w320/au.png", svg: "https://flagcdn.com/au.svg" },
    languages: { eng: "English" },
    currencies: { AUD: { name: "Australian dollar", symbol: "$" } },
    cca3: "AUS"
  },
  {
    name: { common: "Brazil", official: "Federative Republic of Brazil" },
    capital: ["Brasília"],
    region: "Americas",
    subregion: "South America",
    population: 215313498,
    flags: { png: "https://flagcdn.com/w320/br.png", svg: "https://flagcdn.com/br.svg" },
    languages: { por: "Portuguese" },
    currencies: { BRL: { name: "Brazilian real", symbol: "R$" } },
    cca3: "BRA"
  },
  {
    name: { common: "South Africa", official: "Republic of South Africa" },
    capital: ["Cape Town", "Pretoria", "Bloemfontein"],
    region: "Africa",
    subregion: "Southern Africa",
    population: 59308690,
    flags: { png: "https://flagcdn.com/w320/za.png", svg: "https://flagcdn.com/za.svg" },
    languages: { eng: "English", afr: "Afrikaans" },
    currencies: { ZAR: { name: "South African rand", symbol: "R" } },
    cca3: "ZAF"
  }
];