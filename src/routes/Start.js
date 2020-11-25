import Confcar from '../assets/confcar_round.png'
import { ScreenTitle } from '../styles/MainWrapper'

const Start = () => {
  return (
    <>
      <ScreenTitle>Bienvenido</ScreenTitle>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'start' }}>
        <img src={Confcar} alt='Confcar' />
      </div>
    </>
  )
}

export default Start
