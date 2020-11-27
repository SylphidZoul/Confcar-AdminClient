import { mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import { act } from 'react-dom/test-utils'
import Summaries from '../../routes/Summaries'
import axios from 'axios'
import { fetchedInitialData, fetchedYearData, fetchedSelectedDate } from '../../__mocks__/SummaryMock'

jest.mock('axios')

describe('Summaries Tests', () => {
  let wrapper

  beforeEach(async () => {
    axios.get.mockResolvedValueOnce(fetchedInitialData)
    wrapper = mount(<Summaries />)
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
    expect(wrapper.find('h1').text()).toBe('Detalles de Semana')
    // testing table structure
    expect(wrapper.find('ul').children().length).toBe(4)
    expect(wrapper.find('li').children().length).toBe(12)
    expect(wrapper.find('p').length).toBe(6)
    expect(wrapper.find('p').at(3).text()).toBe('Agustina')
  })

  test('Change Summary Type', async () => {
    axios.get.mockResolvedValueOnce(fetchedYearData)
    wrapper.find('select').simulate('change', { target: { value: 'year' } })
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(wrapper.find('h2').text()).toMatch(`Año${String.fromCharCode(160)}2020`)
    // testing table structure
    expect(wrapper.find('ul').children().length).toBe(4)
    expect(wrapper.find('li').children().length).toBe(12)
    expect(wrapper.find('p').length).toBe(6)
    expect(wrapper.find('p').at(3).text()).toBe('Agustina')
  })

  test('Change Date', async () => {
    axios.get.mockResolvedValueOnce(fetchedSelectedDate)
    wrapper.find('.react-calendar__month-view__days').children().at(14).simulate('click')
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0))
    })
    expect(wrapper.find('h2').text()).toMatch(`Semana${String.fromCharCode(160)}31`)
    // testing table structure
    expect(wrapper.find('ul').children().length).toBe(4)
    expect(wrapper.find('li').children().length).toBe(12)
    expect(wrapper.find('p').length).toBe(6)
    expect(wrapper.find('p').at(0).text()).toBe('Raúl')
  })
})
