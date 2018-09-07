import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

const PhoneEl = styled.div`
	position: relative;
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
	&:hover .details_wrap{
		margin-bottom: 40px;
	}
	&:hover > .buttons_wrap{
		opacity:1;
		bottom: 30px;
	}
`;

const OfferTextEl = styled.h3`
	max-width: 100%;
	text-align: left;
	line-height: 1.67;
	height: 36px;
	font-size: 12px;
	color: #007cbc;
	padding-right: 15px;
	margin: 16px 0 67px;
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

const DetailsWrap = styled.div`
	position: absolute;
	width: calc(100% - 30px);
	bottom: 15px;
	left: -1;
	right: -1;
	transition: all 0.2s ease;
`;

const SeparatorEl = styled.hr`
	background-color: #000;
	margin-bottom: 8px;
	height: 4px;
	border: none;
`;

const PriceDetailsEl = styled.div`
	display: flex;
	justify-content: space-between;
`;

const BrandPriceEl = styled.div`
	width: 60%;
	min-height: 87px;
	line-height: .94;
	p{
		margin: 0;
	}
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
	color: #999;
	margin: 1px 0 4px;
`;

const PriceEl = styled.p`
	line-height: .94;
	font-size: 16px;
	margin-bottom:12px;
	text-align: left;
`;

const MainImageEl = styled.div`
	margin: 0 auto 150px;
`;

const ColorsEl = styled.ul`
	min-height: 87px;
	max-width: 78px;
	text-align: right;
	margin: 0;
	padding: 0;
	li{
		margin-right: 12px;
		margin-top: 12px;
		display: inline-block;
		list-style-type: none;
		position: relative;
		text-align: center;
		width: 16px;
		height: 16px;
		border: 1px solid #979797;
		border-radius: 50%;
		overflow: hidden;
	}
	li:nth-child(-n+3){
		margin-top: 0;
	}
	li:nth-child(3n+3), li:last-child{
		margin-right: 0;
	}
	li:first-child{
		border: 1px solid #000;
	}
	li:first-child div{
		border-radius: 50%;
		width: 12px;
		height: 12px;
		margin: 2px auto;
	}
`;

const ColorDotWrap = styled.div``;

const ColorDotEl = styled.div`
	width: 16px;
	height: 16px;
	border: none;
	margin-top: 0;
`;

const ButtonsEl = styled.div`
	transition: all .2s ease;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	opacity: 0;
	button{
		-webkit-appearance: button;
		padding: 14px 18px;
		margin-right: 12px;
		font-size: 12px;
		border-radius: 100px;
		border: 1px solid #000;
		background-color: inherit;
	}
	button.black{
		background-color: #000;
		color: #fff;
		font-size: 14px;
	}
`;

export default function Phone({
	phone,
	index
}){	
	console.log(phone.props.children.props.device.displayName+":", phone.props.children.props.device)
	return(
		<PhoneEl className = "phone">
			<OfferTextEl>Upgrade & get $100 off, or add a new line & get $300 off on us. Trade-in required.</OfferTextEl>
			<MainImageEl>
				<img src = {phone.props.children.props.device.imageUrl} alt = {phone.props.children.props.device.displayName} />
			</MainImageEl>
			<div>
				<DetailsWrap className = "details_wrap">
					<SeparatorEl></SeparatorEl>
					<PriceDetailsEl className = "price_details">
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
						<ColorsEl>
							{
								phone.props.children.props.device.skus.length > 1 ?
									Object.keys(phone.props.children.props.device.skus).map( i => {
										return(
											<li key = {i}>
												<ColorDotWrap>
													<ColorDotEl style = {{backgroundColor: phone.props.children.props.device.skus[i].colorStyle1 }}></ColorDotEl>
												</ColorDotWrap>
											</li>
										)
									}) : null
							}
						</ColorsEl>
					</PriceDetailsEl>
				</DetailsWrap>
			</div>
			<ButtonsEl className = "buttons_wrap">
				<button>ADD TO COMPARE</button>
				<button className="black">QUICK VIEW</button>
			</ButtonsEl>
	    </PhoneEl>
	);
}