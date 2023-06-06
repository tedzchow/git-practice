import {React,useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Inputgroup from "../common/Inputgroup";
import {useNavigate} from 'react-router-dom';
import { add_exp, read_exp, update_exp,del_exp } from "../redux/action/expActions";
 const Expense=()=>{
    const dispatch=useDispatch();
    const navigate =useNavigate();
    const [date,setdate]=useState(new Date());
    const [amount,setamount]=useState('');
    const [description,setdescription]=useState('');
    const [deleteid,setdeleteid]=useState(0);
    const [editid,seteditid]=useState(0);
    const [dateedit,setdateedit]=useState(new Date());
    const [amountedit,setamountedit]=useState('');
    const [descriptionedit,setdescriptionedit]=useState('');
    const user=useSelector(state=>state.auth.user);
    const exps=useSelector(state=>state.exp.exp);
    const isauth=useSelector(state=>state.auth.isauth);
    useEffect(()=>{
        dispatch(read_exp(user.id));
        if(!isauth){navigate('/');}
    },[]);
    const add=()=>{
        const newexp={
            'date':date,
            'amount':amount,
            'description':description,
            'id':user.id
        }
       setdate('');
       setdescription('');
       setamount('');
       dispatch(add_exp(newexp));
    }
    const edit=(item)=>{
        seteditid(item._id);
        setdescriptionedit(item.description);
        setamountedit(item.amount);
        setdateedit(item.date);
    }
    const update=()=>{
        const updateexp={
            'date':dateedit,
            'amount':amountedit,
            'description':descriptionedit,
            'id':user.id,
            '_id':editid
        }
        dispatch(update_exp(updateexp,editid));
        dispatch(read_exp(user.id));
        seteditid(0);
    }
    const del=()=>{
        dispatch(del_exp(deleteid));
        dispatch(read_exp(user.id));
        setdeleteid(0);
    }
    return(
        <>
        <div className="container d-flex justify-content-around mt-4">
            <Inputgroup type='date' label="Date:" value={date} onChange={(e)=>setdate(e.target.value)}></Inputgroup>
            <Inputgroup type='Number' label="Amount:" value={amount}onChange={(e)=>setamount(e.target.value)}></Inputgroup>
            <Inputgroup type='textarea' label="description:" value={description}onChange={(e)=>setdescription(e.target.value)}></Inputgroup>
            <button className="btn btn-success" onClick={()=>add()}>Add</button>
        </div>
        <table  className="text-center bg-primary p-3 table table-striped">
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Amount</td>
                    <td>Description</td>
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
            </thead>
            <tbody>
        {
            exps.map((item,key)=>{
                return(

                <tr key={item._id}className={item._id&&'bg-success'}>
                    <td>
                    {item._id===editid?<input type="date" defaultValue={item.date.slice(0,10)} onChange={(e)=>{setdateedit(e.target.value)}} ></input>:item.date.slice(0,10)}
                    </td>
                    <td>
                    {item._id===editid?<input type="number" defaultValue={item.amount} onChange={(e)=>{setamountedit(e.target.value)}}  ></input>:item.amount}
                    </td>
                    <td>
                    {item._id===editid?<input type="textarea" defaultValue={item.description}onChange={(e)=>{setdescriptionedit(e.target.value)}}  ></input>:item.description}
                    </td>
                    <td>{item._id===editid?<div className="btn btn-info" onClick={()=>update()}>Update</div>:<div className="btn btn-info" onClick={()=>edit(item)}>Edit</div>}</td>
                    <td> <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setdeleteid(item._id)}> Delete</button></td>
                </tr>
                )
            })
        }
            </tbody>
        </table>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>del()}>Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Expense;