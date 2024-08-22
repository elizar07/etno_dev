import { Route, Routes } from 'react-router-dom'
import './App.scss'

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
import RouterProtector from './components/RouterProtect'

function App() {
	return (
		<div className=''>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route
					path='/vacancies'
					element={
						<RouterProtector>
							<Vacancies />
						</RouterProtector>
					}
				/>
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
			</Routes>
			<Footer />
		</div>
	)
}

export default App
