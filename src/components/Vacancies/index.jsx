import { useNavigate } from 'react-router-dom'

const Vacancies = () => {
	const navigate = useNavigate()

	function DetailPages() {
		navigate('/detailPagesVacancies')
	}

	return (
		<div id='vacancies'>
			<div className='container'>
				<div className='vacancies'>
					<button className='add-vacancies'>Добавить вакансию</button>
					<div className='jobs-contents'>
						<div className='jobs-content' onClick={DetailPages}>
							<div className='information'>
								<div className='jobs-item-field-company'>
									<img
										src='https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.png'
										alt='img'
										style={{ width: '30px', height: '30px' }}
									/>
									<h4>
										<span>
											Компания <br />
										</span>
										Mad Devs
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
						<div className='jobs-content' onClick={DetailPages}>
							<div className='information'>
								<div className='jobs-item-field-company'>
									<img
										src='https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.png'
										alt='img'
										style={{ width: '30px', height: '30px' }}
									/>
									<h4>
										<span>
											Компания <br />
										</span>
										Mad Devs
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
					<button className='next-page'>Следующая страница</button>
				</div>
			</div>
			<div className='vacancies-modal'></div>
		</div>
	)
}

export default Vacancies
