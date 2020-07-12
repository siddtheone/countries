export const fields = [
  'name',
  'nativeName',
  'population',
  'region',
  'subregion',
  'capital',
  'topLevelDomain',
  'currencies',
  'languages',
  'borders',
  'alpha3Code',
  'flag'
];
export const ENDPOINT = `https://restcountries.eu/rest/v2/all?${fields.join(';')}`;
