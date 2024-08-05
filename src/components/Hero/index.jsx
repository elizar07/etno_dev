import logo from '../../assets/img/logo.jpg'
import logoHero from '../../assets/img/logo-hero.webp'
import { useNavigate } from 'react-router-dom'
import EventList from '../MainLists/eventList'
import useFetch from '../../hooks/useFetch'
import { API } from '../../API'
import VacancyList from '../MainLists/vacancyList'
import VideoList from '../MainLists/videoList'

export function Hero() {
	const { data, loading } = useFetch({ url: `${API}events`})




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
					{data &&
						data
							.slice(0, 1)
							.map((el, index) => (
								<EventList
									key={index}
									location={el.location}
									name={el.name}
									organization_name={el.organization_name}
									date={el.date}
								/>
							))}{' '}
				</div>
				<div className='jobs-list'>
					<div className='heros-title'>
						<h2 onClick={handleVacanciesClick}>Последние вакансии</h2>
					</div>
					{data &&
						data.slice(0,2).map((job, index) => {
							return (
								<VacancyList
									key={index}
									companyName={job.organization_name}
									jobTitle={job.position}
									priceFrom={job.price_from}
									priceTo={job.price_to}
									type={job.type}
									city={job.city}
									currency={job.currency}
									salary={job.salary}
								/>
							)
						})}
				</div>
				<div className='video-title'>
					<h1 onClick={handleVideoClick}>Последнее видео</h1>
				</div>
				<div className='video-block'>
					{data.slice(0,2).map(el => (
						<VideoList
							key={el.id}
							title={el.title}
							organization_name={el.organization_name}
							date={el.date}
							cover_formats={el.cover_formats}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

