import React, { useState } from 'react'
import "../App.css"

function Form() {
    let [emailErr,setEmailErr] = useState(true)
    let [email,setEmail] = useState("")
    let [password,setPassword] = useState("")
    let [confirm,setConfirm] = useState("")

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }
    
    function handleChange(event,props){
        if(props == "email"){
            setEmail(event.target.value)
            setEmailErr(!validateEmail(event.target.value));
        }
        else if(props == "password"){
            setPassword(event.target.value)
        }
        else{
            setConfirm(event.target.value)
        }
    }
    function handleSignup(event){
        if(password.length<8 || confirm !== password || emailErr){
            alert("form cannot be submitted")
            event.preventDefault()
        }
        else{
            alert("form submitted successfully")
        }
    }


  return (
    <form onSubmit={(event)=>{handleSignup(event)}}>
        <div className='inputcontainer'>
            <label htmlFor="email">Email:</label>
            <input type="email" id='email' value={email} onChange={(event)=>handleChange(event,"email")} style={emailErr?{border:"2px solid red"}:{border:"2px solid green"}}/>
            {emailErr && <p style={{color:"red"}}>Invalid email format</p>}
        </div>
        <div className='inputcontainer'>
            <label htmlFor="password">Password:</label>
            <input type='password' id='password' autoComplete='false' value={password} onChange={(event)=>handleChange(event,"password")} style={password.length<8?{border:"2px solid red"}:{border:"2px solid green"}}/>
            {password.length<8 && <p style={{color:"red"}}>Password must be atleast 8 characters</p>}
        </div>
        <div className='inputcontainer'>
            <label htmlFor="confirm">Confirm Password:</label>
            <input type="password" autoComplete='false' id='confirm' value={confirm} onChange={(event)=>handleChange(event,"confirm")} style={(confirm.length == 0 || confirm !== password)?{border:"2px solid red"}:{border:"2px solid green"}}/>
           {console.log(confirm == password)}
            {(confirm.length == 0 || confirm !== password) && <p style={{color:"red"}}>Passwords do not match</p>}
        </div>
        <input type="submit" value="Sign up" />
    </form>
  )
}


export default Form