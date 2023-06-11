import { React, useState } from 'react'
import Inputgroup from '../common/Inputgroup'
import { useDispatch } from 'react-redux'
import { loginuser } from '../redux/action/authActions'
import { useNavigate } from 'react-router-dom'

const Login = props => {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const onclick = e => {
    e.preventDefault()
    if (password !== '' && email !== '') {
      const userData = {
        email: email,
        password: password
      }
      dispatch(loginuser(userData, navigate))
      setemail('')
      setpassword('')
    }
  }
  return (
    <>
      <div className='container login shadow p-3  bg-warning'>
        <div className='justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='480'
            height='80'
            fill='currentColor'
            class='bi bi-person-badge-fill'
            viewBox='0 0 16 16'
          >
            <path d='M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z' />
          </svg>
        </div>
        <Inputgroup
          label='Email:'
          name='email'
          placeholder='input email'
          type='email'
          value={email}
          onChange={e => setemail(e.target.value)}
        />
        <Inputgroup
          label='Password:'
          name='password'
          placeholder='input password'
          type='password'
          value={password}
          onChange={e => setpassword(e.target.value)}
        />
        <button className='btn btn-success m-4' onClick={e => onclick(e)}>
          Login
        </button>
      </div>
    </>
  )
}

export default Login
