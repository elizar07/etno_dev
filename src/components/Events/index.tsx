import { useNavigate } from 'react-router-dom'
import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'
import EventList from '../MainLists/eventList'

export function Events() {
	const { data, loading } = useFetch({ url: `${API}/events` })
	const navigate = useNavigate()

	function navigateToAddEvent() {
		navigate('/addEvent')
	}
	if (loading) {
		return <Loading />
	}

	return (
		<div id='events'>
			<div className='container'>
				<div className='btn1'>
					<button onClick={navigateToAddEvent}>Добавить мероприятие</button>
				</div>

				{data
					.sort((a: any, b: any) => b.id - a.id)
					.map((el: any) => (
						<EventList
							key={el.id}
							location={el.location}
							name={el.name}
							organization_name={el.organization_name}
							date={el.date}
							cover={el.cover}
						/>
					))}
				<div className='btn2'>
					<button>Следующая страница</button>
				</div>
			</div>
		</div>
	)
}
