import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// instead of useHistory 
const login = (props) => {
const [credentials, setCredentials] = useState({email:"",password:""})
const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email:credentials.email, password:credentials.password})

    });
     const json = await response.json();
     console.log(json); 
  
     if(json.success){
      //save the auth token and redirect
      localStorage.setItem('token', json.authToken);
      props.showAlert("LoggedIn Successfully", "success") 
      navigate("/");
     }
     else{   
       props.showAlert("Invalid Details", "Danger") 
     }
    }

  const onchange = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value })
  }


  return (
    <div className='mt-5'>
      <h2 className='text-center'>Login to continue to iNotebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 mt-3 ">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control"  value={credentials.email} onChange={onchange} id="email" name='email' aria-describedby="emailHelp" /> 
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control"  value={credentials.password} onChange={onchange} name='password' id="password" />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
    </div>
  );
}

export default login;
