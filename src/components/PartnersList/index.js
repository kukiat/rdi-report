import React from 'react'
import { Link } from 'gatsby'
import uuid from 'uuid/v1'
import './index.css'

class PartnersList extends React.PureComponent {
  calculateDuration = (index) => {
    if (index > 8) {
      return 1350
    }
    return Math.ceil((index + 1) / 4) * 450
  }

  render() {
    return (
      <div className="partners-list container">
        <div className="images-list row">
          {this.props.partners.map((partner, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration={this.calculateDuration(index)}
              className="partners-list-wrapper col-3"
              key={uuid()}
            >
              <Link style={{ width: '100%', cursor: 'pointer' }} to={`/partners/${partner.id}`}>
                <div className="partners-images">
                  <img
                    className="partners-main-images"
                    src={partner.src}
                    // height='60px'
                  />
                </div>
                <div className="partners-text font-th">{partner.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default PartnersList
