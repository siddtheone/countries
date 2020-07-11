import React, {useContext} from 'react';
import StyledCountryList from './StyledCountriesList';
import { CountryContext } from '../../container/CountriesContainer';
import CountryCard from '../CountryCard/CountryCard';

function CountryList() {
  const {
    countries,
    isLoading,
    isError,
  } = useContext(CountryContext);

  return (
    <StyledCountryList>
      {isLoading && !isError && 'Loading...'}
      {!isLoading && isError && isError}
      {countries.map(c => <CountryCard {...c}/>)}
    </StyledCountryList>
  )
}

export default CountryList;
