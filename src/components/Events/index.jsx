import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import EventList from '../MainLists/eventList'
import useFetch from '../../hooks/useFetch'
import { API } from '../../API'
import Loading from '../../ui/Loading'

export function Events() {
	const { data, loading } = useFetch({ url: `${API}/events` })
const navigate = useNavigate()

function addEvent (){
	navigate('/addEvent')
}
	if (loading) {
		return <div><Loading/></div>
	}
	return (
		<div id='events'>
			<div className='container'>
				<div className='btn1'>
					<button onClick={addEvent}>Добавить мероприятие</button>
				</div>
				{
					data.map((el) => (
						<EventList
							key={el.id}
							location={el.location}
							name={el.name}
							organization_name={el.organization_name}
							date={el.date}
							cover={el.cover_formats}
						/>
					))}
				<div className='btn2'>
					<button>Следующая страница</button>
				</div>
			</div>
		</div>
	)
}

