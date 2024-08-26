import Cookies from 'js-cookie'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks'
import { LoginResponse } from '../../types/login'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const loginApi = 'http://3.38.98.134/auth/login'
const signupApi = 'http://3.38.98.134/auth/signup'

export function Admin() {
	const nav = useNavigate()
	const [userName, setUserName] = React.useState<string>('')
	const [password, setPassword] = React.useState<string>('')
	const [confirm, setConfirm] = React.useState<string>('')
	const [isLoginTab, setIsLoginTab] = React.useState<boolean>(true)

	const apiUrl = isLoginTab ? loginApi : signupApi
	const { login } = useAuth({ url: apiUrl })
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		if (!userName || !password) {
			toast.info('Пожалуйста, заполните поля !', {
				autoClose: 2000
			})
			return
		}
		if (!isLoginTab && password !== confirm) {
			toast.error('Пароль не совпадает',{
				autoClose:2000
			})
			return
		}
		const res: LoginResponse = await login(userName, password)
		if (res.success && res?.token) {
			Cookies.set('authtoken', res.token)
			nav('/')
		} else {
			toast.error(res.message)
			
		}
	}

	return (
		<div id='admin'>
			<div className='container'>
				<div className='admin'>
					<h1>{isLoginTab ? 'Login' : 'Signup'}</h1>
					<form className='inputs' onSubmit={handleSubmit}>
						<input
							value={userName}
							onChange={e => setUserName(e.target.value)}
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
								value={confirm}
								onChange={e => setConfirm(e.target.value)}
								placeholder='Confirm password'
								type='text'
							/>
						)}

						<div className='admin-btn'>
							<button>{isLoginTab ? 'Login' : 'Signup'}</button>
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
			<ToastContainer />
		</div>
	)
}
