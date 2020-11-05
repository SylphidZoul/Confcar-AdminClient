import React, { useState, useEffect } from 'react'
import { Ul, Li, Field, EmployeeLi, P } from '../styles/Table'
import Http from '../libs/http'

const Employees = () => {
  const [employeeList, setEmployeeList] = useState([])
  const [isFetching, setIsFetching] = useState(true)

  const fetchEmployees = async () => {
    try {
      const data = await Http.instance.get('employees')
      setEmployeeList(data.body)
      setIsFetching(false)
    } catch (error) {
      console.log('error fetch')
    }
  }

  useEffect(() => {
    fetchEmployees()
  }, [])

  useEffect(() => {
    console.log(employeeList)
  }, [employeeList])

  if (isFetching) {
    return (
      <h1>Cargando...</h1>
    )
  }
  return (
    <>
      <h1 style={{ color: 'var(--green)', fontSize: '24px' }}>Empleados activos</h1>
      <Ul>
        <Li columns={5}>
          <Field>ID</Field>
          <Field>Nombre</Field>
          <Field>DNI</Field>
          <Field>Contraseña</Field>
          <Field>Telefono</Field>
        </Li>
        {
        employeeList.map((employee, index) => (
          <EmployeeLi index={index} key={index} columns={5}>
            <P>{employee.employee_id}</P>
            <P>{employee.fullname}</P>
            <P>{employee.dni}</P>
            <P>{employee.password}</P>
            <P>{employee.mobile}</P>
          </EmployeeLi>
        ))
      }
      </Ul>
    </>
  )
}

export default Employees
