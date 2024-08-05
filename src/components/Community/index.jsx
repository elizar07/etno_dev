import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'

export const Community = () => {
	return (
		<div id='community'>
			<div className='container'>
				<div className='community'>
					<div className='community--telegram'>
						<h1>Наши ресурсы в Telegram</h1>
						<div className='community--telegram__blocks'>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Общий чат</p>
							</div>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Вакансии</p>
							</div>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Мероприятия</p>
							</div>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Видеоконференции</p>
							</div>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Relocate & Remote</p>
							</div>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Relocate & Remote</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}


