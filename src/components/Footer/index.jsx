import { FaFacebookSquare, FaTelegramPlane, FaYoutube } from 'react-icons/fa'
import { TfiGithub } from 'react-icons/tfi'
import footerLogo from '../../assets/img/Dev kg logo.svg'
import footerlogoKg from '../../assets/img/footer logo Kg.png'
import { useNavigate } from 'react-router-dom'

export function Footer() {
	const navigate = useNavigate()

	function navigateTologoFooter() {
		navigate('/')
		setTimeout(() => {
			const heroElement = document.getElementById('hero')
			if (heroElement) {
				heroElement.scrollIntoView({ behavior: 'smooth' })
			}
		}, 300)
	}

	return (
		<div id='footer'>
			<div className='footer'>
				<div className='container'>
					<div className='footer__content'>
						<img
							className='main-dev-logo'
							onClick={navigateTologoFooter}
							src={footerLogo}
							alt='Dev KG logo'
						/>
						<div className='footer__info'>
							<div className='footer__h1_logoKg'>
								<h1>
									Мы — сообщество разработчиков Кыргызстана. Данный проект
									поддерживается и <br />
									администрируется членами нашего сообщества.
								</h1>
								<a href='https://www.net.kg/stat.php?id=6620&fromsite=6620'>
									<img src={footerlogoKg} alt='Footer logo KG' />
								</a>
							</div>
							<div className='footer__info__icons'>
								<a
									href='https://t.me/'
									className='footer__info__icons-telegram'
								>
									<FaTelegramPlane />
								</a>
								<a
									href='https://github.com/'
									className='footer__info__icons-github'
								>
									<TfiGithub />
								</a>
								<a
									href='https://facebook.com/'
									className='footer__info__icons-facebook'
								>
									<FaFacebookSquare />
								</a>
								<a
									href='https://youtube.com/'
									className='footer__info__icons-youtube'
								>
									<FaYoutube />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

