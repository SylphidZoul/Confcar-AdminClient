import styled from 'styled-components'

export const Button = styled.button`
  position: absolute;
  top: 20px;
  left: 20px;
  height: 16px;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: var(--green);
  }
`

export const Arrow = styled.img`
  height: 100%;
  transform: rotate(180deg);
  margin-right: 4px;
`
