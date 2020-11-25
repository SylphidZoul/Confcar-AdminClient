import { ItemLi, P, EditDiv, MiniButtons } from '../../styles/Table'
import Pencil from '../../assets/pencil'
import Thrash from '../../assets/thrash'

const TableItem = ({ item, index, toggleEdit, handleDelete, id }) => {
  const keys = Object.keys(item)
  return (
    <ItemLi index={index} columns={keys.length}>
      {
        keys.map((key, index) => (
          <P key={index}>{item[key]}</P>
        ))
      }
      <EditDiv>
        <MiniButtons onClick={() => toggleEdit(index)}>
          <Pencil />
        </MiniButtons>
        <MiniButtons onClick={() => handleDelete(id)}>
          <Thrash />
        </MiniButtons>
      </EditDiv>
    </ItemLi>
  )
}

export default TableItem
