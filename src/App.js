import { HashRouter } from 'react-router-dom'
import GlobalStyle from './styles/GlobalStyles'
import Routes from './routes/'
import './App.css'
import { MainWrapper } from './styles/MainWrapper'
import NavBar from './components/navbar'
import Logo from './components/logo'

function App () {
  return (
    <HashRouter>
      <NavBar />
      <Logo />
      <MainWrapper>
        <GlobalStyle />
        <Routes />
      </MainWrapper>
    </HashRouter>
  )
}

export default App
