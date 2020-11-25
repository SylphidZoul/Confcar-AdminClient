import styled, { css } from 'styled-components'
import { FadeInFromBelow } from '../../styles/Animations'

export const Wrapper = styled.div`
  width: 100%;
  height: 105%;
  display: grid;
  grid-template-rows: 32px 1fr;
`

export const H1 = styled.h1`
  font-size: 20px;
  letter-spacing: 5px;
  font-weight: 600;
  color: var(--green);
  text-align: center;
`

export const Form = styled.form`
  position: relative;
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid var(--green);
  justify-self: center;
  align-self: center;
  padding: 40px;
  border-radius: 8px;
  transition: all;
  animation: ${FadeInFromBelow} 400ms ease-out;
`

export const Label = styled.label`
  position: relative;
  width: 100%;
  color: var(--green);
  text-align: left;
  ${props => props.price && css`
    &::before {
      content: '$';
      position: absolute;
      bottom: -26px;
      left: 0;
      color: var(--green);
    }
  `}
`

export const Input = styled.input`
  width: 90%;
  padding-bottom: 4px;
  margin-bottom: 16px;
  outline: none;
  border: none;
  border-bottom: 1px solid var(--green);
  background: transparent;
  color: var(--white);
  font-size: 16px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const ImgContainer = styled.div`
  position: absolute;
  top: -32px;
  background-color: var(--white);
  border-radius: 500px;
  background: #191919E0;
`

export const Img = styled.img`
  width: 64px;
  height: 64px;
`

export const Button = styled.button`
  position: absolute;
  bottom: -24px;
  width: 80%;
  padding: 12px 16px;
  border-radius: 500px;
  border: 2px solid var(--green);
  background: var(--green);
  color: var(--white);
  font-size: 16px;
  letter-spacing: 1px;
  font-family: 'JosefinSans';
  text-align: 'center';
  outline: none;
  cursor: pointer;
  transition: all 250ms ease-out;
  &:hover {
    background: var(--purple);
  }
`

export const ErrorMessage = styled.span`
  position: absolute;
  bottom: 36px;
  width: 100%;
  color: var(--red);
  font-weight: red;
  text-align: center;
`
