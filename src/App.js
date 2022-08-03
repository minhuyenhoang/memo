import Card from './components/card';
import Navbar from './components/navbar';

function App() {
	return (
		<>
			<Navbar />
			<div className='pt-40'>
				<div>Memo</div>
				<Card />
			</div>
		</>
	);
}

export default App;
