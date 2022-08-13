import React,{useState} from 'react'
import './Auth.css';
import Button from "react-bootstrap/Button";
import {Link} from 'react-router-dom';
import axios from 'axios';

function Register() {

  const url="http://7d16-2405-201-300b-e015-d4e2-8b5f-9fbc-b908.ngrok.io/api/register"
    const [data, setData] = useState({
        name:'',
        email:'',
        password:'',
        
    })
    function handle(e) {
        const newdata = {...data}
        newdata[e.target.id]= e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            email: data.email,
            password: data.password,
            
        })
        .then(res=> {
            console.log(res.data)
        }) 
        
    }
  return (
    <div>
        <div className='container' style={{marginTop:'6rem'}}>
        
            <div className='row' >
            <div style={{marginBottom:'1rem'}}>
                <h2 className="heading">Register With My Bags</h2>
                </div>
                <div className='col-lg-6 col-md-12'>
                  <p className='ihead' >First Name</p>
                 <div style={{display:'flex', justifyContent:'center'}}>
                 <input className='field1' placeholder='  First Name' onChange={(e)=>handle(e)} id="name" value={data.name}/>
                 </div>
                  
                
                </div>
                <div className='col-lg-6 col-md-12'>
                <p className='ihead' >Last Name</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <input className='field1' placeholder='  Last Name'/></div>
                </div>
                <div className='col-lg-6 col-md-12'>
                <p className='ihead' >Email Address</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <input className='field1' placeholder='  Email Address' onChange={(e)=>handle(e)} id="email" value={data.email}/></div>
                </div>
                <div className='col-lg-6 col-md-12'>
                <p className='ihead' >Phone No.</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <input className='field1' placeholder='  Phone No.'/></div>
                </div>
                <div className='col-lg-6 col-md-12'>
                <p className='ihead' >Gender</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <select className='field1'>
                    <option>  Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Others</option>

                  </select>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                <p className='ihead' >Age Group</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <select className='field1'>
                    <option>  Age Group</option>
                    <option>0 to 22</option>
                    <option>23 to 29</option>
                    <option>30 to 35</option>
                    <option>36 to 40</option>
                    <option>40 plus</option>

                  </select>
                  </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                <p className='ihead' >Password</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <input className='field1' placeholder='  Password' onChange={(e)=>handle(e)} id="password" value={data.password}/>
                </div>
                </div>
                <div className='col-lg-6 col-md-12'>
                    
                <p className='ihead' >Confirm Password</p>
                <div style={{display:'flex', justifyContent:'center'}}>
                  <input className='field1' placeholder='  Confirm Password'/></div>
                </div>
                <div className="col-lg-12 logBtn1">
            <Button
              style={{ width:'100%',
                height:'2.5rem', borderRadius: '0px'}}
              variant="dark"
              onClick={(e) => submit(e)}
            >
              Create Account
            </Button>
            </div>
           
            </div>

        </div>
    </div>
  )
}

export default Register