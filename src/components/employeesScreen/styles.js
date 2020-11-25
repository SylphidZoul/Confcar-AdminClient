import styled from 'styled-components'
import { Link as HashLink } from 'react-router-dom'

export const Button = styled.button`
  color: var(--green);
  font-size: 16px;
  font-family: inherit;
  background: transparent;
  padding: 12px 16px;
  border: 1px solid var(--green);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  &:hover {
   background: var(--green);
   color: white;
  }
`
export const Link = styled(HashLink)`
  text-decoration: none;
  color: var(--green);
  padding: 12px 16px;
  border: 1px solid var(--green);
  border-radius: 4px;
  &:hover {
   background: var(--green);
   color: white;
  }
`
