import React, {useState} from 'react'

function SignUp() {
    const [data, setData] = useState({
        username : '',
        email : '',
        password : ''
    });
    const changeData = (evt)=>{
        evt.preventDefault();
        const target = evt.target;
        setData({
            ...data,
            [target.name] : target.value
        })
    }
    const sendData = (evt)=>{
        evt.preventDefault();
        alert('Data submitted!')
    }
  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
        <form onSubmit={sendData}>
            <section>
                <h1>Register</h1>
                <div>
                    <label>Username</label>
                    <div>
                        <input name='username' value={data.username} placeholder='Username'></input>
                    </div>
                </div>
                <div>
                    <label>Email</label>
                    <div>
                        <input name='email' value={data.password} onChange={changeData} placeholder='Email' type='email'></input>
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input name='password' value={data.password} placeholder='Password' type='password'></input>
                    </div>
                </div>
                <button type='submit'>SignUp</button>
            </section>
        </form>
    </div>
  )
}

export default SignUp;