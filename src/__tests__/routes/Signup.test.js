import { mount } from 'enzyme'
import { HashRouter } from 'react-router-dom'
import toJson from 'enzyme-to-json'
import Signup from '../../routes/Signup'

describe('Employees Tests', () => {
  let wrapper

  beforeEach(async () => {
    wrapper = mount(
      <HashRouter>
        <Signup />
      </HashRouter>
    )
    expect(wrapper.exists).toBeTruthy()
  })

  test('Validate Snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
