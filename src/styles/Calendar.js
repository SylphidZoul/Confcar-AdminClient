import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './CustomCalendar.css'
import styled from 'styled-components'
import { FadeInFromBelow } from './Animations'

export const Accordion = styled.div`
  width: 50%;
  min-height: ${(props) => props.show ? '310px' : '38px'};
  max-height: ${(props) => props.show ? '400px' : '38px'};
  padding: 0px 20px 20px;
  margin: ${props => props.show ? '20px 0 40px' : '0'};
  border: 1px solid var(--green);
  border-radius: 12px;
  overflow-y: hidden;
  transition: all 420ms ease-out;
  color: var(--white);
  animation: ${FadeInFromBelow} 400ms ease-out;
`

export const Button = styled.button`
  position: relative;
  width: 100%;
  padding: 10px;
  margin-bottom: 4px;
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

export default Calendar
