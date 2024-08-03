import logo from '../../assets/img/logo.jpg'

export const Video = () => {
	return (
		<div>
			<>
				<div id='video'>
					<div className='container'>
						<div className='video'>
							<div className='video-add'>
								<button>Добавить видео</button>
							</div>
							<div className='video-title'>
								<h1>Все видео</h1>
							</div>
							<div className='video-block'>
								<div className='main-block'>
									<div className='first__block'>
										<img src={logo} alt='img' />
										<div className='first__block-title'>
											<h2>
												{' '}
												ChatGPT — <br />
												революция или <br />
												мода? Как нейросети <br />
												могут помочь в <br />
												работе
											</h2>
										</div>
										<br />
										<div className='first__block-organizer'>
											<span>Организатор</span>

											<h3> Kolesa Group</h3>
										</div>
										<div className='first__block-data'>
											<span>Когда</span>
											<br />
											<h3>12 сентября 2023</h3>
										</div>
									</div>
								</div>
							
							</div>
							<div className='next-pages'>
								<button>следующая страница</button>
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	)
};

