import { Link } from 'react-router-dom'
import { EventTypes } from '../../types/events'

const EventList = ({
	location,
	name,
	organization_name,
	date,
	cover
}:EventTypes) => {
  const date1 = new Date(date);

  const year = date1.getFullYear();
  const month = date1.toLocaleString("default", { month: "long" }); 
  const day = date1.getDate();
  const hours = date1.getHours();
  const minutes = date1.getMinutes();
  const formattedHours = hours.toString().padStart(2, '0');
const formattedMinutes = minutes.toString().padStart(2, '0');

	return (
		<div id='EventList'>
			<Link to={'/eventDetals'}>
				<div className='events'>
					<div className='events--foto'>
						{cover ? (
							<img src={`${cover}`} alt='img' />
						) : (
							<img
								src='https://sputnik.kg/img/104881/26/1048812689_0:0:3641:2048_1920x0_80_0_0_2f81e7f61349d504927032c511ce78d8.jpg'
								alt='img'
							/>
						)}
						<div className='events--foto__text'>
							<h4>
								{day} {month} {year}{' '}
								<span>
									{formattedHours}:{formattedMinutes}
								</span>
							</h4>
							<h1>{name}</h1>

							<div className='events--foto__text--par'>
								<div className='events--foto__text--par__kor1'>
									<h6>Организатор</h6>
									<h2>{organization_name}</h2>
								</div>
								<div className='events--foto__text--par__kor2'>
									<h6>Локация</h6>
									<h2>{location}</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default EventList
