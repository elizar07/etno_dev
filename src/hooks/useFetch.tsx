import { useEffect, useState } from 'react'
import { API } from '../API'

const jobs_url = `${API}/jobs`
const useFetch = (
	{ url } = {
		url: jobs_url
	}
) => {
	const [data, setData] = useState<any>([])
	const [loading, setLoading] = useState(false)

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await fetch(url)
			const data = await response.json()
			if (data.statusCode === 200) {
				setData(data.data)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchData()
	}, [])

	return { data, loading }
}

export default useFetch
