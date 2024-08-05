import { useNavigate } from 'react-router-dom'
import { VideoTypes } from '../../types/video'
const VideoList = ({
	title,
	organization_name,
	date,
	cover_formats
}: VideoTypes) => {
	const navigate = useNavigate()

	function DetailPages() {
		navigate('/detailPagesVacancies')
	}
	const filtered = cover_formats[0]?.url
	const date1 = new Date(date)
	const year = date1.getFullYear()
	const month = date1.toLocaleString('default', { month: 'long' })
	const day = date1.getDate()

	return (
		<div>
			<div className='main-block'>
				<div className='first__block'>
					<img src={`${filtered}`} alt='img' />
					<div className='first__block-title'>
						<h2>{title}</h2>
					</div>
					<br />
					<div className='first__block-organizer'>
						<span>Организатор</span>

						<h3>{organization_name}</h3>
					</div>
					<div className='first__block-data'>
						<span>Когда</span>
						<br />
						<h3>
							{day} {month} {year}
						</h3>
					</div>
				</div>
			</div>
		</div>
	)
}
export default VideoList
