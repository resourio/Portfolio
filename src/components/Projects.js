import styled from 'styled-components';

const GridStyle = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	align-content: stretch;
	padding-top: 5em;
	box-sizing: border-box;

	@media only screen and (max-width: 872px) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: auto;
		padding-top: 0em;
	}
`;

const Projects = () => {
	return (
		<>
			<h1>Here are some examples of projects that I have worked on:</h1>
			<GridStyle>
				<div>
					<a
						href='https://project-js-nyan-cat-six.vercel.app'
						target='_blank'
						rel='noreferrer'
					>
						<img src='./assets/doomLogo.png' alt='Coming soon!x' height='200' />
					</a>
					<p> A "Space Invaders" style game.</p>
					<p>*Warning:There is music!*</p>
				</div>

				<div>
					<img src='./assets/comingSoon.jpg' alt='Coming soon!x' height='200' />
					<p>More to come.</p>
				</div>

				<div>
					<img src='./assets/comingSoon.jpg' alt='Coming soon!x' height='200' />
					<p>More to come.</p>
				</div>
			</GridStyle>
		</>
	);
};

export default Projects;
