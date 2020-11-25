import styled from 'styled-components'
import { FadeInFromBelow } from './Animations'

export const Ul = styled.ul`
  width: 100%;
  min-width: 400px;
  border: 2px solid #0000001f;
  border-radius: 4px;
  color: var(--white);
  transition: all 200ms ease-in;
  animation: ${FadeInFromBelow} 400ms ease-out;
`

export const Li = styled.li`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
  justify-items: center;
  align-items: center;
  padding: 16px;
  background: #ffffff13;
`

export const ItemLi = styled(Li)`
  position: relative;
  background: ${props => props.index % 2 ? '#ffffff0a' : '#ffffff05'};
  padding: 12px;
  margin: 2px 0;
  border-radius: 4px;
  &:hover div {
    display: flex;
  }
`

export const Field = styled.h3`
  font-size: 16px;
  color: var(--green);
  font-weight: 400;
  text-align: center;
`

export const P = styled.p`
  font-size: 14px;
  text-align: center;
`

export const EditDiv = styled.div`
  position: absolute;
  right: -52px;
  height: 100%;
  width: 52px;
  display: none;
  justify-content: space-around;
  align-items: center;
  `

export const MiniButtons = styled.button`
  width: 16px;
  height: 100%;
  padding: 12px 0;
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
`
