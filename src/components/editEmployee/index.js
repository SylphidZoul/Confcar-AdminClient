import { ItemLi, P, EditDiv, MiniButtons } from '../../styles/Table'
import { Form, Input } from './styles'
import Confirm from '../../assets/confirm'
import Cancel from '../../assets/cancel'

const EditEmployee = ({ employee, index, toggleEdit, handleSubmit }) => {
  return (
    <ItemLi index={index} key={index} columns={6}>
      <P>{employee.employee_id}</P>
      <Form onSubmit={(e) => handleSubmit(e, employee.employee_id)}>
        <Input type='text' defaultValue={employee.fullname} />
        <Input type='number' min={1} max={100000000} defaultValue={employee.dni} />
        <Input type='text' defaultValue={employee.password} />
        <Input type='number' min={1} max={10000000000} defaultValue={employee.mobile} />
        <Input type='number' min={1} max={1000} defaultValue={employee.hourly_pay} />
        <EditDiv>
          <MiniButtons type='submit'><Confirm /></MiniButtons>
          <MiniButtons onClick={toggleEdit}><Cancel /></MiniButtons>
        </EditDiv>
      </Form>
    </ItemLi>
  )
}

export default EditEmployee
