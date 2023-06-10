import { GoogleLogin } from '@react-oauth/google';
import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { useUser } from '../Hooks/UserHook';

function Login() {
  const { sigIn } = useUser();
  const [data, setData] = useState({
    username : '',
    password : ''
  });
  const changeData =(evt)=>{
    evt.preventDefault();
    const target = evt.target;
    setData({
      ...data,
      [target.name] : target.value 
    })
  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
      <form>
          <section>
            <h1>Welcome Again!</h1>
            <div>
              <label>Username</label>
              <div>
                <input name='username' value={data.username} onChange={changeData} placeholder='Username'></input>
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <input name='password' value={data.password} onChange={changeData} placeholder='Password' type='password'></input>
              </div>
            </div>
            <button type='submit'>Login</button>
            <p>
              <span>Don't you have an account ? <Link to={'/signup'}>Register</Link></span>
            </p>
          </section>
          <section>
            <GoogleLogin
              onSuccess={credentialResponse => {
                const decode = jwt_decode(credentialResponse.credential);
                const data2send = {
                  username : decode.given_name,
                  email :  decode.email
                }
                sigIn(data2send);
              }}
              onError={()=>{
                console.log('Login failed');
              }}
              useOneTap
            ></GoogleLogin>
          
          </section>
      </form>
    </div>
  )
}

export default Login;