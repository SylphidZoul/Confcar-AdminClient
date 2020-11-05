import React from 'react'
import { Ul, Li, Field, EmployeeLi, P } from '../../styles/Table'

const SummaryTable = ({ details, data }) => {
  return (
    <Ul>
      <Li columns={3}>
        <Field>Nombre</Field>
        <Field>Horas</Field>
        <Field>Dinero</Field>
      </Li>
      {
        details.map((employee, index) => (
          <EmployeeLi index={index} key={employee.rawHours + index} columns={3}>
            <P>{employee.fullname}</P>
            <P>{employee.weekHours}</P>
            <P>${employee.weekPay}</P>
          </EmployeeLi>
        ))
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
