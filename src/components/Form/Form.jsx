import React from "react";
import style from "./Form.module.css";
import validation from "./validation.js";

export default function Form(props) {
	const [userData, setUserData] = React.useState({
		username: '',
		password: '',
	});

	const [errors, setErrors] = React.useState({
		username: '',
		password: '',
	});

	const handleInputChange = (e) => {
		setUserData({
			...userData,
			[e.target.name]: e.target.value
		});
		setErrors(
			validation({
				...userData,
				[e.target.name]: e.target.value
			})
		)
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		props.login(userData)
	}

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<label>Username:</label>
				<input
					type='text'
					name='username'
					value={userData.username}
					onChange={handleInputChange}
					className={errors.username && style.warning}
				/>
				<p className="danger">{errors.username}</p>

				<label>Password:</label>
				<input
					type='password'
					name='password'
					value={userData.password}
					onChange={handleInputChange}
					className={errors.password && style.warning}
				/>
				<p className="danger">{errors.password}</p>

				<button type="submit">LOGIN</button>
			</Form>
		</div>
	)
}