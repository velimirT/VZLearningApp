import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const PhoneEl = styled.div`
	width: 25%;
	padding: 15px;
	box-sizing: border-box;
	border: 1px solid #ccc;
	margin-right: -1px;
	margin-bottom: -1px;
	background-color: #f6f6f6;
	&:hover{
		background-color: #fff
	}
	cursor: pointer;
`;

const OfferTextEl = styled.h3`
	max-width: 100%;
	text-align: left;
	line-height: 1.67;
	height: 36px;
	font-size: 12px;
	color: #007cbc;
	padding-right: 15px;
	&:after{
		font-family: vzwIcons;
		content: 'i';
		width:18px;
		height: 18px;
		padding: 0;
		text-align: center;
		background-color: #007cbc;
		color: #fff;
		border-radius: 50%;
		position: absolute;
		margin-left: 5px;
	}
`;

const SeparatorEl = styled.hr`
	background-color: #000;
	margin-bottom: 8px;
	height: 4px;
	border: none;
`;

const BrandPriceEl = styled.div`
	width: 60%;
	min-height: 87px;
	line-height: .94;
`;

const PhoneNameEl = styled.p`
	font-size: 16px;
	line-height: .94;
	text-align: left;
	font-weight: 600;
`;

const StartsAtEl = styled.p`
	line-height: 1.4;
	font-size: 10px;
	text-align: left;
`;

const PriceEl = styled.p`
	line-height: .94;
	font-size: 16px;
	margin-bottom:12px;
	text-align: left;
`;

export default function Phone({
	phone,
	index
}){	
	return(
		<PhoneEl className = "phone">
			<OfferTextEl>Upgrade & get $100 off, or add a new line & get $300 off on us. Trade-in required.</OfferTextEl>
			<img src = {phone.props.children.props.device.imageUrl} alt = {phone.props.children.props.device.displayName} />
			<SeparatorEl></SeparatorEl>
			<BrandPriceEl>
				<PhoneNameEl>
					{phone.props.children.props.device.displayName.replace("&reg", " &#174; ")}
				</PhoneNameEl>
				<StartsAtEl>
					Starts at
				</StartsAtEl>
				<PriceEl>
					${
						phone.props.children.props.device.productPriceInfo.selectedContractInfo ? 
						phone.props.children.props.device.productPriceInfo.selectedContractInfo.originalPrice+"/mo"
						: phone.props.children.props.device.productPriceInfo.fullRetailContractInfo.discountedPrice
					}
				</PriceEl>
			</BrandPriceEl>
	    </PhoneEl>
	);
}