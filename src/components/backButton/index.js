import { useHistory } from 'react-router-dom'
import { Button, Arrow } from './styles'
import arrow from '../../assets/arrow.svg'

const BackButton = ({ back }) => {
  const history = useHistory()

  const handleClick = () => {
    history.goBack()
  }

  return (
    <Button onClick={handleClick}>
      <Arrow src={arrow} alt='arrow-image' />
      Volver a {back}
    </Button>
  )
}

export default BackButton
