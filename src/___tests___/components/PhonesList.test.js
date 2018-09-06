import { shallow, mount } from 'enzyme'
import PhonesList from '../../components/PhonesList'

describe("<PhonesList /> component", () => {
	it("Renders the list of phones", () => {
		const phones = initialState
		const wrapper = shallow(<PhonesList phones = {phones}/>);
		expect(wrapper.find(".phone").length).toBe(33);
		console.log(wrapper.find(".phone").first().props())
		expect(wrapper.find(".phone").first().props().children).toMatch("Galaxy Note9")
	})
})
