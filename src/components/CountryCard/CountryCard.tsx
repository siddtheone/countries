import React from 'react';
import {
  StyledCountryCard,
  StyledImg,
  StyledInfo,
  CountryHeader
} from './StyledCountryCard';
import { Country } from '../../models';
import { Link } from 'react-router-dom';
import InfoRow from '../InfoRow/InfoRow';

type CountryCardProps = Pick<Country,
  'name'|
  'alpha3Code'|
  'flag'|
  'population'| 'region'| 'capital'
>;

function CountryCard(props: CountryCardProps) {
  const {
    name, flag,
    alpha3Code, population, region, capital
  } = props;
  return (
    <StyledCountryCard>
      <Link to={`/${alpha3Code}`}>
        <StyledImg alt={`Flag of ${name}`} src={flag} />
      </Link>
      <StyledInfo>
        <CountryHeader>{name}</CountryHeader>
        <InfoRow name="Population" value={population} />
        <InfoRow name="Region" value={region} />
        <InfoRow name="Capital" value={capital} />
      </StyledInfo>
    </StyledCountryCard>
  )
}

export default CountryCard;
