import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  grid-column: 2 / span 8;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center; 
  align-items: center;
`
export const Input = styled.input`
  max-width: 80px;
  height: 20px;
  border: none;
  outline: none;
  text-align: center;
  border: 1px solid var(--green);
`
