import { ItemLi, P, EditDiv, MiniButtons } from '../../styles/Table'
import { Form, Input } from './styles'
import Confirm from '../../assets/confirm'
import Cancel from '../../assets/cancel'

const EditDay = ({ day, index, toggleEdit, handleSubmit }) => {
  return (
    <ItemLi index={index} key={index} columns={8}>
      <P>{day.day_date}</P>
      <Form onSubmit={(e) => handleSubmit(e, day.day_date)}>
        <Input type='time' min='07:00' max='19:00' defaultValue={day.day_start} />
        <Input type='time' min='07:00' max='19:00' defaultValue={day.lunch_start} />
        <Input type='time' min='07:00' max='19:00' defaultValue={day.lunch_end} />
        <Input type='time' min='07:00' max='19:00' defaultValue={day.day_end} />
        <Input type='time' min='07:00' max='19:00' defaultValue={day.extraPause_start} />
        <Input type='time' min='07:00' max='19:00' defaultValue={day.extraPause_end} />
        <P>{day.workedHours}</P>
        <EditDiv>
          <MiniButtons type='submit'><Confirm /></MiniButtons>
          <MiniButtons onClick={toggleEdit}><Cancel /></MiniButtons>
        </EditDiv>
      </Form>
    </ItemLi>
  )
}

export default EditDay
