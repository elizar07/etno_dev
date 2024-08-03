import { Route, Routes } from 'react-router-dom'
import './App.scss'

import {Header,Footer,Hero,Community,Vacancies,Events,Video,Organizations,DetailPagesVacancies,} from './components/index'

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
			</Routes>
			<Footer />
		</div>
	)
}

export default App
