import { useNavigate } from 'react-router-dom'
import { IVacancyType } from '../../types/vacansy'
const VacancyList = ({
	companyName = '',
	jobTitle = '',
	priceFrom = 0,
	priceTo = 0,
	type = '',
	city = '',
	currency = '',
	salary = '',
	organization_icon = ''
}:IVacancyType) => {
	const navigate = useNavigate()

	function DetailPagesVacancies() {
		navigate('/detailPagesVacancies')
	}

	return (
		<div>
			<div className='jobs-content' onClick={DetailPagesVacancies}>
				{
					organization_icon === null ? (
						<div className="vacancy_preview_img"></div>
					):(

						<img
							src={organization_icon}
							alt='img'
						/>
					)
				}
				<div className='information'>
					<div className='jobs-item-field-company'>
						<h4>
							<span>
								Компания <br />
							</span>
							{companyName}
						</h4>
					</div>
					<div className='jobs-item-field-jobsTitle'>
						<h4>
							<span>Должность</span>
							<br />
							{jobTitle}
						</h4>
					</div>
					<div className='salary-type'>
						<div className='jobs-item-field-salary'>
							<h4>
								<span>Оклад</span>
								<br />
								{`От ${priceFrom} - ${priceTo} ${currency} в ${salary}`}
							</h4>
						</div>
						<div className='jobs-item-field-type'>
							<h4>
								<span>Тип</span>
								<br />
								{`${type}/${city}`}
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
export default VacancyList
