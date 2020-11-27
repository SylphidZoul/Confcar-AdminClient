import Calendar, { Accordion, Button } from '../../styles/Calendar'
import { ScreenTitle } from '../../styles/MainWrapper'
import { Select, ErrorMessage } from './styles'
import EditableTable from '../table'
import EditDay from '../../components/editDay'

const DetailsScreen = ({ state, onSelectEmployee, onSelectDate, onSubmit, onDelete, toggleEdit }) => {
  const { isFetching, employeesList, error, editMode, detailedDay } = state
  const { fullname, week, rawHours, ...tableData } = detailedDay
  return (
    <>
      <ScreenTitle>
        {isFetching ? 'Cargando...' : 'Detalles de días'}
      </ScreenTitle>
      <Select
        onChange={onSelectEmployee}
      >
        <option
          defaultValue={null}
        >
          Selecciona un empleado
        </option>
        {employeesList.map((employee, index) => (
          <option
            key={index}
            value={employee.employee_id}
          >
            {employee.fullname}
          </option>
        ))}
      </Select>
      {
        error
          ? <ErrorMessage>{error}</ErrorMessage>
          : Object.keys(tableData).length !== 0 && (
            <EditableTable
              fieldList={['Fecha', 'Inicio', 'Almuerzo', 'Fin Almuerzo', 'Fin', 'Inicio Pausa', 'Fin Pausa', 'Total']}
              itemList={[tableData]}
              editMode={editMode}
              toggleEdit={toggleEdit}
              handleDelete={onDelete}
              selectedItem={0}
              idKey='day_date'
              renderEditableItem={(item, index) => (
                <EditDay
                  day={item}
                  index={index}
                  toggleEdit={toggleEdit}
                  handleSubmit={onSubmit}
                  key={index}
                />
              )}
            />
          )
      }
      <Accordion show>
        <Button>
          Selecciona una fecha
        </Button>
        <Calendar onChange={onSelectDate} locale='es-419' />
      </Accordion>

    </>
  )
}

export default DetailsScreen
