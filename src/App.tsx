import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Vacancies from './components/Vacancies';
import Events from './components/Events'
import Organizations from './components/Organizations'
import Community from './components/Community'
import Video from './components/Video';
import DetailPagesVacancies from './components/DetailPagesVacancies'

function App() {
    return (
			<div className=''>
				<Header />
				<Routes>
					<Route path='/' element={<Hero />} />
					<Route path='/Vacancies' element={<Vacancies />} />
					<Route path='/events' element={<Events/>} />
					<Route path='/video' element={<Video/>} />
					<Route path='/organizations' element={<Organizations/>} />
					<Route path='community' element={<Community/>} />
					<Route path='detailPagesVacancies' element={<DetailPagesVacancies/>}/>
				</Routes>
				<Footer />
			</div>
		)
}

export default App;
