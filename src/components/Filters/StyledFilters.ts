import styled from 'styled-components';
import {
  themeColorsMixing,
  maxCenterMixing,
  shadowMixing
} from '../Styled';

export const StyledFilters = styled.div``;

export const StyledFiltersMaxCenter = styled.div`
  ${maxCenterMixing};

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledSearch = styled.div`
  ${shadowMixing}
  ${themeColorsMixing}
  border-radius: 5px;
  display: flex;
  padding: .5em;
  justify-content: space-between;
  align-items: center;
`;

export const StyledInput = styled.input`
  ${themeColorsMixing}
  border: 0;
  outline: none;
  width: 90%;
  font-size: 1.2em;
`;

export const StyledSelect = styled.select`
  ${shadowMixing}
  ${themeColorsMixing}
  padding: .5em;
  border-radius: 5px;
  margin-top: 1em;
  border: none;
  outline: none;

  @media (min-width: 600px) {
    margin-top: 0;
  }
`;

