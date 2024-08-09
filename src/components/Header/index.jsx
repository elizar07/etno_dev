import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { SlArrowRightCircle } from 'react-icons/sl'
import { VscClose } from 'react-icons/vsc'

export function Header() {
	const [isBurgerOpen, setIsBurgerOpen] = useState(false)
	const navigate = useNavigate()

	function logoHeader() {
		navigate('/')
	}

	function toggleBurgerMenu() {
		setIsBurgerOpen(!isBurgerOpen)
	}
	const [modal, setModal] = useState(false)
	function openModal() {
		setModal(true)
	}
	function closeModal() {
		setModal(false)
	}
	// const [headerUser,setHeaderUser] = useState(false)

	return (
		<div className='header'>
			<div className='container'>
				<div className='header__content'>
					<div className='header-logo'>
						<img
							onClick={logoHeader}
							src='https://devkg.com/js/img/logo.458f2cd.svg'
							alt=''
						/>
					</div>

					<div className='header__nav'>
						<NavLink to='/vacancies'>Вакансии</NavLink>
						<NavLink to='/events'>Мероприятия</NavLink>
						<NavLink to='/video'>Видео</NavLink>
						<NavLink to='/organizations'>Организации</NavLink>
						<NavLink to='/community'>Сообщество</NavLink>
					</div>
					<div className='header__menu-and-clicker'>
						<div className='header__burger' onClick={toggleBurgerMenu}>
							<div className={`hamburger ${isBurgerOpen ? 'is-active' : ''}`}>
								<div className='hamburger-box'>
									<div className='hamburger-inner'></div>
								</div>
							</div>
						</div>
						<div className={`burger-menu ${isBurgerOpen ? 'active' : ''}`}>
							<nav className='burger-menu__list'>
								<Link to='/' onClick={toggleBurgerMenu}>
									<VscClose />
								</Link>
								<Link to='/vacancies' onClick={toggleBurgerMenu}>
									Вакансии
								</Link>
								<Link to='/events' onClick={toggleBurgerMenu}>
									Мероприятия
								</Link>
								<Link to='/video' onClick={toggleBurgerMenu}>
									Видео
								</Link>
								<Link to='/organizations' onClick={toggleBurgerMenu}>
									Организации
								</Link>
								<Link to='/community' onClick={toggleBurgerMenu}>
									Сообщество
								</Link>
							</nav>
						</div>
						<div
							style={{
								display: modal ? 'block' : 'none'
							}}
						></div>
						<div className='header__enter'>
							{modal ? (
								<button onClick={closeModal} className='products'>
									close
								</button>
							) : (
								<Link to='/admin' >
									<button onClick={openModal} className='products'>
										<span>
											<SlArrowRightCircle />
										</span>
										Войти
									</button>
								</Link>
							)}
						</div>
						<div className='header__enter__two'>
							{modal ? (
								<button onClick={closeModal} className='products'>
									close
								</button>
							) : (
								<button onClick={openModal} className='products'>
									<span>
										<SlArrowRightCircle />
									</span>
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


