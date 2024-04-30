
import React from 'react'
import {useEffect, useState} from "react";
import UserData from './UserData'
import './showDetails.css'

const url = "http://localhost:4000/api/v1/user/details";

const ShowDetails = (props) => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        const detail = data.data;
        if (detail.length > 0) {
          setUsers(detail);
        }
        // console.log(detail);
      } catch (e) {
        console.error(e)
      }
    }
    
    
    useEffect(() => {
        // console.log("nnn",props.val);
        fetchUsers(url);
    }, [props.val])
    return (
    <div className='outerShowDetails'>
        <table>
            <thead>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            <UserData users={users}/>
            </tbody>
        </table>
    </div>
)}

export default ShowDetails;