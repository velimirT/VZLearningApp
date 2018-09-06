import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PhonesList from './PhonesList';
import { addToCompare, removeFromCompare } from '../store/Actions';

export const PhonesListWrap = connect(
	store => 
		({
			phones: store.phones,
			toCompare: store.toCompare
		}),
	dispatch => 
		({
		})
)(PhonesList);
