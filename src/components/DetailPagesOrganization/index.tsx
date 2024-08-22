import { API } from '../../API'
import useFetch from '../../hooks/useFetch'

const DetailPagesOrganization = () => {
	const { data, loading } = useFetch({ url: `${API}/events` })
	const { data: jobsData, loading: loadingJobs } = useFetch({
		url: `${API}/jobs`
	})
	const { data: meetupsData, loading: loadingMeetups } = useFetch({
		url: `${API}/meetups`
	})

	return (
		<>
			<div id='detail'>
				<div className='container'>
					<div className='detail'>
						<div className='detail--head'>
							<img
								src='https://devkg.com/images/organizations/53fecf5935b721031f4f636b13bf18ae.webp'
								alt='img'
							/>
							<h1>CodifyLab</h1>
						</div>
						<h3>Веб-сайт</h3>
						<h2>codifylab.com</h2>
						<h3>Описание</h3>
						<div className='detail--text'>
							CODIFY - это уникальная площадка в IT, целью которой является
							объединить классных айтишников, влюбленных в свое дело, и всех
							людей, готовых учиться. Идея создания платформы пришла к людям,
							которые являются действующими профессионалами с многолетним опытом
							менторства и взращивания специалистов. Цель CodifyLab поддерживать
							учащихся на всех этапах, будь это изменение сферы деятельности,
							поиск продвижения по службе или поиск новых интересов, Codify
							предлагает курсы для любопытных умов по различным направлениям -
							от основ программирования и информатики до лидерства и
							коммуникаций. Менторы CodifyLab – это специалисты с многолетним
							опытом, которые хотят внести вклад в развитие IT сообщества в КР,
							и способствовать росту потенциала IT индустрии в целом. Программы
							разделены на этапы в зависимости от уровня: С нуля, Стажер,
							Junior, Middle, Senior. Вы можете начать с нуля или начать со
							следующих этапов, предварительно пройдя собеседование с ментором
							курса. Все этапы системно связаны друг с другом, пройдя один этап,
							вы будете максимально подготовлены к программе следующего этапа.
							Мы проводим не только обучающие курсы, так и проводить разовые
							мероприятия - лекции, семинары, воркшопы - с опытными
							специалистами в сфере IT технологий на бесплатной основе. Мы
							помогаем начать карьеру в IT - новичкам и расти профессионально
							специалистам. После успешного завершения программы, мы оказываем
							консультации в составлении резюме и портфолио для устройства на
							работу. Основной акцент в процессе обучения делаем на качестве,
							которое реализуем силами действующих опытных тренеров.
						</div>
						<h4>Мероприятия</h4>
						<div className='detail--events'>
							<div className='detail--events__event'>
								<img
									src='https://devkg.com/images/events/e4c330df305d20ba0e1eff982d2b5ba3.webp'
									alt='img'
								/>
								<div className='detail--events__event--text'>
									<h3>
										19 октября 2023 <span>18:00</span>
									</h3>
									<h1>🚀 Кейс-Батл по Управлению IT Проектами 🚀</h1>
									<div className='detail--events__event--text__location'>
										<div className='detail--events__event--text__location--row'>
											<h3>Организатор</h3>
											<h2>CodifyLab</h2>
										</div>
										<div className='detail--events__event--text__location--row'>
											<h3>Локация</h3>
											<h2>7мкр Офис Codify</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default DetailPagesOrganization
