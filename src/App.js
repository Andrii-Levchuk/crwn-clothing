import Home from './components/routes/homepage/home.component'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/routes/navigation/navigation.component'
import './index.scss'
import SignIn from './components/routes/sign-in/sign-in.component'


const Shop = () => {
	return <h1>Hello from super cool React guy</h1>
}

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path='shop' element={<Shop />} />
				<Route path='sign-In' element={<SignIn />} />
			</Route>
		</Routes>
	)
}

export default App
