import {useState} from "react"
import {Outlet} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="dark:bg-[#111827]">
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	)
}

export default App
