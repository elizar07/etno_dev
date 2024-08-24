import axios from 'axios'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API } from '../../API'
import useFetch from '../../hooks/useFetch'
import Loading from '../../ui/Loading'

const AddVacan = () => {
	const [nameCompany, setNameCompany] = useState('')
	const [JobTitle, setJobTitle] = useState('')
	const [salary, setSalary] = useState('')
	const [priceTo, setPriceTo] = useState('')
	const [priceFrom, setPriceFrom] = useState('')
	const [typeVacancies, setTypeVacancies] = useState('')
	const [address, setAddress] = useState('')
	const [phone, setPhone] = useState('')
	const [email, setEmail] = useState('')
	const { data, loading } = useFetch()

	const successfuly = () =>
		toast.success('Отправлено', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		})

	const error = () =>
		toast.error('Заполните все поля', {
			position: 'top-center',
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: 'dark'
		})

	const handleAddVacancy = async (e: React.FormEvent) => {
		e.preventDefault()

		if (
			!nameCompany ||
			!JobTitle ||
			!salary ||
			!typeVacancies ||
			!priceFrom ||
			!priceTo ||
			!address ||
			!phone ||
			!email
		) {
			error()
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
				organization_icon: '',
				organization_icon_formats: [null]
			})

			if (response.data.success) {
				successfuly()
				setNameCompany('')
				setJobTitle('')
				setSalary('')
				setTypeVacancies('')
				setPriceFrom('')
				setPriceTo('')
				setAddress('')
				setPhone('')
				setEmail('')
			}
		} catch (error) {
			console.error('error', error)
			alert('Не удалось добавить вакансию')
		}
	}

	if (loading) {
		return (
			<div>
				<Loading />
			</div>
		)
	}

	return (
		<div id='addvacan'>
			<div className='container'>
				<form className='addvacan' onSubmit={handleAddVacancy}>
					<h1>Добавить вакансию</h1>
					<div className='addvacan-inputs'>
						<input
							placeholder='название компании'
							onChange={e => setNameCompany(e.target.value)}
							value={nameCompany}
							type='text'
						/>
						<input
							placeholder='Должность'
							onChange={e => setJobTitle(e.target.value)}
							value={JobTitle}
							type='text'
						/>
						<input
							placeholder='неделя & месяц & неоплачиваемый'
							onChange={e => setSalary(e.target.value)}
							value={salary}
							type='text'
						/>
						<input
							placeholder='Price from'
							onChange={e => setPriceFrom(e.target.value)}
							value={priceFrom}
							type='text'
						/>
						<input
							placeholder='Price to'
							onChange={e => setPriceTo(e.target.value)}
							value={priceTo}
							type='text'
						/>
						<input
							placeholder='Офис & Стажировка & Удаленка'
							onChange={e => setTypeVacancies(e.target.value)}
							value={typeVacancies}
							type='text'
						/>
						<input
							placeholder='телефон номер'
							onChange={e => setPhone(e.target.value)}
							value={phone}
							type='text'
						/>
						<input
							placeholder='Email..'
							onChange={e => setEmail(e.target.value)}
							value={email}
							type='text'
						/>
						<input
							placeholder='Адрес'
							onChange={e => setAddress(e.target.value)}
							value={address}
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
