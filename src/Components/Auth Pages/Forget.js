import React from 'react'
import './Auth.css';
function Forget() {
  return (
    <div>
        <div className='container'>
            <div className='row' >
               
                <div className='col-lg-12 col-md-12' style={{marginTop:'10rem', display:'flex', justifyContent:'center'}}>
                <div className='logobox'>
                    <p className= 'logo1 animate-charcter1'>MY Begs</p>
                </div>
                </div>
                <div className='col-lg-12 col-md-12' >
                <div style={{display:'flex', justifyContent:'center'}}>
                  <input className='field2' placeholder='  User Name'/>
                </div>
                </div>
                <div className='col-lg-12 col-md-12 option' >
                    <p >Select an option to reset your Password</p>
                </div>
                <div className="btndiv">
            <button className="forgetbtn">Sign in with Facebook</button>
            <button className="forgetbtn">Sign in with Google</button>
          </div>
            </div>

        </div>
    </div>
  )
}

export default Forget