
import React from 'react'
import { useState } from 'react';
import './fillDetails.css'


const FillDetails = ( props ) => {

	const [details,setDetails] = useState({ fname:"" , lname:"", email: "", address: "", phone: ""});
	
	const setValue = (e) =>{
		const {name,value} = e.target;
		setDetails({...details,[name]:value});
	}
	
	const submitData  = (e) =>{
		e.preventDefault();
		fetch('http://localhost:4000/api/v1/user/register', {
			method: 'POST',
            headers: {
				'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        }).then(()=>{
			props.data.fnc(!props.data.dt);
			// console.log("jii",props.data.dt);
			setDetails({ fname:"" , lname:"", email: "", address: "", phone: ""});
		})
		.catch(err=>console.log(err));
	}

  return (


  <div className="container">
	<div className="screen">
		<div className="screen__content">
			<div className="login__field">
				<i className="login__icon fa-solid fa-user"></i>
				<input type="text"  value={details.fname} placeholder='First Name' onChange={setValue} name='fname'/>
			</div>
			<div className="login__field">
				<i className="login__icon fa-solid fa-user"></i>
				<input type="text"  value={details.lname} placeholder='Last Name' onChange={setValue} name='lname'/>
			</div>
			<div className="login__field">
				<i className="login__icon fa-solid fa-envelope"></i>
				<input type="text"  value={details.email} placeholder='email' onChange={setValue} name='email'/>
			</div>
			<div className="login__field">
				<i className="login_icon fa-solid fa-location-pin"></i>
				<input type="text"  value={details.address} placeholder='Address' onChange={setValue} name='address'/>
			</div>
			<div className="login__field">
				<i className="login_icon fa-solid fa-phone"></i>
				<input type="text"  value={details.phone} placeholder='Phone No.' onChange={setValue} name='phone'/>
			</div>
			<button className="button login__submit">
				<span className="button__text" onClick={submitData}>Submit Data</span>
			</button>
		</div>
		<div className="screen__background">
			<span className="screen__background__shape screen__background__shape4"></span>
			<span className="screen__background__shape screen__background__shape3"></span>		
			<span className="screen__background__shape screen__background__shape2"></span>
			<span className="screen__background__shape screen__background__shape1"></span>
		</div>		
	</div>
</div>	


  )
}

export default FillDetails
