import React from 'react'
import Styled from 'styled-components'
import './index.css'

const Footer = Styled.div`
  font-size: 14px;
  position: relative;
  bottom: 0;
  width: 100%;
  height: 60px;
  background: #6cf;
`;

const FooterTop = Styled.div`
  color: #fff;
  background-color: #755682;
  padding: 30px 0;
  text-align: left;
`;

const FooterBottom = Styled.div`
  color: #fff !important;
  background-color: #5B316C;
  padding: 10px 0;
  text-align: center;
  font-size: 13px;
`;

const Link = Styled.a`
  color: #fff !important;
`;

export default () => (
  <Footer className='footer'>
    <FooterTop className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-5">
            <h6>ABOUT IRIS</h6>
            <div style={{ marginTop: '25px' }}>Contrary to popular belief, Lorem Ipsum is not.</div>
            <div style={{ marginTop: '5px' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Contrary to popular belief, Lorem Ipsum is not a random text.</div>
          </div>
          <div className="col-1"></div>
          <div className="col-2">
            <div>
              <h6>SOLUTIONS</h6>
              <div style={{ marginTop: '25px' }}>
                <div style={{ paddingLeft: '10px' }}>Contact & Temp</div>
                <div style={{ paddingLeft: '10px', marginTop: 13 }}>Perm</div>
                <div style={{ paddingLeft: '10px', marginTop: 13 }}>Exec Search</div>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div>
              <h6>RESOURCES</h6>
              <div style={{ marginTop: '25px' }}>
                <div style={{ paddingLeft: '10px' }}>About</div>
                <div style={{ paddingLeft: '10px', marginTop: 13 }}>Careers</div>
                <div style={{ paddingLeft: '10px', marginTop: 13 }}>Webinars</div>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </FooterTop>
    <FooterBottom className="footer-bottom">
      <div className="container">
        <div>
          <Link href="#"> Terms of Service </Link>
          &nbsp; | &nbsp;
          <Link href="#">Privacy Policy</Link>
          &nbsp; | &nbsp;
          <Link href="#">Act on Specified Commercial Transactions</Link>
        </div>
        <div>
          <span>
            <Link href="#">Data&nbsp; </Link>
            <Link href="#">Processing&nbsp; </Link>
            <Link href="#">Agreement</Link>
            &nbsp; | &nbsp;
            <Link href="#">Status</Link>
          </span>
        </div>
      </div>
    </FooterBottom>
  </Footer>
)
