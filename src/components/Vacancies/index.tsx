import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import VacancyList from '../MainLists/vacancyList'
const Vacancies = () => {
	const navigate = useNavigate()
  const { data, loading } = useFetch()
	function DetailPages() {
		navigate('/detailPagesVacancies')
	}
if(loading){
	return <div>loading....</div>
}
	return (
		<div id='vacancies'>
			<div className='container'>
				<div className='vacancies'>
					<button className='add-vacancies'>Добавить вакансию</button>
					<div className='jobs-contents'>
						{data &&
							data.map((job: any, index: number) => {
								return (
									<VacancyList
										key={index}
										companyName={job.organization_name}
										jobTitle={job.position}
										paymentType={job.paymentType}
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
					<button className='next-page'>Следующая страница</button>
				</div>
			</div>
			<div className='vacancies-modal'></div>
		</div>
	)
}

export default Vacancies
