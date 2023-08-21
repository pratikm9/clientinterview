import './App.css';
import { Routes, Route } from 'react-router-dom';
import Post from './components/post/Post';
import UserPost from './components/post/UserPost';
import UserNav from './components/header/UserNav';
import Navbar from './components/header/Navbar';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<Navbar />
							<Post />
						</div>
					}
				/>

				<Route
					path="/posts/:id"
					element={
						<div>
							<UserNav />
							<UserPost />
						</div>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
