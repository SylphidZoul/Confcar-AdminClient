import styled from 'styled-components'

export const MainWrapper = styled.main`
  position: relative;
  z-index: 2;
  display: grid;
  row-gap: 20px;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 40px 60px;
  border-radius: 5px;
  background: rgba(10, 10, 10, 0.8);
  overflow-y: scroll;
  color: var(--white);
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px black; 
  border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
  background: #329A9770; 
  border-radius: 10px;
  border: 2px solid black;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: var(--green);
  } 
`

export const ScreenTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 20px;
  letter-spacing: 5px;
  text-align: center;
  font-weight: 600;
  color: var(--green);
`
