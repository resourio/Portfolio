import styled from 'styled-components';
const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
	margin: 2em;
	font-size: 2;
	@media only screen and (max-width: 900px) {
		width: auto;
		flex-direction: column;
	}
`;

const ContainerChildren = styled.div`
	flex: 1 1 0;
`;

const Profile = styled.img`
	border-radius: 18px;
	border: 3px solid black;
	height: 350px;
	@media only screen and (max-width: 900px) {
		height: 15em;
`;
const Greeting = styled.h1`
	padding: 0px;
`;

const Home = () => {
	return (
		<>
			<Greeting>Welcome!</Greeting>
			<Container>
				<ContainerChildren>
					<h2>
						Hello,my name is Travis Darby. I am studying to become a full-stack
						developer through Concordia's online boot camp course.
					</h2>
				</ContainerChildren>
				<ContainerChildren>
					<div>
						<Profile
							src='./assets/profilePhoto.jpg'
							alt='Hello! It is me!'
							height='200px'
						/>
					</div>
				</ContainerChildren>
			</Container>
		</>
	);
};

export default Home;
