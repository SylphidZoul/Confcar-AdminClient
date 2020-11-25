import styled from 'styled-components'
import { FadeInFromBelow } from '../../styles/Animations'

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-family: 'JosefinSans';
  transition: all 200ms ease-out;
  animation: ${FadeInFromBelow} 400ms ease-out;
`

export const Div = styled.div`
  transition: all 200ms ease-out;
  animation: ${FadeInFromBelow} 400ms ease-out;
`

export const Select = styled.select`
  background: transparent;
  color: white;
  padding: 8px;
  border: 1px solid var(--green);
  border-radius: 12px;
  outline: none;
  font-size: 16px;
  margin-left: 12px;
  margin-bottom: 12px;
  transition: all;
  cursor: pointer;
  & option {
    padding: 4px 0;
    background-color: #121c22;
  }
`
