import React, { useState } from 'react'

const Navbar = () => {
    const [openHamburgerMenu , setOpenHamburgerMenu] = useState('');
    const hamburgerToggle = () =>{
        let hamburgerMenuDiv = document.getElementById('collapse');
        hamburgerMenuDiv.classList.remove("collapse");
        
        setOpenHamburgerMenu(openHamburgerMenu)

    }
   

  return (
    <nav id='nav' className='navbar bg-dark navbar-dark navbar-expand-lg'>
        <div className='container'>
        <a href='' className='navbar-brand'>WEBSITE</a>
        <button className='navbar-toggler' onClick={hamburgerToggle} > 
            <span className='navbar-toggler-icon'></span>
        </button>
        <div id='collapse' className='collapse navbar-collapse'>
            <ul className='navbar-nav ms-auto'>
                <li className='nav-item'>
                    <a href='' className='nav-link'>Home</a>
                </li>
                <li className='nav-item'>
                    <a href='' className='nav-link'>Explore</a>
                </li>
                <li className='nav-item'>
                    <a href='' className='nav-link'>Create</a>
                </li>
                <li className='nav-item'>
                    <a href='' className='nav-link'>Share</a>
                </li>
            </ul>
        </div>
        </div>
    </nav>
  )
}

export default Navbar
