import React from 'react'
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className= {`${styles.navbar} container`}>
        <div className="logo">
            <img src="brand_logo.png" alt="nike-Logo" />
        </div>
        <div className="navlink">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar