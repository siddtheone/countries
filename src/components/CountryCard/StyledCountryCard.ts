import styled from 'styled-components';
import { themeColorsMixing } from '../Styled';

export const StyledCountryCard = styled.section`
  ${themeColorsMixing}
  border-radius: 5px;
  display: grid;
  grid-template-rows: 150px auto;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, .5);
`;

export const StyledImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;

export const StyledInfo = styled.div`
  padding: 20px;
`;

export const CountryHeader = styled.h2`
  font-size: 1.1rem;
  margin-top: 0;
`;
