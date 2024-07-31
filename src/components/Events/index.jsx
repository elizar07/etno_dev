import React from 'react'
import { Link } from 'react-router-dom'
import EventList from '../MainLists/eventList'
import useFetch from '../../hooks/useFetch'

function Events() {
	const events_url = 'http://3.38.98.134/events'
	const { data, loading } = useFetch({ url: events_url })

	if (loading) {
		return <div>Loading</div>
	}
	

	return (
		<div id='events'>
			<div className='container'>
				<div className='btn1'>
					<button>Добавить мероприятие</button>
				</div>
				{data &&
					data.map((el, index) => (
						<EventList
							key={index}
							location={el.location}
							name={el.name}
							organization_name={el.organization_name}
							date={el.date}
						/>
					))}
				<div className='btn2'>
					<button>Следующая страница</button>
				</div>
			</div>
		</div>
	)
}

export default Events

// import React from 'react'
// import { Link } from 'react-router-dom'
// import EventList from '../MainLists/eventList'
// import useFetch from '../../hooks/useFetch'

// function Events() {
// 	const events_url = 'http://3.38.98.134/events'

// 	const { data, loading } = useFetch({ url: events_url })

// 	if (loading) {
// 		return <div>Loading</div>
// 	}

// 	return (
// 		<div id='events'>
// 			<div className='container'>
// 				<div className='btn1'>
// 					<button>Добавить мероприятиe</button>
// 				</div>
// 				{data &&
// 					data.map((el: any, index: number) => {
// 						return (
// 							<EventList
// 								key={index}
// 								location={el.location}
// 								name={el.name}
// 								organization_name={el.organization_name}
// 								date={el.date}
// 							/>
// 						)
// 					})}

// 				<div className='btn2'>
// 					<button>Следующая страница</button>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Events
