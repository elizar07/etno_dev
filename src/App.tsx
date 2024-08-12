import { Route, Routes } from 'react-router-dom'
import './App.scss'

import DetailPageorganization from './components/DetailPagesOrganization'
import { DetailPagesVacancies } from './components/DetailPagesVacancies'
import {
	Community,
	Events,
	Footer,
	Header,
	Hero,
	Organizations,
	Vacancies,
	Video,
	Admin

} from './components/index'

function App() {
	return (
		<div className=''>
			<Header />
			<Routes>
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
				<Route path='admin' element={<Admin/>}/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
