import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import { AiOutlineLogin } from 'react-icons/ai'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { isUserLogeddin } from '../../utils'
export function Header() {
	const navigate = useNavigate()
	function navigateTologoHeader() {
		navigate('/')
	}
	const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)
	const [menu, setMenu] = useState<boolean>(false)
	const nav = useNavigate()
	const location = useLocation()

	useEffect(() => {
		const loggedIn = isUserLogeddin()
		setIsLoggedIn(loggedIn)
	}, [isLoggedIn, setIsLoggedIn, location.pathname])

	const logout = () => {
		Cookies.remove('authtoken')
		setIsLoggedIn(false)
	}



	return (
		<div className='header'>
			<div className='container'>
				<div className='header__content'>
					<div className='header-logo'>
						<img
							onClick={navigateTologoHeader}
							src='https://devkg.com/js/img/logo.458f2cd.svg'
							alt='img'
						/>
					</div>

					<div className='header__nav'>
						<NavLink to='/vacancies'>Вакансии</NavLink>
						<NavLink to='/events'>Мероприятия</NavLink>
						<NavLink to='/video'>Видео</NavLink>
						<NavLink to='/organizations'>Организации</NavLink>
						<NavLink to='/community'>Сообщество</NavLink>
					</div>
					<div className='header__enter'>
						{isLoggedIn ? (
							<button className='products' onClick={logout}>
								<span>
									<AiOutlineLogin />
								</span>
								<button>Logout</button>
							</button>
						) : (
							<div className='header--btn' onClick={() => nav('/admin')}>
								<button className='products'>
									<span>
										<AiOutlineLogin />
									</span>
									Войти
								</button>
							</div>
						)}
			
					</div>
				</div>
			</div>
		</div>
	)
}
