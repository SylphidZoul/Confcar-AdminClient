import SummaryTable from '../summaryTable'
import Calendar, { Accordion, Button, Arrow } from '../../styles/Calendar'
import { H2, Div, Select } from './styles'
import { ScreenTitle } from '../../styles/MainWrapper'
import arrow from '../../assets/arrow.svg'

const Summary = ({ state, onClick, onChange, onChangeType }) => {
  const { isFetching, totalData, employeesData, showCalendar, typeString } = state
  return (
    <>
      <ScreenTitle>
        {isFetching ? 'Cargando...' : `Detalles de ${typeString}`}
      </ScreenTitle>
      <Accordion show={showCalendar}>
        <Button onClick={onClick}>
          Buscar otra fecha
          <Arrow
            src={arrow}
            alt='arrow'
            show={showCalendar}
          />
        </Button>
        <Calendar
          locale='es-419'
          onChange={onChange}
        />
      </Accordion>
      <Div>
        <label>Resumenes por:</label>
        <Select onChange={onChangeType}>
          <option value='week'>Semanas</option>
          <option value='month'>Meses</option>
          <option value='year'>Años</option>
        </Select>
      </Div>
      <Div>
        <H2>
          {typeString}&nbsp;
          {typeString === 'Semana'
            ? totalData.weekNumber
            : totalData.periodNumber}
        </H2>
        <SummaryTable
          data={totalData}
          details={employeesData}
          summaryType={typeString}
        />
      </Div>
    </>
  )
}

export default Summary
