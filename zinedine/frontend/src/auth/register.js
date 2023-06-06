import {React,useState} from "react";
import Inputgroup from "../common/Inputgroup";
import { registerUser } from "../redux/action/authActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register=(props)=>{
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [password,setpassword]=useState('');
    const [repassword,setrepassword]=useState('');
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const onclick=(e)=>{
        e.preventDefault();
        if(password===repassword&&password!==''&&name!==''&&email!==''){
            const userData={
                'name':name,
                'email':email,
                'password':password
            };
            dispatch(registerUser(userData,navigate));
        }
    }
    return(
        <>
            <div className="container login shadow p-3 mb-5 bg-body-tertiary">
                <Inputgroup label='Name:' name='name' placeholder='input name'type='text' value={name} onChange={(e)=>setname(e.target.value)}/>
                <Inputgroup label='Email:' name='email' placeholder='input email'type='email'value={email}onChange={(e)=>setemail(e.target.value)}/>
                <Inputgroup label='Password:' name='password' placeholder='input password'type='password'value={password}onChange={(e)=>setpassword(e.target.value)}/>
                <Inputgroup label='Confirm:' name='repassword' placeholder='confirm password'type='password'value={repassword}onChange={(e)=>setrepassword(e.target.value)}/>
                <button className="btn btn-danger mt-4" onClick={(e)=>onclick(e)}>Register</button>
            </div>
        </>
    )
}

export default Register;