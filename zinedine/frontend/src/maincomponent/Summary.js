import { React, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Inputgroup from '../common/Inputgroup'
import { read_exp } from '../redux/action/expActions'
import { useNavigate } from 'react-router-dom'

const Summary = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [date, setdate] = useState(new Date())
  const [sum, setsum] = useState()
  const [from, setfrom] = useState(new Date())
  const [to, setto] = useState(new Date())
  const [newexp, setnewexp] = useState([])
  const exps = useSelector(state => state.exp.exp)
  const user = useSelector(state => state.auth.user)
  const isauth = useSelector(state => state.auth.isauth)
  useEffect(() => {
    dispatch(read_exp(user.id))
    if (!isauth) {
      navigate('/')
    }
  }, [])

  const desplay1 = () => {
    setsum(0)
    exps.forEach(exp => {
      if (exp.date.slice(0, 10) === date) {
        setsum(s => s + Number(exp.amount))
      }
    })
  }
  const desplay2 = () => {
    setnewexp([])
    exps.forEach(exp => {
      if (
        Date.parse(new Date(exp.date)) >= Date.parse(new Date(from)) &&
        Date.parse(new Date(exp.date)) <= Date.parse(new Date(to))
      ) {
        setnewexp(e => [...e, exp])
      }
    })
  }
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div>
              <Inputgroup
                type='date'
                label='Date:'
                value={date}
                onChange={e => setdate(e.target.value)}
              ></Inputgroup>
              <Inputgroup type='number' label='Sum:' value={sum}></Inputgroup>
              <button
                className='btn btn-success m-3'
                onClick={() => desplay1()}
              >
                Desplay
              </button>
            </div>
            <table className='text-center bg-primary p-3 table table-striped m-3'>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Amount</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {exps.map((item, key) => {
                  return (
                    <tr key={'_' + key}>
                      <td> {item.date.slice(0, 10)} </td>
                      <td> {item.amount} </td>
                      <td> {item.description} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className='col mt-5'>
            <div>
              <Inputgroup
                type='date'
                label='From:'
                value={from}
                onChange={e => setfrom(e.target.value)}
              ></Inputgroup>
              ~
              <Inputgroup
                type='date'
                label='To:'
                value={to}
                onChange={e => setto(e.target.value)}
              ></Inputgroup>
              <button
                className='btn btn-success m-3'
                onClick={() => desplay2()}
              >
                Desplay
              </button>
            </div>
            <table className='text-center bg-primary p-3 table table-striped'>
              <thead>
                <tr>
                  <td>Date</td>
                  <td>Amount</td>
                  <td>Description</td>
                </tr>
              </thead>
              <tbody>
                {newexp.map((item, key) => {
                  return (
                    <tr>
                      <td> {item.date.slice(0, 10)} </td>
                      <td> {item.amount} </td>
                      <td> {item.description} </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
export default Summary
