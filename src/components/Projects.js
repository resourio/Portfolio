import styled from 'styled-components';

const GridStyle = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	padding-top: 5em;
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
						<img src='./assets/doomLogo.png' alt='Project Demo' height='200' />
					</a>
					<p> A "Space Invaders" style game.</p>
					<i>
						<b>*Warning:There is music!*</b>
					</i>
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
