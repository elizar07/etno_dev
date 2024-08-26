import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'

const AddVacan = () => {
	const navigate = useNavigate()
	const {loading } = useFetch()
	const [eventState, setEventState] = useState({
		nameCompany: '',
		JobTitle: '',
		salary: '',
		priceTo: '',
		priceFrom: '',
		typeVacancies: '',
		address: '',
		phone: '',
		email: '',
		organization_icon:''
	})

	const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setEventState({
			...eventState,
			[name]: value
		})
	}


	const handleAddVacancy = async (e: React.FormEvent) => {
		e.preventDefault()

		const {
			nameCompany,
			JobTitle,
			salary,
			priceFrom,
			priceTo,
			typeVacancies,
			address,
			phone,
			email,
			organization_icon
		} = eventState

		if (
			!nameCompany ||
			!JobTitle ||
			!salary ||
			!typeVacancies ||
			!priceFrom ||
			!priceTo ||
			!address ||
			!phone ||
			!email ||
			!organization_icon
		) {
			toast.error('Заполните все поля')
			return
		}

		try {
			const response = await axios.post(`${API}/jobs`, {
				organization_name: nameCompany,
				price_from: Number(priceFrom),
				price_to: Number(priceTo),
				currency: 'kgs',
				position: JobTitle,
				city: address,
				salary: salary,
				phone: phone,
				type: typeVacancies,
				id: Math.random(),
				slug: '',
				created_at: '',
				updated_at: '',
				is_archived: true,
				gradient: 0,
				workday: '',
				organization_icon: organization_icon,
				organization_icon_formats: [null]
			})

			if (response.data.success) {
				toast.success('Вакансия успешно добавлена')

				setTimeout(() => {
					navigate('/Vacancies') 
				}, 2000) 

				setEventState({
					nameCompany: '',
					JobTitle: '',
					salary: '',
					priceTo: '',
					priceFrom: '',
					typeVacancies: '',
					address: '',
					phone: '',
					email: '',
					organization_icon:''
				})
			}
		} catch (error) {
			console.error(Response.error)
			toast.error('Не удалось добавить вакансию')
		}
	}


	if (loading) {
		return <Loading />
	}
	return (
		<div id='addvacan'>
			<div className='container'>
				<form className='addvacan' onSubmit={handleAddVacancy}>
					<h1>Добавить вакансию</h1>
					<div className='addvacan-inputs'>
						<input
							name='nameCompany'
							placeholder='название компании'
							onChange={inputChangeHandler}
							value={eventState.nameCompany}
							type='text'
						/>
						<input
							name='JobTitle'
							placeholder='Должность'
							onChange={inputChangeHandler}
							value={eventState.JobTitle}
							type='text'
						/>
						<input
							name='salary'
							placeholder='неделя & месяц & неоплачиваемый'
							onChange={inputChangeHandler}
							value={eventState.salary}
							type='text'
						/>
						<input
							name='priceFrom'
							placeholder='Price from'
							onChange={inputChangeHandler}
							value={eventState.priceFrom}
							type='text'
						/>
						<input
							name='priceTo'
							placeholder='Price to'
							onChange={inputChangeHandler}
							value={eventState.priceTo}
							type='text'
						/>
						<input
							name='typeVacancies'
							placeholder='Офис & Стажировка & Удаленка'
							onChange={inputChangeHandler}
							value={eventState.typeVacancies}
							type='text'
						/>
						<input
							name='phone'
							placeholder='телефон номер'
							onChange={inputChangeHandler}
							value={eventState.phone}
							type='text'
						/>
						<input
							name='email'
							placeholder='Email..'
							onChange={inputChangeHandler}
							value={eventState.email}
							type='text'
						/>
						<input
							name='address'
							placeholder='Адрес'
							onChange={inputChangeHandler}
							value={eventState.address}
							type='text'
						/>
						<input
							name='organization_icon'
							placeholder='Url logo...'
							onChange={inputChangeHandler}
							value={eventState.organization_icon}
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

export default AddVacan
