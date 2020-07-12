import React, {useContext, useState} from 'react';
import StyledCountryList from './StyledCountriesList';
import { CountryContext } from '../../container/CountriesContainer';
import CountryCard from '../CountryCard/CountryCard';
import Filters from '../Filters/Filters';

function CountryList() {
  const {
    countries,
    isLoading,
    isError,
  } = useContext(CountryContext);

  const [search, setSearch] = useState<string>('');
  const [region, setRegion] = useState<string>('');

  const setFilter = (param: {name: string, value: string}) => {
    const method = param.name === 'search' ? setSearch : setRegion;
    method(param.value);
  }

  const filteredCountries = countries
  .filter(({name}) => search === '' || name.toLowerCase().includes(search.toLowerCase()))
  .filter((country) => region === '' || country.region.toLowerCase() === region);

  return (
    <>
      <Filters
        search={search}
        region={region}
        onFilter={setFilter}
      />
      <StyledCountryList>
        {isLoading && !isError && 'Loading...'}
        {!isLoading && isError && isError}
        {filteredCountries.length > 0 && filteredCountries.map(c => <CountryCard key={c.alpha3Code} {...c}/>)}
        {!isLoading && filteredCountries.length === 0 && <div>No results</div>}
      </StyledCountryList>
    </>
  )
}

export default CountryList;
