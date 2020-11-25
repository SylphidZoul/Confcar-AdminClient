import styled from 'styled-components'
import { FadeInFromBelow } from '../../styles/Animations'

export const Select = styled.select`
  background: transparent;
  color: white;
  padding: 12px;
  border: 1px solid var(--green);
  border-radius: 8px;
  outline: none;
  font-size: 16px;
  margin-bottom: 12px;
  transition: all;
  animation: ${FadeInFromBelow} 400ms ease-out;
  cursor: pointer;
  & option {
    padding: 4px 0;
    background-color: #121c22;
  }
`
export const ErrorMessage = styled.p`
  color: var(--red);
  font-size: 18px;
  margin-bottom: 16px;
`
