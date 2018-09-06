import { shallow, mount } from 'enzyme'
import Phone from '../../components/Phone'

describe("<Phone /> component", () => {
	it("Renders a single phone", () => {
		const phone = initialState.phones[0]
		const wrapper = shallow(<Phone phone = {phone} index = {1}/>);
		expect(wrapper.find(".phone").length).toBe(1);
	})
})
