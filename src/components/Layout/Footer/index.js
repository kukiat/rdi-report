import React from 'react'
import { Link } from "gatsby"
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

export default () => (
  <Footer className='footer'>
    <FooterTop className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="row">
              <div className="footer-participator col-sm-9">
                <h6>PARTICIPATOR</h6>
                <div className="footer-participator-item">
                  <div>
                    สำนักงานคณะกรรมการนโยบายวิทยาศาสตร์ เทคโนโลยีและนวัตกรรมแห่งชาติ (สวทน.)
                </div>
                  <div>
                    กระทรวงวิทยาศาสตร์และเทคโนโลยี
                </div>
                  <div style={{ marginTop: 5 }} >
                    <a className="footer-link footer-underline" target="_blank" href="http://www.sti.or.th">http://www.sti.or.th</a>
                  </div>
                </div>
                <div className="footer-participator-item">
                  <div>
                    IRIS Consulting Company Limited
                </div>
                  <div style={{ marginTop: 5 }} >
                    <a className="footer-link footer-underline" target="_blank" href="https://www.irisconsulting.co.th">https://www.irisconsulting.co.th</a>
                  </div>
                </div>
              </div>
              <div className="footer-resources col-sm-3">
                <div>
                  <h6>RESOURCES</h6>
                  <div className="footer-resources-list">
                    <div className="footer-resources-list-item">
                      <Link className="footer-link footer-underline" to="/">Home</Link>
                    </div>
                    <div className="footer-resources-list-item">
                      <Link className="footer-link footer-underline" to="/partners">R&D Company</Link>
                    </div>
                    <div className="footer-resources-list-item">
                      <Link className="footer-link footer-underline" to="/reports">Download</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FooterTop>
    <FooterBottom className="footer-bottom">
      <div className="container">
        <div>
          <a className="footer-link" target="_blank" href="http://www.sti.or.th">National Science Technology and Innovation Policy Office</a>
          {' | '}
          <a className="footer-link" target="_blank" href="https://www.irisconsulting.co.th">IRIS Consulting Company Limited</a>
        </div>
      </div>
    </FooterBottom>
  </Footer>
)
