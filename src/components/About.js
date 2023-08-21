import styled from 'styled-components';

const Title = styled.h1`
	padding: 0px;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	padding: 20px;
	@media only screen and (max-width: 1000px) {
		width: auto;
		flex-direction: column;
	}
`;
const Photo = styled.img`
	border-radius: 2em;
	height: 350px;
	border: 3px solid white;
	margin-left: 40px;
	@media only screen and (max-width: 1000px) {
		height: 12em;
		margin: 0px;
	}
`;

const Description = styled.div`
	margin: 2em;
	font-size: large;
	padding-bottom: 130px;
	text-align: start;
	@media only screen and (max-width: 900px) {
		font-size: small;
	}
`;

const About = () => {
	return (
		<>
			<Title>About me:</Title>
			<Container>
				<div>
					<Photo src='./assets/aboutPhoto.jpg' alt='Playing drums!' />
				</div>
				<div>
					<Description>
						<h2>
							I have many interests and hobbies. I love to play and perform
							music with my friends. I like to tinker with electronics in my
							spare time. I also enjoy playing video games and have always
							enjoyed working with computers, so coding seemed like a natural
							progression for my interests.
						</h2>
					</Description>
				</div>
			</Container>
		</>
	);
};

export default About;
