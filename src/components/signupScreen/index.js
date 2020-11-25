import { Wrapper, Form, ImgContainer, Img, Label, Input, Button, H1, ErrorMessage } from './styles'
import BackButton from '../backButton'
import Profile from '../../assets/profile.png'

const SignupScreen = ({ isFetching, errorMessage, onSubmit }) => {
  return (
    <Wrapper>
      <BackButton back='Empleados' />
      <H1>
        Registrar empleados
      </H1>
      <Form onSubmit={onSubmit}>
        <ImgContainer>
          <Img src={Profile} alt='profile-icon' />
        </ImgContainer>
        <Label htmlFor='name'>Nombre</Label>
        <Input
          name='name'
          type='text'
        />
        <Label htmlFor='dni'>D.N.I.</Label>
        <Input
          name='dni'
          type='number'
          min={1}
          max={99999999}
        />
        <Label htmlFor='password'>Contraseña</Label>
        <Input
          name='password'
          type='text'
        />
        <Label htmlFor='phone'>Teléfono</Label>
        <Input
          name='phone'
          type='number'
          min={1}
          max={9999999999}
        />
        <Label htmlFor='price' price>Pago/Hora</Label>
        <Input
          name='price'
          type='number'
        />
        {
          errorMessage &&
            <ErrorMessage>
              {errorMessage}
            </ErrorMessage>
        }
        <Button>{isFetching ? 'Cargando...' : 'Registrar'}</Button>
      </Form>
    </Wrapper>
  )
}

export default SignupScreen
