import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';


function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);
  // state is just a variable that whenever you change its value, it's going to re-render the website and show the changes that were made

  const toggleNavbar = () => {
    //setOpenLinks(true)
    //setOpenLinks(false)
    setOpenLinks(!openLinks);
  };

  // ternary operators in javascript:  <someCondition> ? <value if True> : <value if False>
  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
          <img src={Logo}></img>
          <div className="hiddenLinks">
            <Link to="/work"> Work </Link>
            {/* <Link to="/services"> Services </Link> */}
            <Link to="/menu"> Menu </Link>
            <Link to="/about"> About </Link>
            <Link to="/contact"> Contact </Link>
          </div>
        </div>
        <div className="rightSide">
          <Link to="/work"> Work </Link>
          <Link to="/menu"> Menu </Link>
          {/* <Link to="/services"> Services </Link> */}
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
    </div>
  )
}

export default Navbar