import styled from 'styled-components'

export const Ul = styled.ul`
  align-self: start;
  border: 2px solid #0000001f;
  border-radius: 4px;
  color: var(--white);
`

export const Li = styled.li`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  justify-items: center;
  padding: 16px;
  background: #ffffff13;
`
export const EmployeeLi = styled(Li)`
  background: ${props => props.index % 2 ? '#ffffff0a' : '#ffffff05'};
  padding: 12px;
  margin: 2px 0;
  border-radius: 4px;
`

export const Field = styled.h3`
  font-size: 16px;
  color: var(--green);
  font-weight: 400;
`

export const P = styled.p`
  font-size: 14px;
`
