import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { act } from 'react-dom/test-utils'
import Details from '../../routes/Details'
import axios from 'axios'
import { fetchedInitialData } from '../../__mocks__/EmployeesMock'
import { detailedDayMock } from '../../__mocks__/DetailsMock'

jest.mock('axios')

describe('Employees Tests', () => {
  let wrapper

  beforeEach(async () => {
    axios.get.mockResolvedValueOnce(fetchedInitialData)
    wrapper = mount(<Details />)
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

  test('Initial rendering', () => {
    expect(wrapper.find('h1').text()).toBe('Detalles de días')
    expect(wrapper.find('select').children().length).toBe(fetchedInitialData.data.body.length + 1)
  })

  test('Get an Employee detailed day', async () => {
    axios.get.mockResolvedValueOnce({ data: { body: detailedDayMock } })
    wrapper.find('select').simulate('change', { target: { value: '2' } })
    wrapper.find('.react-calendar__month-view__days').children().at(14).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    // testing table structure
    expect(wrapper.find('ul').children().length).toBe(2)
    expect(wrapper.find('li').children().length).toBe(17)
    expect(wrapper.find('p').length).toBe(8)
    expect(wrapper.find('p').first().text()).toBe('10/8/2020')
  })

  test('Edit a day and cancel', async () => {
    axios.get.mockResolvedValueOnce({ data: { body: detailedDayMock } })
    wrapper.find('select').simulate('change', { target: { value: '2' } })
    wrapper.find('.react-calendar__month-view__days').children().at(14).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    wrapper.find('ul button').first().simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('form').length).toBe(1)
    expect(wrapper.find('form').children().length).toBe(8)
    wrapper.find('form button').at(1).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    wrapper.update()
    expect(wrapper.find('ul').children().length).toBe(2)
    expect(wrapper.find('li').children().length).toBe(17)
    expect(wrapper.find('p').length).toBe(8)
    expect(wrapper.find('p').first().text()).toBe('10/8/2020')
  })
})
