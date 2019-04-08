import React from 'react'
import { Link } from 'gatsby'
import Styled from 'styled-components'
import logoNav from '../../../static/images/others/sti.png'
import './index.css'

const navItemList = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/partners',
    name: 'R&D Company',
  },
  {
    path: '/reports',
    name: 'Download',
  },
]

const NavBarList = Styled.div`
  display: flex;
  width: 85%;
  margin: auto;
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

const NavItem = Styled.div`
  display: inline-block;
  margin-left: 30px;
  margin-top: 12px;
  cursor: pointer;
  text-align: center;

  &;hover {
    box-shadow: none !important;
    border: solid 1px #7a5699 !important;
    outline: none !important;
  }

  .nav-text:hover {
    color: #7a5699;
    transition: all 0.2s;
  }
`

const NavBarContainer = Styled.div`
  background-color: #fff;
  height: 70px;
  max-width: 100vw;
  box-shadow:0px 2px 2px #ddd;
  font-family: helvetica, sans-serif;
  padding-top: 7px;
`

const NavLogoImage = Styled.img`
  width: 50px;
  height: 60px;
  margin-top: 4px;
`

const NavBarWrapper = ({ children }) => (
  <NavBarContainer>
    <div className='container'>
      <NavBarList>{children}</NavBarList>
    </div>
  </NavBarContainer>
)

export default (props) => (
  <NavBarWrapper>
    <Link to='/'>
      <NavLogo>
        <NavLogoImage src={logoNav} alt='' />
      </NavLogo>
    </Link>

    <NavMenu className='nav-menu'>
      {navItemList.map((nav, index) => {
        const navClass = (window.location.pathname === nav.path)? 'nav-text-active' : 'nav-text';

        return (
          <Link to={nav.path} key={index}>
            <NavItem>
              <p className={navClass}>{nav.name}</p>
            </NavItem>
          </Link>
        )
      })}
    </NavMenu>
  </NavBarWrapper>
)
