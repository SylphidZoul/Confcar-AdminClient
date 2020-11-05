import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 80%;
  display: grid;
  grid-template-rows: 60px;
  color: var(--white);
  row-gap: 20px;
  padding-bottom: 30px;
`

export const H1 = styled.h1`
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: 600;
  color: var(--green);
  text-align: center;
  margin-bottom: 4px;
`
export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  font-family: 'JosefinSans';
`

export const Accordion = styled.div`
  justify-self: center;
  width: 60%;
  border: 1px solid var(--green);
  border-radius: 10px;
  padding: 0px 20px 20px;
  overflow-y: hidden;
  min-height: ${(props) => props.show ? '310px' : '38px'};
  max-height: ${(props) => props.show ? '400px' : '38px'};
  transition: all 420ms ease-out;
  align-self: center;
`

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 10px;
  margin-bottom: 5px;
  background: transparent;
  color: var(--white);
  outline: none;
  box-shadow: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  justify-self: center;
`

export const Arrow = styled.img`
  max-height: 14px;
  position: absolute;
  right: 0;
  transition: all 420ms ease-out;
  transform: ${props => props.show ? 'rotate(-90deg)' : 'rotate(90deg)'};
`
