import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import RegisterScreen from "./screens/RegisterScreen"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <>
      <Router>
        <Header/>
        <main className="py-3">
        <Routes>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/login' element={<LoginScreen/>}/>
          <Route path='/' element={<HomeScreen/>}/>
        </Routes>
        </main>
        <Footer/>
      </Router>
    </>
  )
}

export default App
