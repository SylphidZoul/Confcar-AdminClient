import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import SignupScreen from '../components/signupScreen'
import Http from '../libs/http'

const Signup = () => {
  const [isFetching, setIsFetching] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const employee = {
      fullname: e.target[0].value,
      dni: e.target[1].value,
      password: e.target[2].value,
      mobile: e.target[3].value,
      hourly_pay: e.target[4].value,
      newEmployee: true
    }
    setIsFetching(true)
    try {
      const newEmployee = await Http.instance.post('employees', employee)
      setIsFetching(false)
      if (newEmployee.error) return setErrorMessage(newEmployee.body)
      history.replace('/employees')
    } catch (error) {
      setIsFetching(false)
      console.log('Sin conexión')
    }
  }

  return (
    <SignupScreen
      onSubmit={handleSubmit}
      isFetching={isFetching}
      errorMessage={errorMessage}
    />
  )
}

export default Signup
