import React, { useState } from 'react'

export function Admin() {
	const [password, setPassword] = useState<string>('')
	const [email, setEmail] = useState<string>('')

	const handleClick = () => {
		setEmail('')
		setPassword('')
	}

	return (
		<div id='admin'>
			<div className='container'>
				<div className='admin'>
					<h1>Login</h1>
					<div className='inputs'>
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
					</div>
					<button onClick={handleClick}>Login</button>
					<h2>
						Don't have an account?
						<br />
						<a href='#'>Signup</a>
					</h2>
				</div>
			</div>
		</div>
	)
}
