import {React} from 'react';

const Inputgroup=(
    {label,
    type,
    placeholder, 
    name, 
    value,
    onChange,
    defaultValue,
    error})=>{
    return(
        
            <div className="form-outline">
                <label className="form-label" htmlFor="formControlLg">{label}</label>
                <input id="formControlLg" className="form-control form-control-lg" defaultValue={defaultValue} type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
            </div>
            
        
    )
}

export default Inputgroup;