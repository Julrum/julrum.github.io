import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { MenuBarProps } from './MenuBar.type';

type StyledBarProp = Pick<MenuBarProps, 'scrolled'>;

export const StyledBar = styled.div<StyledBarProp>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: white;
  display: flex;
  justify-content: center;
  transition: top 0.2s ease-in-out;

  /* box-shadow: 0px 2px 0px gray; */

  ${(props) =>
    props.scrolled &&
    css`
      /* background-color: red; */
    `}
`;

export const MenuList = styled.div`
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  width: 1728px;
  @media (max-width: 1920px) {
    width: 1376px;
  }
  @media (max-width: 1440px) {
    width: 1024px;
  }
`;

export const MenuItem = styled(Link)`
  cursor: pointer;
  color: black;
  padding: 10px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header1};
`;