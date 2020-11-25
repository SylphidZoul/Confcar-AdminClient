import { Ul, Li, Field, ItemLi, P } from '../../styles/Table'

const SummaryTable = ({ details, data, summaryType }) => {
  return (
    <Ul>
      <Li columns={3}>
        <Field>Nombre</Field>
        <Field>Horas</Field>
        <Field>Dinero</Field>
      </Li>
      {
        details.map((employee, index) => {
          if (summaryType === 'Semana') {
            return (
              <ItemLi index={index} key={employee.rawHours + index} columns={3}>
                <P>{employee.fullname}</P>
                <P>{employee.weekHours}</P>
                <P>${employee.weekPay}</P>
              </ItemLi>
            )
          } else {
            return (
              <ItemLi index={index} key={employee.rawHours + index} columns={3}>
                <P>{employee.fullname}</P>
                <P>{employee.hours}</P>
                <P>${employee.pay}</P>
              </ItemLi>
            )
          }
        })
      }
      <Li columns={3}>
        <Field>Total</Field>
        <Field>{data.hours}</Field>
        <Field>${data.pay}</Field>
      </Li>
    </Ul>
  )
}

export default SummaryTable
