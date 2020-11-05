import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo2.png'

const Logo = () => {
  return (
    <Img src={logo} alt='Confcar' />
  )
}

const Img = styled.img`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 50%;
  z-index: -1;
`

export default Logo
