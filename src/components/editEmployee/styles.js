import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  grid-column: 2 / span 5;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center; 
  align-items: center;
`

export const Input = styled.input`
  max-width: 90px;
  height: 20px;
  border: none;
  outline: none;
  text-align: center;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`
