import VideoList from '../MainLists/videoList'
import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import { VideoTypes } from '../../types/video'
import Loading from '../../ui/Loading'

export const Video = () => {
	const { data, loading } = useFetch({ url: `${API}meetups` })

	if (loading) {
		return <div><Loading/></div>
	}



	return (
		<div id='video'>
			<div className='container'>
				<div className='video'>
					<div className='video-add'>
						<button>Добавить видео</button>
					</div>
					<div className='video-title'>
						<h1>Все видео</h1>
					</div>
					<div className='video-block'>
						{data.map((el) => (
							<VideoList
								key={el.id}
								title={el.title}
								organization_name={el.organization_name}
								date={el.date}
								cover_formats={el.cover_formats}
							/>
						))}
					</div>
					<div className='next-pages'>
						<button>Следующая страница</button>
					</div>
				</div>
			</div>
		</div>
	)
}
