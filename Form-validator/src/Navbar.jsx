import React from 'react';

const Navbar = () => {
  return (
    <>  
        <div className='navbar'>
            <h1 className='logo'> Login </h1>
            <div className='navbar-tabs'>
                <p className='tabs'>Home</p>
                <p className='tabs'>Services</p>
                <p className='tabs'>About</p>
                <p className='tabs'>Contact</p>
            </div>
            <button className='navbar-log'>Login</button>
        </div>
    </>
  )
}

export default Navbar