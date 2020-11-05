import styled from 'styled-components'
import { NavLink as RouterLink } from 'react-router-dom'

export const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 10px;
  background: rgba(10, 10, 10, 0.8);
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
`
export const Link = styled(RouterLink)`
  font-family: 'JosefinSans';
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  color: var(--white);
  padding: 8px;
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: all 200ms ease-out;
  &:hover {
    color: var(--green);
    border-bottom-color: var(--green);
  }
  &[aria-current] {
    color: var(--green);
    border-bottom-color: var(--green);
  }
`
