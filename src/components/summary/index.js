import React from 'react'
import SummaryTable from '../summaryTable'
import Calendar from '../../styles/Calendar'
import arrow from '../../assets/arrow.svg'
import { Wrapper, H1, H2, Accordion, Button, Arrow } from './styles'

const Summary = ({ isFetching, data, details, showCalendar, onClick, onChange }) => {
  if (isFetching) {
    return (
      <H1>Cargando...</H1>
    )
  }

  return (
    <Wrapper>
      <div>
        <H1>
          Resumen de semanas
        </H1>
        <H2>Semana {data.weekNumber}</H2>
      </div>
      <Accordion show={showCalendar}>
        <Button onClick={onClick}>
          Buscar otra semana
          <Arrow src={arrow} alt='arrow' show={showCalendar} />
        </Button>
        <Calendar locale='es-419' onChange={onChange} />
      </Accordion>
      <SummaryTable data={data} details={details} />
    </Wrapper>
  )
}

export default Summary
