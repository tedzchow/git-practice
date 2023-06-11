import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { logoutUser } from '../redux/action/authActions'
import { useDispatch } from 'react-redux'

const Navbar = () => {
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onclick = () => {
    dispatch(logoutUser())
    navigate('/')
  }
  return (
    <nav className='navbar navbar-light bg-primary  justify-content-end'>
      {!auth.isauth ? (
        <>
          <Link to='/' className='btn bg-primary p-2'>
            Login
          </Link>
          <Link to='/register' className='btn bg-primary p-2 mx-5'>
            Register
          </Link>
        </>
      ) : (
        <>
          <Link to='/expense' className='btn bg-primary p-2 ms-5'>
            Expense
          </Link>
          <Link to='/summary' className='btn bg-primary p-2 ms-5 '>
            Summary by Date
          </Link>
          <button onClick={() => onclick()} className='btn bg-primary p-2 ms-5'>
            Logout
          </button>
        </>
      )}
    </nav>
  )
}
export default Navbar
