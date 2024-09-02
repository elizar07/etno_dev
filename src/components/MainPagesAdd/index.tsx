import { useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
const MainPagesAdd = () => {
	const navigate = useNavigate()
	function navigateTologoHeader() {
		navigate('/')
	}

	return (
		<div id='MainPagesAdd'>
			<div className='container'>
				<div className='MainPagesAdd'>
					<div className='PagesAdd_Main_Navigate'>
						<img
							onClick={navigateTologoHeader}
							src='https://devkg.com/js/img/logo.458f2cd.svg'
							alt='img'
						/>
						<div className='PagesAdd_Main_Navigate_Link'>
							<NavLink to={'/'}>Вакансии</NavLink>
							<NavLink to={'/'}>Мероприятия</NavLink>
							<NavLink to={'/'}>Видео</NavLink>
						</div>
						<h1>Выйти</h1>
					</div>
					<div className='MainPagesAdd_content'>
						<img
							src='	https://devkg.com/js/img/not-found-jobs.f847c90.svg'
							alt='img'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainPagesAdd
