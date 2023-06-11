import { Provider } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './redux/store'
import jwt_decode from 'jwt-decode'
import { setCurrentUser, logoutUser } from './redux/action/authActions'
import './App.css'
import Register from './auth/register'
import Login from './auth/login'
import Expense from './maincomponent/Expense'
import Navbar from './maincomponent/Navbar'
import Summary from './maincomponent/Summary'
import setauthtokentoheader from './redux/action/setauthtokentoheader'

if (localStorage.token) {
  setauthtokentoheader(localStorage.token)
  const decoded = jwt_decode(localStorage.token)
  store.dispatch(setCurrentUser(decoded))
  const currentTime = Date.now() / 1000
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser())
    window.location.href = './'
  }
}
function App () {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<Login />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/summary' element={<Summary />} />
              <Route exact path='/expense' element={<Expense />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </>
  )
}

export default App
