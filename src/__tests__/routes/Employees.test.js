import { mount } from 'enzyme'
import { HashRouter } from 'react-router-dom'
import toJson from 'enzyme-to-json'
import { act } from 'react-dom/test-utils'
import Employees from '../../routes/Employees'
import axios from 'axios'
import { fetchedInitialData } from '../../__mocks__/EmployeesMock'

jest.mock('axios')

describe('Employees Tests', () => {
  let wrapper

  beforeEach(async () => {
    axios.get.mockResolvedValueOnce(fetchedInitialData)
    wrapper = mount(
      <HashRouter>
        <Employees />
      </HashRouter>
    )
    expect(wrapper.exists).toBeTruthy()
    expect(wrapper.find('h1').text()).toBe('Cargando...')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

  test('Validate Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  test('Initial Rendering', () => {
    expect(wrapper.find('h1').text()).toBe('Empleados Activos')
    // testing table structure
    expect(wrapper.find('ul').children().length).toBe(4)
    expect(wrapper.find('li').children().length).toBe(27)
    expect(wrapper.find('p').length).toBe(18)
    expect(wrapper.find('p').at(8).text()).toBe('Carlos')
    expect(wrapper.find('ul button').length).toBe(6)
  })

  test('Inactive Employees not found', async () => {
    axios.get.mockResolvedValueOnce({ data: { body: [] } })
    wrapper.find('button').at(6).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('h1').text()).toBe('Empleados inactivos')
    expect(wrapper.find('h2').text()).toBe('No se encontraron empleados.')
  })

  test('Enable edit mode', async () => {
    wrapper.find('button').first().simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('form input').length).toBe(5)
    expect(wrapper.find('p').length).toBe(13)
  })

  test('Disable edit mode', async () => {
    wrapper.find('button').first().simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('form').length).toBe(1)
    wrapper.find('button').at(1).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('ul').children().length).toBe(4)
    expect(wrapper.find('li').children().length).toBe(27)
    expect(wrapper.find('p').length).toBe(18)
  })

  test('Send an Employee to inactive list', async () => {
    axios.delete.mockResolvedValueOnce({ data: { body: {} } })
    wrapper.find('li button').at(1).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('ul').children().length).toBe(3)
  })
})
