import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Styled, { keyframes } from "styled-components"
import classNames from 'classnames'
import logoNav from "../../../static/images/others/sti.png"
import "./index.css"

const navItemList = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/partners",
    name: "R&D Company",
  },
  {
    path: "/reports",
    name: "Download",
  },
]

const NavBarList = Styled.div`
  display: flex;
`

const NavLogo = Styled.div`
  display: flex;
  cursor: pointer;
  margin-top: -5px;
`

const NavMenu = Styled.div`
  margin-left: auto;
  color: rgb(133, 133, 131);
  font-size: 1rem;
  letter-spacing: 0.01em;
  padding: 5px;
`

const slideRight = keyframes`
  0% {
    transform: translateX(-250px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const NavItem = Styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-top: 12px;
  cursor: pointer;
  text-align: center;
  animation: ${slideRight} ${props => props.duration} ease;
`


const NavBarContainer = Styled.div`
  background-color: #fff;
  height: 70px;
  max-width: 100vw;
  box-shadow: 0px 1px 5px rgba(0,0,0,0.2);
  font-family: helvetica, sans-serif;
  padding-top: 7px;
  position: fixed;
  width: 100vw;
  top: 0;
  z-index: 10;
`

const NavLogoImage = Styled.img`
  width: 50px;
  height: 60px;
  margin-top: 4px;
`

const NavBarWrapper = ({ children }) => (
  <NavBarContainer>
    <div className="container">
      <div className="row">
        <div className="col-lg-10 offset-lg-1">
          <NavBarList>{children}</NavBarList>
        </div>
      </div>
    </div>
  </NavBarContainer>
)

const NavBar = () => {
  const [isOpenHamburger, setIsOpenHamburger] = useState(false)

  const toggleHamburger = () => {
    const newIsOpenHamburger = !isOpenHamburger;
    if (newIsOpenHamburger) {
      document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
    } else {
      document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    }
    setIsOpenHamburger(newIsOpenHamburger)
  }

  const handleLinkClick = () => {
    document.getElementsByTagName('body')[0].style.overflowY = 'auto'
    setIsOpenHamburger(false)
  }

  const hamburgerClassName = classNames('nav-hamburger-bar', { 'nav-hamburger-active': isOpenHamburger })
  const hamburgerToggleClassName = classNames('nav-hamburger-toggle', { 'nav-hamburger-toggle-show': isOpenHamburger })

  const getDuration = (index) => `${200 + (index + 1) * 200}ms`

  return (
    <NavBarWrapper>
      <Link to="/" className='logo-slide'>
        <NavLogo>
          <NavLogoImage src={logoNav} alt="" />
        </NavLogo>
      </Link>
      <NavMenu className="nav-menu">
        {navItemList.map((nav, index) => {
          return (
            <Link to={nav.path} key={index} className="nav-text" activeClassName="nav-text-active">
              <NavItem duration={getDuration(index)}>
                <p>{nav.name}</p>
              </NavItem>
            </Link>
          )
        })}
      </NavMenu>
      <div className="nav-hamburger">
        <div className="nav-hamburger-item" onClick={toggleHamburger}>
          <div className={hamburgerClassName}></div>
          <div className={hamburgerClassName}></div>
          <div className={hamburgerClassName}></div>
        </div>
      </div>
      <div className={hamburgerToggleClassName}>
        <div className="nav-hamburger-toggle-menu">
          {navItemList.map((nav, index) => {
            return (
              <div key={index} className="nav-hamburger-toggle-item" onClick={handleLinkClick}>
                <Link to={nav.path} activeClassName="nav-text-active">
                  <p>{nav.name}</p>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </NavBarWrapper>
  )
}

export default NavBar
