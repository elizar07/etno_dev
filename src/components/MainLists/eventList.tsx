
import { Link } from 'react-router-dom'
import { EventTypes } from '../../types/events'

const EventList = (
	{  location,
  name,
  organization_name,
  date,
	cover
}:EventTypes) => {
  const date1 = new Date(date);
   console.log(cover);
	 
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
						{!cover ? (
							<img
								src='https://img.freepik.com/premium-photo/a-beautiful-mountain-view_1181113-26.jpg'
								alt='img'
							/>
						) : (
		
						<img
							src={`${cover}`}
							data-v-17b3db24='img'
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
};

export default EventList;
