import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'
import OrganizationList from '../MainLists/organizationList'

export function Organizations() {
	const { data, loading } = useFetch({ url: `${API}/organizations` })
	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		)
	}
	console.log(data)

	return (
		<div id='organizations'>
			<div className='container'>
				<div className='organizations'>
					{data.map(el => (
						<OrganizationList
							key={el.id}
							icon={el.icon}
							name={el.name}
							jobs_count={el.jobs_count}
							meetups_count={el.meetups_count}
							events_count={el.events_count}
						/>
					))}
					<button className='next-page'>Следующая страница</button>
				</div>
			</div>
		</div>
	)
}
