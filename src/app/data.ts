export interface Country {
  name: string;
  capital: string;
  alpha3Code: string;
  population: number;
  flag: string;
}

export const dataset: Array<Country> = [
  {
    name: 'Iran',
    capital: 'Tehran',
    alpha3Code: 'IRN',
    population: 79369900,
    flag: 'https://restcountries.eu/data/irn.svg',
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    alpha3Code: 'TUR',
    population: 78741053,
    flag: 'https://restcountries.eu/data/tur.svg',
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    alpha3Code: 'DEU',
    population: 81770900,
    flag: 'https://restcountries.eu/data/deu.svg',
  },
  {
    name: 'France',
    capital: 'Paris',
    alpha3Code: 'FRA',
    population: 66710000,
    flag: 'https://restcountries.eu/data/fra.svg',
  },
  {
    name: 'Italy',
    capital: 'Rome',
    alpha3Code: 'ITA',
    population: 60665551,
    flag: 'https://restcountries.eu/data/ita.svg',
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    alpha3Code: 'SRB',
    population: 7076372,
    flag: 'https://restcountries.eu/data/srb.svg',
  },
  {
    name: 'United Kingdom',
    capital: 'London',
    alpha3Code: 'GBR',
    population: 65110000,
    flag: 'https://restcountries.eu/data/gbr.svg',
  },
  {
    name: 'United States',
    capital: 'Washington D.C',
    alpha3Code: 'USA',
    population: 323947000,
    flag: 'https://restcountries.eu/data/usa.svg',
  },
  {
    name: 'Russia',
    capital: 'Moscow',
    alpha3Code: 'RUS',
    population: 146599183,
    flag: 'https://restcountries.eu/data/rus.svg',
  },
  {
    name: 'China',
    capital: 'Beijing',
    alpha3Code: 'CHN',
    population: 1377422166,
    flag: 'https://restcountries.eu/data/chn.svg',
  },
  {
    name: 'India',
    capital: 'New Delhi',
    alpha3Code: 'IND',
    population: 1295210000,
    flag: 'https://restcountries.eu/data/ind.svg',
  },
];
