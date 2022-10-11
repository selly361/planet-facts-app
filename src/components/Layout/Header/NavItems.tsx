import { NONAME } from "dns";
import { NavLink } from "react-router-dom";
import React from "react";
import { planets } from "../../../global/theme";
import styled from "styled-components";

const StyledNavItems = styled.ul`
  display: flex;
  list-style: none;
  gap: 1rem;
  align-items: center;
  height: 100%;
`;

const NavItem = styled(NavLink)`
  text-decoration: none;
  font-family: ${({ theme }) => theme.fonts.primary};
  color: ${({ theme }) => theme.colors.whiteAlpha75};
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  font-size: .9rem;
  transition: 1s color ease;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 0;
    height: 4.54px;
    width: 0;
    transition: 1s width ease, 1s background-color ease;
  }

  &:hover {
    &::before {
      background-color: ${(props) => props.color};
      width: 100%;
    }
  }

  &.active {
    color: ${(props) => props.color};
    &::before {
      background-color: ${(props) => props.color};
      width: 100%;
    }
  }

  @media (max-width: 1050px) {
    &::before {
      display: none;
    }
  }
`;

const NavItems = () => {
  return (
    <StyledNavItems>
      {planets.map((planet) => (
        <NavItem
          to={planet.name}
          color={planet.color}
          className={(isActive) => isActive && "active"}
        >
          {planet.name.toUpperCase()}
        </NavItem>
      ))}
    </StyledNavItems>
  );
};

export default NavItems;
