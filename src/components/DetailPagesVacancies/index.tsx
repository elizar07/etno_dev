import React from 'react'

const DetailPagesVacancies = () => {
	
	return (
		<div id='position'>
			<div className='container'>
				<div className='positions'>
					<div className='position'>
						<div className='position--head'>
							<h1> PHP разработчик</h1>
							<div className='organization-divv'>
								<img
									src='https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.png'
									alt='img'
									style={{ width: '30px', height: '30px' }}
								/>
								<div className='organization-div-text'>
									<h3>Компания</h3>
									<h2>Mad Devs</h2>
								</div>
							</div>
							<h3>Тип</h3>
							<h2>Офис/Бишкек</h2>
							<h3>Оклад</h3>
							<h2>От 35000-50000с в месяц</h2>
						</div>
						<div className='position--descrtn'>
							<h3>Описание вакансии</h3>
							<div className='position--descrtn__block'>
								<p>
									Если у вас есть хорошие навыки тестирования мобильных, веб- и
									настольных приложений, а также опыт работы с
									кроссплатформенными приложениями на Flutter, мы будем рады
									услышать от вас!
								</p>
								<p>Требования:</p>
								<ul>
									<li>ПК/ноутбук;</li>
									<li>Гарнитура;</li>
									<li>Камера;</li>
									<li>Интернет.</li>
									<li>
										Опыт руководителя команды и в продажах , иметь знания в
										инвестициях или криптовалюте;
									</li>
								</ul>
								<p>Обязанности:</p>
								<ul>
									<li>Руководство командой;</li>
									<li>Прослушка и суфлирование звонков сотрудников;</li>
									<li>Адаптация новых сотрудников;</li>
									<li>Внесение смен;</li>
									<li>Контроль выхода на работу сотрудников;</li>
									<li>Ведение отчетности:</li>
									<li>Донесение актуальной информации;</li>
								</ul>
								<p>Преимущества</p>
								<ul>
									<li>
										Конкурентная компенсация: заработная плата в долларах,
										гарантирующая признание вашего опыта.
									</li>
									<li>
										Полная занятость: официально признанный статус занятости с
										юридической помощью для сотрудничества.
									</li>
									<li>
										Команда опытных разработчиков: присоединяйтесь к команде
										опытных разработчиков и инженеров.
									</li>
									<li>
										Руководство инженерами: наша руководящая группа имеет
										инженерное образование и активно участвует в технических
										совещаниях для обсуждения проблем проекта и технологических
										инноваций.
									</li>
								</ul>
								<p>Условия:</p>
								<ul>
									<li>График работы 6/1 с 9:00 до 19:00 по МСК;</li>
									<li>
										Оклад 90 000 рублей на руки + бонусы от продаж команды;
									</li>
									<li>
										Каждый месяц розыгрыш призов для сотрудников(техника,
										денежные призы);
									</li>
									<li>Для новых сотрудников - еженедельные выплаты зп;</li>
								</ul>
							</div>
						</div>
						<div className='position--connection'>
							<label>Telegram</label>
							<a href='#'>@recruiter_maddevs</a>
						</div>
					</div>
					<div className='similarVacancy'>
						<h3>Похожие вакансии:</h3>
						<div className='similarVacancy--abt'>
							<div className='similarVacancy--abt__block'>
								<h4>Программист 1С в ОсОО СК "N Group"</h4>
								<h5>50000 - 80000 KGS в месяц - Офис / Бишкек</h5>
							</div>
							<div className='similarVacancy--abt__block'>
								<h4>
									Support Специалист по сопровождению IT Продуктов. в RetMind
								</h4>
								<h5>20000 - 40000 KGS в месяц - Офис / Бишкек</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailPagesVacancies
