import { Ul, Li, Field } from '../../styles/Table'
import TableItem from '../tableItem'

const EditableTable = ({
  fieldList,
  itemList,
  selectedItem,
  editMode,
  toggleEdit,
  renderEditableItem,
  handleDelete,
  idKey
}) => {
  return (
    <Ul>
      <Li columns={fieldList.length}>
        {
          fieldList.map((field, index) => (
            <Field key={index}>
              {field}
            </Field>
          ))
        }
      </Li>
      {
        itemList.map((item, index) => {
          if (editMode && selectedItem === index) {
            return renderEditableItem(item, index)
          }
          return (
            <TableItem
              key={index}
              index={index}
              item={item}
              toggleEdit={toggleEdit}
              handleDelete={handleDelete}
              id={item[idKey]}
            />
          )
        })
      }
    </Ul>
  )
}

export default EditableTable
