import React from 'react'
import Logo from '../../img/logo.png';

 const Navbar = () => {
  return (
    <div>
        <nav className='nav'>
            <div className='nav--head'>
                <img src={ Logo } className='nav--img' alt='logo' />
                <p>My travel journal</p>
            </div>
        </nav>
    </div>
  )
}
export default Navbar;