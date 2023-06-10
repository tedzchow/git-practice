import { React } from 'react'

const Selectbar = ({ label, onChange }) => {
  return (
    <div class='form-outline'>
      <label class='form-label' for='inputGroupSelect01'>
        {label}
      </label>
      <select
        class='form-select'
        id='inputGroupSelect01'
        onChange={onChange}
        label
      >
        <option selected>Choose...</option>
        <option value='Food'>Food</option>
        <option value='Clothes'>Clothes</option>
        <option value='Neccessary'>Neccessary</option>
      </select>
    </div>
  )
}

export default Selectbar
