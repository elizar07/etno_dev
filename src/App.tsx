import { Route, Routes } from 'react-router-dom'
import './App.scss'

import {Header,Footer,Hero,Community,Vacancies,Events,Video,Organizations,} from './components/index'
import { DetailPagesVacancies } from './components/DetailPagesVacancies'
import DetailPageorganization from './components/DetailPagesOrganization'

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
					element={<DetailPageorganization/>}
				/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
