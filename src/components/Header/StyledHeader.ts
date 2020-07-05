import styled from 'styled-components';
import {themeColorsMixing, maxCenterMixing} from '../Styled';

const Header = styled.header`
  ${themeColorsMixing}
`;

export const HeaderContainer = styled.div`
  ${maxCenterMixing}
  display: flex;
  justify-content: space-between;
`;

export const AppTitle = styled.h1``;

export const ThemeButton = styled.button`
  ${themeColorsMixing}
  border: none;
  outline: none;
  padding: 1em 2em;
  background: transparent;
  cursor: pointer;
  font-size: 1.2em;
  span {
    padding-right: 1em;
  }
`;

export default Header;
