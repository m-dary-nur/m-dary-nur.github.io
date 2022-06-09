import { memo, useEffect, useRef, useState } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Spa from './pages/Spa';

const App = memo(() => {
	const screenRef = useRef<HTMLDivElement>(null);
	const sectionRefs = [
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
		useRef<HTMLDivElement>(null),
	];

	const [view, setView] = useState('');

	useEffect(() => {
		document.title = 'Muhammad Dary Nur Rabbani';
	});

	return (
		<BrowserRouter>
			<div className="w-full h-screen bg-gray-50 text-base text-gray-600 font-sans">
				<Nav
					screenRef={screenRef}
					sectionRefs={sectionRefs}
					view={view}
					setView={setView}
				/>
				<div>
					<Routes>
						<Route
							path="/"
							element={
								<Spa screenRef={screenRef} sectionRefs={sectionRefs} view={view} setView={setView} />
							}
						/>
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
});

export default App;
