import './App.css'; 
import React, { useState } from "react";



function App() {
    const[values,setValues]=useState({
        firstname:'',
        lastname:'',
        username:'',
        email:'',
        password:'',
        phoneno:'',
        country:'',
        city:'',
        panno:'',
        adharno:''
    })
    const [countryCode, setCountryCode] = useState("");

const handleCountryCodeChange = (e) => {
  setCountryCode(e.target.value);
};

    const handleChanges=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
 const handleSubmit = (e) => {
  e.preventDefault();
  
  if (!values.firstname || values.firstname.length < 2) {
    alert("Please enter your first name (at least 2 letters).");
    return;
  }
  if (!values.lastname || values.lastname.length < 2) {
    alert("Please enter your last name (at least 2 letters).");
    return;
  }
  if (!values.username || values.username.length < 4) {
    alert("Please enter your username (at least 4 characters).");
    return;
  }
 if (!values.email || values.email.indexOf("@") === -1) {
    alert("Please enter a valid email address.");
    return;
  }
  if (!values.password || values.password.length < 6) {
    alert("Password must be at least 6 characters long.");
    return;
  }
 if (!values.phoneno || values.phoneno.length < 10 || isNaN(values.phoneno)) {
    alert("Please enter a valid phone number with at least 10 digits.");
    return;
  }
  if (!values.country) {
    alert("Please select your country.");
    return;
  }
    if (!values.city) {
    alert("Please select your city.");
    return;
  }
    if (values.panno && values.panno.length !== 10) {
    alert("Please enter a valid PAN number (10 characters).");
    return;
  }
  if (values.adharno && (values.adharno.length !== 12 || isNaN(values.adharno))) {
    alert("Please enter a valid 12-digit Aadhaar number.");
    return;
  }
console.log(values);
};

const [showPassword, setShowPassword] = useState(false);

 return ( 
        <div className = "container" >
        <h1 > Form< /h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstname">First Name</label>
            <input type="text" placeholder="Enter First Name " name="firstname"
            onChange={(e)=>handleChanges(e)} required value={values.firstname} />
            

            <label htmlFor="lastname">Last Name</label>
            <input type="text" placeholder="Enter Last Name" name="lastname"
            onChange={(e)=>handleChanges(e)} required value={values.lastname} />

            <label htmlFor="lastname">UserName</label>
            <input type="text" placeholder="Enter UserName" name="username"
            onChange={(e)=>handleChanges(e)} required value={values.username} />

            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter Email ID" name="email"
            onChange={handleChanges}  value={values.email} required/>

            <label htmlFor="password">Password</label>
            <input type={showPassword ? "text": "password"}name="password" placeholder="Enter Password" 
            onChange={(e)=>handleChanges(e)} required value={values.password} />
            
<div id="aa">
            <label htmlFor="phoneno">Phone Number</label>
         
            <select className="countrycode"  value={countryCode} onChange={handleCountryCodeChange} required>
                <option value="+1">+1(America)</option>
                <option value="+880">+880(Bangladesh)</option>
                <option value="+86">+86(China)</option>
                <option value="+20">+20(Egypt)</option>
                <option value="+33">+33(France)</option>
                <option value="+91">+91(India)</option>

            </select>
               <input type="tel" placeholder="Enter Phone Number" name="phoneno" className="phoneno"
            value={values.phoneno} onChange={(e) => setValues({ ...values, phoneno: e.target.value })} required / >
            </div>

            <label htmlFor="country">Country</label>
            <select name="country" id="country" onChange={(e)=>handleChanges(e)}>
                 <option value="america">Select Country</option>
                <option value="america">America</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="china">China</option>
                <option value="egypt">Egypt</option>
                <option value="france">France</option>
                <option value="india">India</option>
            </select>
             

            <label htmlFor="city">City</label>
            <select name="city" id="city" onChange={(e)=>handleChanges(e)}>
                  <option value="america">Select City</option>
                <option value="jaipur">Jaipur</option>
                <option value="sriganganagar">Srigangananagr</option>
                <option value="udaipur">Udaipur</option>
                <option value="delhi">Delhi</option>
                <option value="banglore">Banglore</option>
            </select>
             
            <label htmlFor="panno">Pan no.</label>
            <input type="text" placeholder="Enter Pan no." name= "panno" onChange={(e)=>handleChanges(e)}/>
              <label htmlFor="adharno">Adhar no.</label>
            <input type="text" placeholder="Enter Adhar no." name= "adharno" onChange={(e)=>handleChanges(e)}/>
            <button type="submit">submit</button>
          


        </form>
        
      
        </div>
    );
}

export default App;