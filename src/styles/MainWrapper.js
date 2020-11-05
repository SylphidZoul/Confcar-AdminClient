import styled from 'styled-components'

export const MainWrapper = styled.main`
  display: grid;
  justify-items: center;
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 40px 60px;
  background: rgba(10, 10, 10, 0.8);
  border-radius: 5px;
  z-index: 2;
  overflow-y: scroll;
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
