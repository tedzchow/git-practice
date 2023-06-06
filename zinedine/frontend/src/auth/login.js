import {React,useState} from "react";
import Inputgroup from "../common/Inputgroup";
import { useDispatch } from "react-redux";
import { loginuser } from "../redux/action/authActions";
import {useNavigate} from 'react-router-dom';

const Login=(props)=>{
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const onclick=(e)=>{
        e.preventDefault();
        if(password!==''&&email!==''){
            const userData={
                'email':email,
                'password':password
            };
            dispatch(loginuser(userData,navigate));
            setemail('');
            setpassword('');
        }
    }
    return(
        <>
            <div className="container login shadow p-3 mb-5 bg-body-tertiary">
                <Inputgroup label='Email:' name='email' placeholder='input email'type='email'value={email}onChange={(e)=>setemail(e.target.value)}/>
                <Inputgroup label='Password:' name='password' placeholder='input password'type='password'value={password}onChange={(e)=>setpassword(e.target.value)}/>
                <button className="btn btn-primary m-4" onClick={(e)=>onclick(e)}>Login</button>
            </div>
        </>
    )
}

export default Login;