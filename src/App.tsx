import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Community from './components/Community'
import DetailPagesVacancies from './components/DetailPagesVacancies'
import Events from './components/Events'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Organizations from './components/Organizations'
import Video from './components/Video'
import VacancyList from './components/Vacancies'
import Vacancies from './components/Vacancies/index'

function App() {
	return (
		<div className=''>
			<Header />
			<Routes>
				<Route path='/' element={<Hero />} />
				<Route path='/vacancyList' element={<VacancyList />} />
				<Route path='/vacancies' element={<Vacancies/>}/>
				<Route path='/events' element={<Events />} />
				<Route path='/video' element={<Video />} />
				<Route path='/organizations' element={<Organizations />} />
				<Route path='/community' element={<Community />} />
				<Route path='/detailPagesVacancies'element={<DetailPagesVacancies />}/>
			</Routes>
			<Footer />
		</div>
	)
}

export default App
