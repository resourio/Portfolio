import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-around;
	align-items: baseline;
	align-content: center;
	padding-top: 3em;
	background-color: #07bae8;
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	width: 30em;
	text-decoration: none;
	@media only screen and (max-width: 600px) {
		flex-direction: column;
		justify-content: center;
		width: auto;
	}
`;
const LinkDecoration = styled(NavLink)`
	text-decoration: none;
	font-family: monospace;
	font-size: 2em;
`;

const Header = () => {
	return (
		<Wrapper>
			<LinkWrapper>
				<LinkDecoration
					to='/'
					style={({ isActive, isPending }) => {
						return {
							fontWeight: isActive ? 'bold' : '',
							borderBottom: isActive ? '4px solid	 rgb(212, 212, 212)' : '',
							color: isActive ? '#black' : 'black',
						};
					}}
				>
					Home
				</LinkDecoration>
				<LinkDecoration
					to='About'
					style={({ isActive, isPending }) => {
						return {
							fontWeight: isActive ? 'bold' : '',
							borderBottom: isActive ? '4px solid rgb(212, 212, 212)' : '',
							color: isActive ? 'black' : 'black',
						};
					}}
				>
					About
				</LinkDecoration>
				<LinkDecoration
					to='Projects'
					style={({ isActive, isPending }) => {
						return {
							fontWeight: isActive ? 'bold' : '',
							borderBottom: isActive ? '4px solid rgb(212, 212, 212)' : '',
							color: isActive ? 'black' : 'black',
						};
					}}
				>
					Projects
				</LinkDecoration>
				<LinkDecoration
					to='Contact'
					style={({ isActive, isPending }) => {
						return {
							fontWeight: isActive ? 'bold' : '',
							borderBottom: isActive ? '4px solid rgb(212, 212, 212)' : '',
							color: isActive ? 'black' : 'black',
						};
					}}
				>
					Contact
				</LinkDecoration>
			</LinkWrapper>
		</Wrapper>
	);
};

export default Header;
