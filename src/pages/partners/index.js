import React, { useState, useMemo, Fragment } from "react"
import { graphql } from "gatsby"
import { LayoutWrapper, PartnersTable, PartnersList } from "../../components"
import { getPartnersList, getPartnersType } from "../../utils/selector/partners"
import "./index.css"

export const query = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "company" } }) {
      edges {
        node {
          name
          childImageSharp {
            fixed {
              src
            }
          }
        }
      }
    }
    allPartnersTypeJson {
      edges {
        node {
          name
          type
        }
      }
    }
    allPartnersListJson {
      edges {
        node {
          id
          path
          type
          name
        }
      }
    }
  }
`

const partnerTypeMapper = (type) => {
  return {
    ['WHOLESALE/RETAIL']: "ภาคอุตสาหกรรมการผลิต",
    ['SERVICES']: "ภาคอุตสาหกรรมการบริการ",
    ['MANUFACTURING']: "ภาคอุตสาหกรรมการค้าส่ง/ปลีก",
  }[type]
}

const PartnerItem = ({ partner, index }) => (
  <Fragment>
    <div className="col-6" css={{ padding: "13px", backgroundColor: index % 2 && "#f8f8f8" }}>
      {partner.name}
    </div>
    <div className="col-6" css={{ padding: "13px", backgroundColor: index % 2 && "#f8f8f8" }}>
      {partnerTypeMapper(partner.type)}
    </div>
  </Fragment>
)

const Partners = (props) => {
  const [type, setType] = useState("all")

  const partnersType = useMemo(() => getPartnersType(props.data), [props.data])
  const partnersList = useMemo(() => getPartnersList(props.data), [props.data])

  const onFilterPartnerType = (_type) => {
    return type === _type || setType(_type)
  }

  const filterType = (type) => {
    return partnersList.filter((partner) => type === "all" || partner.type === type)
  }

  return (
    <LayoutWrapper>
      <div className="partners-page container">
        <div className="row">
          <div className="col-lg-10 offset-1">
            <div className="partners-header">
              <div className="partners-title">
                ทำเนียบบริษัทเอกชนในประเทศไทยที่มีกิจกรรมด้านการวิจัยและพัฒนา และกิจกรรมนวัตกรรมประจำปี 2561
              </div>
              <div className="partners-content">
                รายละเอียดข้อมูลเบื้องต้นเกี่ยวกับกิจการที่ดำเนินการลงทุนวิจัยและพัฒนาในอุตสาหกรรมต่างๆ ของประเทศไทย
                เพื่อเป็นฐานข้อมูลในการเผยแพร่สำหรับผู้ที่สนใจ
              </div>
            </div>
          </div>
        </div>
        <div className="partner-table-wrapper">
          <PartnersTable onFilterPartnerType={onFilterPartnerType} partnerlist={partnersType} type={type} />
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-10 offset-1 partner-table-row">
            {filterType(type).map((partner, index) => (
              <div className="row">
                <PartnerItem partner={partner} index={index} />
              </div>
            ))}
            {/* <PartnersList partners={filterType(type)} /> */}
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Partners
