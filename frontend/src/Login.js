import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
// import { handleSubmit } from './formUtils.js';

function Login() {

  const [details,setDetails] = useState({fname:"" , lname: "" , email:"" , address:"" , phone: ""});
  
  const handleInput = (e) =>{
    const {name,value} = e.target;
    setDetails({...details,[name]:value});
  }
  
  
  const submitData = (e) =>{
    e.preventDefault();

    fetch('http://localhost:4000/api/v1/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(details)
    })
   .then(response =>{
    response.json();
    setDetails({fname:"" , lname: "" , email:"" , address:"" , phone: ""});
  })
   .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-400 justify-content-centre align-centre">
      <div className="p-3 bg-white w-25">
        <form>

          <div className="mb-3">
            <label htmlFor="Fname">Fname</label>
            <input
              type="Fname"
              placeholder="Enter First name"
              className="form-control"
              name='fname'
              onChange = {handleInput}
              value = {details.fname}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Lname">Lname</label>
            <input
              type="Lname"
              placeholder="Enter last name"
              className="form-control"
              name='lname'
              onChange = {handleInput}
              value = {details.lname}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Email">Email</label>
            <input
              type="Email"
              placeholder="Enter Email"
              className="form-control"
              name='email'
              onChange = {handleInput}
              value = {details.email}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Address">Address</label>
            <input
              type="Address"
              placeholder="Enter Address"
              className="form-control"
              name='address'
              onChange = {handleInput}
              value = {details.address}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Contactno">Contact No</label>
            <input
              type="Contactno"
              placeholder="Enter Phone no"
              className="form-control"
              name='phone'
              onChange = {handleInput}
              value = {details.phone}
            />
          </div>
          <button className="btn btn-success" onClick={submitData}>Register</button>
        </form>
      </div>
    </div>
    
  );
}

export default Login;
