import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import Phone from './Phone';

const PhonesListWrapEl = styled.div`
	max-width:1272px;
	margin: 0 auto;
	position: relative;
`;

const PhonesListEl = styled.div`
	display: flex;
	flex-flow: row wrap;
`;

export default function PhonesList ({
	phones,
	toCompare
}){
	return(
		<PhonesListWrapEl>
			<h2>Phones List</h2>
			<PhonesListEl className = "devices-container">
			{
				Object.keys(phones).map( i => {
	                return (
		                <Phone key = {i} index = {i} phone = {phones[i]} />
		            )
	            })
			}
			</PhonesListEl>
		</PhonesListWrapEl>
	)
}

PhonesList.propTypes = {
	test: propTypes.string
}