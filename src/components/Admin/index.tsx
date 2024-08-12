import axios from 'axios'
import React, { useState } from 'react'
const loginApi = 'http://3.38.98.134/auth/login'
const signupApi = 'http://3.38.98.134/auth/signup'

export function Admin() {
	const [password, setPassword] = useState<string>('')
	const [confirmpassword, setConfirmPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [isLoginTab, setIsLoginTab] = useState<boolean>(true)

	const handleClick = () => {
		setEmail('')
		setPassword('')
		setConfirmPassword('')
	}
	const handleAuth = (e: React.FormEvent) => {
		e.preventDefault()
		if(!email || !password) {
			alert('Please fill all the fields')
		}
		if(!isLoginTab && password !== confirmpassword){
			alert('Password do not match')
		}}
		const authURL = isLoginTab ? loginApi : signupApi
		try {
			axios
				.post(authURL, {
					email,
					password
				})
				.then(res => {
					const { token, message } = res.data
					if (res.data.success) {
						console.log('data', res.data)

						alert(message)
					} else {
						alert(message)
					}
					console.log(res.data)
				})
				.catch(err => {
					console.log(err)
				})
		} catch (error) {
			console.log(error)
		}
	

	return (
		<div id='admin'>
			<div className='container'>
				<div className='admin'>
					<h1>{isLoginTab ? 'Login' : 'Signup'}</h1>
					<form className='inputs' onSubmit={handleAuth}>
						<input
							value={email}
							onChange={e => setEmail(e.target.value)}
							placeholder='Email'
							type='text'
						/>
						<input
							value={password}
							onChange={e => setPassword(e.target.value)}
							placeholder='Password'
							type='password'
						/>
						{!isLoginTab && (
							<input
								value={confirmpassword}
								onChange={e => setConfirmPassword(e.target.value)}
								placeholder='Confirm password'
								type='text'
							/>
						)}

						<div className='admin-btn'>
							<button onClick={handleClick}>
								{isLoginTab ? 'Login' : 'Signup'}
							</button>
						</div>
					</form>
					{isLoginTab ? (
						<h2>
							Don't have an account?
							<br />
							<a
								onClick={e => {
									e.preventDefault()
									setIsLoginTab(false)
								}}
							>
								Signup
							</a>
						</h2>
					) : (
						<h2>
							Already have an account?
							<br />
							<a
								onClick={e => {
									e.preventDefault()
									setIsLoginTab(true)
								}}
							>
								Login
							</a>
						</h2>
					)}
				</div>
			</div>
		</div>
	);
}




