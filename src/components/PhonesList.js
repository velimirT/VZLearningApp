import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

export default function PhonesList ({
	phones,
	toCompare
}){
	console.log(phones);
	return(
		<div className = "devices-container">
			<h2>Phones List</h2>
			{
				Object.keys(phones).map( i => {
	                return (
	                	<div key = {i} className = "phone">
	                		{phones[i].props.children.props.device.displayName}
		                </div>
		            )
	            })
			}
		</div>
	)
}

PhonesList.propTypes = {
	test: propTypes.string
}