import styled from 'styled-components';

const ContactContainer = styled.div`
	display: flex;
	flex-wrap: nowrap;
	justify-content: center;
	padding-top: 10em;
	@media only screen and (max-width: 600px) {
		display: inline;
	}
`;

const Icons = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	width: 20em;
	justify-content: space-around;
	@media only screen and (max-width: 600px) {
		width: auto;
		justify-content: space-evenly;
		padding-top: 4em;
	}
`;

const IconButtons = styled.button`
	border-radius: 15px;
	border: 3px solid;

	:hover {
		cursor: pointer;
	}
	:active {
		transform: translateY(4px);
	}
`;

const Contact = () => {
	return (
		<>
			<ContactContainer>
				<Icons>
					<a
						href='https://www.facebook.com/travis.l.darby/'
						target='_blank'
						rel='noreferrer'
					>
						<IconButtons>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 50 50'
							>
								<path
									fill='currentColor'
									d='M26 20v-3c0-1.3.3-2 2.4-2H31v-5h-4c-5 0-7 3.3-7 7v3h-4v5h4v15h6V25h4.4l.6-5h-5z'
								/>
							</svg>
						</IconButtons>
					</a>
					<a
						href='https://github.com/resourio'
						target='_blank'
						rel='noreferrer'
					>
						<IconButtons>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 50 50'
							>
								<path
									fill='currentColor'
									fill-rule='evenodd'
									d='M25 10c-8.3 0-15 6.7-15 15c0 6.6 4.3 12.2 10.3 14.2c.8.1 1-.3 1-.7v-2.6c-4.2.9-5.1-2-5.1-2c-.7-1.7-1.7-2.2-1.7-2.2c-1.4-.9.1-.9.1-.9c1.5.1 2.3 1.5 2.3 1.5c1.3 2.3 3.5 1.6 4.4 1.2c.1-1 .5-1.6 1-2c-3.3-.4-6.8-1.7-6.8-7.4c0-1.6.6-3 1.5-4c-.2-.4-.7-1.9.1-4c0 0 1.3-.4 4.1 1.5c1.2-.3 2.5-.5 3.8-.5c1.3 0 2.6.2 3.8.5c2.9-1.9 4.1-1.5 4.1-1.5c.8 2.1.3 3.6.1 4c1 1 1.5 2.4 1.5 4c0 5.8-3.5 7-6.8 7.4c.5.5 1 1.4 1 2.8v4.1c0 .4.3.9 1 .7c6-2 10.2-7.6 10.2-14.2C40 16.7 33.3 10 25 10z'
									clip-rule='evenodd'
								/>
							</svg>
						</IconButtons>
					</a>
					<a
						href='https://www.instagram.com/resourio/'
						target='_blank'
						rel='noreferrer'
					>
						<IconButtons>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 50 50'
							>
								<g fill='currentColor' fill-rule='evenodd'>
									<path d='M25 12c-3.53 0-3.973.015-5.36.078c-1.384.063-2.329.283-3.156.604a6.372 6.372 0 0 0-2.302 1.5a6.372 6.372 0 0 0-1.5 2.303c-.321.826-.54 1.771-.604 3.155C12.015 21.027 12 21.47 12 25c0 3.53.015 3.973.078 5.36c.063 1.384.283 2.329.604 3.155c.333.855.777 1.58 1.5 2.303a6.372 6.372 0 0 0 2.302 1.5c.827.32 1.772.54 3.156.604c1.387.063 1.83.078 5.36.078c3.53 0 3.973-.015 5.36-.078c1.384-.063 2.329-.283 3.155-.604a6.371 6.371 0 0 0 2.303-1.5a6.372 6.372 0 0 0 1.5-2.303c.32-.826.54-1.771.604-3.155c.063-1.387.078-1.83.078-5.36c0-3.53-.015-3.973-.078-5.36c-.063-1.384-.283-2.329-.605-3.155a6.372 6.372 0 0 0-1.499-2.303a6.371 6.371 0 0 0-2.303-1.5c-.826-.32-1.771-.54-3.155-.604C28.973 12.015 28.53 12 25 12m0 2.342c3.471 0 3.882.014 5.253.076c1.267.058 1.956.27 2.414.448c.607.236 1.04.517 1.495.972c.455.455.736.888.972 1.495c.178.458.39 1.146.448 2.414c.062 1.37.076 1.782.076 5.253s-.014 3.882-.076 5.253c-.058 1.268-.27 1.956-.448 2.414a4.028 4.028 0 0 1-.972 1.495a4.027 4.027 0 0 1-1.495.972c-.458.178-1.147.39-2.414.448c-1.37.062-1.782.076-5.253.076s-3.883-.014-5.253-.076c-1.268-.058-1.956-.27-2.414-.448a4.027 4.027 0 0 1-1.495-.972a4.03 4.03 0 0 1-.972-1.495c-.178-.458-.39-1.146-.448-2.414c-.062-1.37-.076-1.782-.076-5.253s.014-3.882.076-5.253c.058-1.268.27-1.956.448-2.414c.236-.607.517-1.04.972-1.495a4.028 4.028 0 0 1 1.495-.972c.458-.178 1.146-.39 2.414-.448c1.37-.062 1.782-.076 5.253-.076' />
									<path d='M25 18a7 7 0 1 0 0 14a7 7 0 0 0 0-14m0 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m8.7-11.4a1.6 1.6 0 1 1-3.2 0a1.6 1.6 0 0 1 3.2 0' />
								</g>
							</svg>
						</IconButtons>
					</a>
					<a href='mailto:resourio@gmail.com'>
						<IconButtons>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='50'
								height='50'
								viewBox='0 0 50 50'
							>
								<path
									fill='currentColor'
									d='m31.796 24.244l9.97 9.97l-1.415 1.414l-9.97-9.97zm-13.518.043l1.414 1.414l-9.9 9.9l-1.414-1.41z'
									opacity='.9'
								/>
								<path
									fill='currentColor'
									d='M25 29.9c-1.5 0-3.1-.6-4.2-1.8L8.3 15.7l1.4-1.4l12.5 12.5c1.6 1.6 4.1 1.6 5.7 0l12.5-12.5l1.4 1.4l-12.6 12.5c-1.1 1.1-2.7 1.7-4.2 1.7z'
								/>
								<path
									fill='currentColor'
									d='M39 38H11c-1.7 0-3-1.3-3-3V15c0-1.7 1.3-3 3-3h28c1.7 0 3 1.3 3 3v20c0 1.7-1.3 3-3 3zM11 14c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h28c.6 0 1-.4 1-1V15c0-.6-.4-1-1-1H11z'
								/>
							</svg>
						</IconButtons>
					</a>
				</Icons>
			</ContactContainer>
		</>
	);
};

export default Contact;
