import React from 'react'
import { Link } from 'gatsby'
import uuid from 'uuid/v1'
import './index.css'

const partnerTypeMapper = (type) => {
  return {
    'WHOLESALE/RETAIL': "ภาคอุตสาหกรรมการค้าส่ง/ปลีก",
    'SERVICES': "ภาคอุตสาหกรรมการบริการ",
    'MANUFACTURING': "ภาคอุตสาหกรรมการผลิต",
  }[type]
}

const PartnersList = ({ partners }) => {
  return (
    partners.map((partner, index) => (
      <Link className="row aabbaa" key={uuid()} to={`/partners/${partner.partnerId}`}>
        <div className="col-6 animated-fade" css={{ padding: "13px", backgroundColor: index % 2 && "#f8f8f8" }}>
          {partner.name}
        </div>
        <div className="col-6 animated-fade" css={{ padding: "13px", backgroundColor: index % 2 && "#f8f8f8" }}>
          {partnerTypeMapper(partner.type)}
        </div>
      </Link>
    ))
  )
}

export default PartnersList
