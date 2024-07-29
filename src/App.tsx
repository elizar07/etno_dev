import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Community from './components/Community'
import DetailPagesVacancies from './components/DetailPagesVacancies'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import EventList from './components/MainLists/eventList'
import Organizations from './components/Organizations'
import Vacancies from './components/Vacancies'
import VacancyList from './components/Vacancies/index'
import Video from './components/Video'
import Events from './components/Events'
function App() {
	return (
		<div className=''>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/vacancyList' element={<VacancyList />} />
				<Route path='/vacancies' element={<Vacancies />} />
				<Route path='/events' element={<Events />} />
				<Route path='/video' element={<Video />} />
				<Route path='/organizations' element={<Organizations />} />
				<Route path='/community' element={<Community />} />
				<Route
					path='/detailPagesVacancies'
					element={<DetailPagesVacancies />}
				/>
				<Route path='/eventList' element={<EventList/>} />
			</Routes>
			<Footer />
		</div>
	)
}

export default App
