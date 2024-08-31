import { useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'
import VacancyList from '../MainLists/vacancyList'

export const Vacancies = () => {
	const navigate = useNavigate()
	const { data, loading } = useFetch()
	function DetailPages() {
		navigate('/detailPagesVacancies')
	}
	function navigateToAddVacancy() {
		navigate('/addVacancy')
	}
	if (loading) {
		return <Loading />
	}

	return (
		<div id='vacancies'>
			<div className='container'>
				<div className='vacancies'>
					<button className='add-vacancies' onClick={navigateToAddVacancy}>
						Добавить вакансию
					</button>
					<div className='jobs-contents'>
						{data &&
							data
								.sort((a: any, b: any) => b.id - a.id)
								.map((job: any,) => {
									return (
										<VacancyList
											id={job.index}
											companyName={job.organization_name}
											jobTitle={job.position}
											priceFrom={job.price_from}
											priceTo={job.price_to}
											type={job.type}
											city={job.city}
											currency={job.currency}
											salary={job.salary}
											organization_icon={job.organization_icon}
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
