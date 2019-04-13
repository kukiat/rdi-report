import React, { useState, useMemo } from "react"
import { graphql } from "gatsby"
import { LayoutWrapper, PartnersTable, PartnersList } from "../../components"
import { getPartnersList, getPartnersType } from "../../utils/selector/partners"
import "./index.css"

export const query = graphql`
  {
    allPartnersTypeJson {
      edges {
        node {
          name
          type
          subType {
            type
            name
          }
        }
      }
    }
    allPartnersListJson {
      edges {
        node {
          id
          partnerId
          subType
          type
          name
        }
      }
    }
  }
`

const Partners = (props) => {
  const [type, setType] = useState('all')
  const [subType, setSubType] = useState('all')

  const partnersType = useMemo(() => getPartnersType(props.data), [props.data])
  const partnersList = useMemo(() => getPartnersList(props.data), [props.data])

  const onFilterPartnerType = (_type, setDropdown) => {
    if (_type === 'all') {
      setSubType(_type)
    }
    setType(_type)
    setDropdown()
  }

  // const filterType = (type) => {
  //   return partnersList.filter((partner) => type === 'all' || partner.type === type)
  // }

  const onFilterSubType = (_type, setDropdown) => {
    setSubType(_type)
    setDropdown()
  }

  const filterSubType = (_type) => {
    return partnersList.filter((partner) => _type === 'all' || partner.subType === _type)
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
          <PartnersTable
            filterSubType={filterSubType}
            onFilterPartnerType={onFilterPartnerType}
            onFilterSubType={onFilterSubType}
            partnersType={partnersType}
            type={type}
          />
        </div>
        <div className="row" style={{ width: "100%" }}>
          <div className="col-lg-10 offset-1 partner-table-row">
            <PartnersList partners={useMemo(() => filterSubType(subType), [subType])} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Partners
