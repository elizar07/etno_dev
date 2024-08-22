import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'
import CommunityList from '../MainLists/communityList'

export const Community = () => {
	const { data, loading } = useFetch({ url: `${API}/community` })
	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		)
	}
	console.log(data)

	return (
		<div id='community'>
			<div className='container'>
				<div className='community'>
					<CommunityList data={data} />

					{/* <div className='community--telegram'>
						<h1>Наши ресурсы в Telegram</h1>
						<div className='community--telegram__blocks'>
							<div className='community--telegram__blocks--block'>
								<span>
									<FaTelegramPlane />
								</span>
								<p>Общий чат</p>
							</div>
						</div>
					</div>{' '} */}
				</div>
			</div>
		</div>
	)
}
