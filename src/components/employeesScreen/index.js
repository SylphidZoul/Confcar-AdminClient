import EditableTable from '../table'
import { ScreenTitle } from '../../styles/MainWrapper'
import { Button, Link } from './styles'
import EditEmployee from '../editEmployee'

const EmployeesScreen = ({ state, toggleEdit, onSubmit, onDelete, toggleInactives }) => {
  const { isFetching, employeesList, selectedEmployee, editMode, showInactives } = state
  return (
    <>
      <ScreenTitle>
        {isFetching ? 'Cargando...' : (showInactives ? 'Empleados inactivos' : 'Empleados Activos')}
      </ScreenTitle>
      {employeesList.length === 0
        ? <h2>No se encontraron empleados.</h2>
        : <EditableTable
            fieldList={['Id', 'Nombre', 'DNI', 'Contraseña', 'Teléfono', 'Pesos/Hora']}
            itemList={employeesList}
            selectedItem={selectedEmployee}
            editMode={editMode}
            toggleEdit={toggleEdit}
            handleDelete={onDelete}
            idKey='employee_id'
            renderEditableItem={(item, index) => (
              <EditEmployee
                key={index}
                index={index}
                employee={item}
                toggleEdit={toggleEdit}
                handleSubmit={onSubmit}
              />
            )}
          />}
      <Link to='/employees/signup'>Agregar nuevo empleado</Link>
      <Button onClick={toggleInactives}>
        Ver empleados {showInactives ? 'activos' : 'inactivos'}
      </Button>
    </>
  )
}

export default EmployeesScreen
