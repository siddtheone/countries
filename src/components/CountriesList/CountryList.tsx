import React, {useContext, useState} from 'react';
import StyledCountryList from './StyledCountriesList';
import { CountryContext } from '../../container/CountriesContainer';
import CountryCard from '../CountryCard/CountryCard';
import Filters from '../Filters/Filters';
import {Info} from '../Styled';

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
      {isLoading && !isError && <Info>Loading...</Info>}
      {!isLoading && isError && <Info>isError</Info>}
      {!isLoading && filteredCountries.length === 0 && <div>No results</div>}
      <StyledCountryList>
        {filteredCountries.length > 0 && filteredCountries.map(c => <CountryCard key={c.alpha3Code} {...c}/>)}
      </StyledCountryList>
    </>
  )
}

export default CountryList;
