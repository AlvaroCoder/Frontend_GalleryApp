import React from 'react'
import { useUser } from '../Hooks/UserHook';
import { Link } from 'react-router-dom';

function ButtonsLogin() {
    return(
        <section className='float-right w-fit mr-4 h-10'>
            <button className='p-2 rounded-lg '><Link to={'/login'}>Login</Link></button>
            <button className='p-2 rounded-lg text-white bg-[red] ml-2'><Link to={'/signup'}>SignUp</Link></button>
        </section>
    )
}
function ButtonsProfile() {
    return(
        <section>
            <h1>Hola</h1>
        </section>
    )
}

function Navbar() {
    const {isLogin} = useUser();
    const buttons = isLogin ? <ButtonsProfile/> : <ButtonsLogin/>
    return (
    <nav className='w-full shadow-md mb-2 min-h-fit flex items-center justify-evenly px-2 py-4'>
        <div className='h-10 flex items-center'>
            <h1>Gallery</h1>
        </div>
        <div className='w-2/3 h-10 mr-2 flex items-center justify-center px-4 '>
            <input className='w-full' placeholder='Buscar'></input>
        </div>
        <div className='w-1/5 '>
            {buttons}
        </div>
    </nav>
  )
}

export default Navbar;