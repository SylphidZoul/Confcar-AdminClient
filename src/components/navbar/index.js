import React from 'react'
import { Nav, Ul, Link } from './styles'

const NavBar = () => {
  return (
    <Nav>
      <Ul>
        <li>
          <Link to='/summary'>
            Resumenes
          </Link>
        </li>
        <li>
          <Link to='/employees'>
            Empleados
          </Link>
        </li>
        <li>
          <Link to='/details'>
            Detalles
          </Link>
        </li>
      </Ul>
    </Nav>
  )
}

export default NavBar
