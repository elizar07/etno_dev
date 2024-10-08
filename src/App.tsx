import { Route, Routes } from 'react-router-dom'
import './App.scss'

import AddEvent from './components/AddEvent'
import AddVacancy from './components/AddVacancy'
import DetailPageorganization from './components/DetailPagesOrganization'
import { DetailPagesVacancies } from './components/DetailPagesVacancies'
import {
	Admin,
	Community,
	Events,
	Footer,
	Header,
	Hero,
	Organizations,
	Vacancies,
	Video
} from './components/index'
import MainPagesAdd from './components/MainPagesAdd'
import RouterProtector from './components/RouterProtect'

function App() {
	return (
		<div className=''>
			<Header />
			<Routes>
				<Route
					path='/MainPagesAdd'
					element={
						<RouterProtector>
							<MainPagesAdd />
						</RouterProtector>
					}
				/>
				<Route path='/' element={<Hero />} />
				<Route path='/vacancies' element={<Vacancies />} />
				<Route path='/events' element={<Events />} />
				<Route path='/video' element={<Video />} />
				<Route path='/organizations' element={<Organizations />} />
				<Route path='/community' element={<Community />} />
				<Route
					path='/detailPagesVacancies'
					element={<DetailPagesVacancies />}
				/>
				<Route
					path='/detailPagesOrganization'
					element={<DetailPageorganization />}
				/>
				<Route path='admin' element={<Admin />} />
				<Route
					path='/addVacancy'
					element={
						<RouterProtector>
							<AddVacancy />
						</RouterProtector>
					}
				/>
				<Route
					path='/addEvent'
					element={
						<RouterProtector>
							<AddEvent />
						</RouterProtector>
					}
				/>
			</Routes>
			<Footer/>
		</div>
	)
}

export default App
