import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'
const AddEvent = () => {
	const navigate = useNavigate()
	const { loading } = useFetch()
	
	const [eventState, setEventState] = useState({
		nameOrganizator: '',
		temaEvents: '',
		placeEvents: '',
		timeEvents: '',
		cover: ''
	})
	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEventState({
			...eventState,
			[name]: value
		})
	}
	const handleAddEvent = async (e: React.FormEvent) => {
		e.preventDefault()

		const {
			nameOrganizator,
			temaEvents,
			placeEvents,
			timeEvents,
			cover
		} = eventState

		if (
			!nameOrganizator ||
			!temaEvents ||
			!placeEvents ||
			!timeEvents ||
			!cover
		) {
			
			toast.error('Заполните все поля')
			return
		}

		try {
			const response = await axios.post(`${API}/events`, {
				id: Math.random(),
				name: temaEvents,
				cover: cover,
				slug: 'string',
				location: placeEvents,
				created_at: 'string',
				updated_at: 'string',
				date: timeEvents,
				gradient: 0,
				event_type: 'string',
				button_type: 'string',
				organization_name: nameOrganizator,
				cover_formats: [null]
			})

			if (response.data.success) {
				toast.success('Вакансия успешно добавлена')

				setTimeout(() => {
					navigate('/Events')
				}, 2000)

				setEventState({
					nameOrganizator: '',
					temaEvents: '',
					placeEvents: '',
					timeEvents: '',
					cover:''
				})
			}
		} catch (error) {
console.error(Response.error)
			toast.error("не удалось добавить видео")
		}
	}
	if (loading) {
		return <Loading />
	}
	return (
		<div id='addevent'>
			<div className='container'>
				<form onSubmit={handleAddEvent} className='addevent'>
					<h1>Добавить мероприятие</h1>
					<div className='addevent-inputs'>
						<input
							name='nameOrganizator'
							placeholder='Название организатора'
							onChange={inputChangeHandler}
							value={eventState.nameOrganizator}
							type='text'
						/>
						<input
							name='temaEvents'
							placeholder='Тема мероприятие'
							onChange={inputChangeHandler}
							value={eventState.temaEvents}
							type='text'
						/>
						<input
							name='placeEvents'
							placeholder='Место мероприятие'
							onChange={inputChangeHandler}
							value={eventState.placeEvents}
							type='text'
						/>
						<input
							name='timeEvents'
							placeholder='Время мероприятие'
							onChange={inputChangeHandler}
							value={eventState.timeEvents}
							type='date'
						/>
						<input
							name='cover'
							placeholder='Url Image'
							onChange={inputChangeHandler}
							value={eventState.cover}
							type='text'
						/>
					</div>
					<button type='submit'>Добавить</button>
				</form>
			</div>
			<ToastContainer />
		</div>
	)
}

export default AddEvent
