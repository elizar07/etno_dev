import logo from '../../assets/img/logo.jpg'
import logoHero from '../../assets/img/logo-hero.webp'
import { useNavigate } from 'react-router-dom'

export function Hero() {
	const navigate = useNavigate()

	function handleVideoClick() {
		navigate('/video')
	}
	function handleVacanciesClick (){
		navigate('/vacancies')
	}
	function handleEventClick (){
		navigate('/events')
	}

	return (
		<div id='hero'>
			<div className='container'>
				<div className='hero-title'>
					<h1 onClick={handleEventClick}>Последние мероприятия</h1>
				</div>
				<div className='hero'>
					<div className='hero--foto'>
						<img
							src='https://devkg.com/images/events/e975ab09a375897590241aaec11d51fa.png'
							alt='Event'
							data-v-17b3db24='img'
						/>
						<div className='hero--foto__text'>
							<h4>
								25 августа 2024 <span>17:00</span>
							</h4>
							<h1>InkubasiaLAB 2024’s Machine Learning AI Bootcamp</h1>
							<div className='hero--foto__text--par'>
								<div className='hero--foto__text--par__kor1'>
									<h6>Организатор</h6>
									<h2>InkubasiaLAB</h2>
								</div>
								<div className='hero--foto__text--par__kor2'>
									<h6>Где</h6>
									<h2>Коворкинг-резорт ololoAkJol</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='jobs-list'>
					<div className='heros-title'>
						<h2 onClick={handleVacanciesClick}>Последние вакансии</h2>
					</div>
					<div className='jobs-content'>
						<div className='information'>
							<div className='jobs-item-field-company'>
								<img
									src='https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png'
									alt='img'
								/>
								<h4>
									<span>
										Компания <br />
									</span>
									Билайн
								</h4>
							</div>
							<div className='jobs-item-field-jobsTitle'>
								<h4>
									<span>Должность</span>
									<br />
									PHP разработчик
								</h4>
							</div>
							<div className='salary-type'>
								<div className='jobs-item-field-salary'>
									<h4>
										<span>Оклад</span>
										<br />
										35000-50000 KGS в месяц
									</h4>
								</div>
								<div className='jobs-item-field-type'>
									<h4>
										<span>Тип</span>
										<br />
										Офис/Бишкек
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='video-title'>
					<h1 onClick={handleVideoClick}>Последнее видео</h1>
				</div>
				<div className='video-block'>
					<div className='main-block'>
						<div className='first__block'>
							<img src={logo} alt='img' />
							<div className='first__block-title'>
								<h2>
									ChatGPT — <br />
									революция или <br />
									мода? Как нейросети <br />
									могут помочь в <br />
									работе
								</h2>
							</div>
							<div className='first__block-organizer'>
								<span>Организатор</span>
								<h3>Kolesa Group</h3>
							</div>
							<div className='first__block-data'>
								<span>Когда</span>
								<h3>12 сентября 2023</h3>
							</div>
						</div>
					</div>
					<div className='main-block'>
						<div className='first__block'>
							<img src={logoHero} alt='img' />
							<div className='first__block-title'>
								<h2>
									Кибирд (Keybeard) <br />
									#43 – Синдром <br />
									самозванца в IT 2023 <br />
									(feat. Даниил <br />
									Вартанов)
								</h2>
							</div>
							<div className='first__block-organizer'>
								<span>Организатор</span>
								<h3>Mad Devs</h3>
							</div>
							<div className='first__block-data'>
								<span>Когда</span>
								<h3>30 августа 2023</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

