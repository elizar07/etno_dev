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
	salary = ''
}:IVacancyType) => {
	const navigate = useNavigate()

	function DetailPages() {
		navigate('/detailPagesVacancies')
	}

	return (
		<div>
			<div className='jobs-content' onClick={DetailPages}>
				<img
					src='https://devkg.com/images/organizations/c0814e899a66d41ede3aad818e921946.png'
					alt='img'
					style={{ width: '30px', height: '30px' }}
				/>
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
