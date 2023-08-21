import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 2em;
`;

const InputContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: end;
	transform: translateX(-37px);
`;

const NameInput = styled.input`
	border-radius: 10px;
	border: 2.5px solid;
`;

const EmailInput = styled.input`
	margin-bottom: 3px;
	border-radius: 10px;
	border: 2.5px solid;
`;

const CommentInput = styled.textarea`
	border-radius: 10px;
	border: 2.5px solid;
`;

const ContactForm = () => {
	const [formStatus, setFormStatus] = React.useState('Send');
	const onSubmit = (e) => {
		e.preventDefault();
		setFormStatus('Submitted!');
		const { name, email, message } = e.target.elements;
		let formInputs = {
			name: name.value,
			email: email.value,
			message: message.value,
		};
		console.log(formInputs);
	};
	return (
		<>
			<FormContainer>
				<h2> Contact Form</h2>

				<InputContainer onSubmit={onSubmit}>
					<div>
						<label htmlFor='name'>Name</label>
						<NameInput type='text' id='name' required />
					</div>
					<div>
						<label htmlFor='email'>Email</label>
						<EmailInput type='email' id='email' required />
					</div>
					<div>
						<label htmlFor='message'>Message</label>
						<CommentInput id='message' required />
					</div>
					<button type='submit'>{formStatus}</button>
				</InputContainer>
			</FormContainer>
		</>
	);
};
export default ContactForm;
