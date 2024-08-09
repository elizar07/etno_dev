import { useNavigate } from 'react-router-dom'
import { IOrganizationTypes } from '../../types/organization'
const OrganizationList = ({
	icon,
	name,
	events_count,
	jobs_count,
	meetups_count
}: IOrganizationTypes) => {
const navigate = useNavigate()
function DetailPagesOrganization(){
	navigate('/DetailPagesOrganization')
}

	return (
		<div>
			<div className='organizations-content'>
				<div className='information-organization' onClick={DetailPagesOrganization}>
					<div className='organization-jobs-item-field-company'>
						{icon === null ? (
						<div className="preview_img"></div>
						) : (
							<img className='organization-img' src={`${icon}`} alt='img' />
						)}

						<h4>
							<span>
								Компания <br />
							</span>
							{name}
						</h4>
					</div>
					<div className='vacancies-event-video'>
						<div className='jobs-item-field-vacancies'>
							<h4>
								<span>Вакансии</span>
								<br />
								{jobs_count}
							</h4>
						</div>
						<div className='jobs-item-field-event'>
							<h4>
								<span>Мероприятие</span>
								<br />
								{events_count}
							</h4>
						</div>
						<div className='jobs-item-field-video'>
							<h4>
								<span>Видео</span>
								<br />
								{meetups_count}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OrganizationList
