import React from 'react';
import "./sidebar.css";
import logo from "../../assets/logo.svg";

const Sidebar = () => {
  return (
    <aside className = 'aside'>
        <a href = "home" className = 'nav__logo'>
            
        </a>
        <nav className = "nav">
            <div className = "nav__menu">
                <ul className = "nav__list">
                    <li className = "nav__item">
                        <a href = "#home" className = "nav__link">
                            <i className = "icon-home"></i>
                        </a>
                        <p className = "nav__desc">Home</p>
                    </li>

                    <li className = "nav__item">
                        <a href = "#about" className = "nav__link">
                            <i className = "icon-user-female"></i>                            
                        </a>
                        <p className = "nav__desc">About</p>
                    </li>

                    <li className = "nav__item">
                        <a href = "#projects" className = "nav__link">
                            <i className = "icon-briefcase"></i>                                                        
                        </a>
                        <p className = "nav__desc">Projects</p>
                    </li>

                    <li className = "nav__item">
                        <a href = "#contact" className = "nav__link">
                            <i className = "icon-bubbles"></i>                                                        
                        </a>
                        <p className = "nav__desc">Contact</p>
                    </li>                                                                                                                        
                </ul>
            </div>
        </nav>

        <div className = "nav__footer">
        </div>

    </aside>
  )
}

export default Sidebar
