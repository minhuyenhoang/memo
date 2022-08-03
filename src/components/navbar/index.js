export default function Navbar() {
	return (
		<nav className='fixed w-full flex justify-between p-5'>
			<p>Memo</p>
			<ul className='flex justify-between items-center space-x-5'>
				<li>Home</li>
				<li>About</li>
				<li>Logout</li>
				<li className='rounded-full p-5 bg-gray-300'></li>
			</ul>
		</nav>
	);
}
