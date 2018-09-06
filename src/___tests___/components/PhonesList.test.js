import { shallow, mount } from 'enzyme'
import PhonesList from '../../components/PhonesList'
import Phone from '../../components/Phone'
describe("<PhonesList /> component", () => {
	it("Renders the list of phones", () => {
		const phones = initialState.phones
		const wrapper = shallow(<PhonesList phones = {phones}/>);
		expect(wrapper.find(Phone).length).toBe(33);
		expect(wrapper.find(Phone).first().props().phone.props.children.props.device.displayName).toMatch("Galaxy Note9")
	})
})
