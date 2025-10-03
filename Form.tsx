import React from 'react';

interface FormProps {
    userData: {
    name: string;
    email: string;
    }
    onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Form:React.FC<FormProps> = ({userData, onInputChange}) => {
  return(
    <form>
        <h2>User Form</h2>
        <label>
            Name: <input  type="text" name= "name" value={userData.name} onChange={onInputChange} placeholder="Enter Your NAme"/>
        </label>
        <br></br>
        <label>
            Email: <input type="email" name="email" value={userData.email} onChange={onInputChange} placeholder="Enter Your Email"/>
        </label>
    </form>
  )


}


export default Form;