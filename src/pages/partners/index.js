import React, { useState, useMemo } from "react"
import { graphql, Link } from "gatsby"
import { LayoutWrapper, PartnersTable } from "../../components"
import { getPartnersList, getPartnersType } from "../../utils/selector/partners"
import uuid from 'uuid/v1'
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
const text = {
  a: 'อุตสาหกรรมการผลิตเกษตรกรรม',
  b: 'อุตสาหกรรมการผลิตเคมีภัณฑ์และผลิตภัณฑ์เคมี',
  c: 'อุตสาหกรรมการผลิตเครื่องเรือน',
  d: 'อุตสาหกรรมการผลิตเครื่องจักร',
  e: 'อุตสาหกรรมการผลิตเครื่องจักรสำนักงาน',
  f: 'อุตสาหกรรมการผลิตเครื่องนุ่งห่ม',
  g: 'อุตสาหกรรมการผลิตเครื่องมือที่ใช้ทางการแพทย์',
  h: 'อุตสาหกรรมการผลิตเหมืองแร่และหิน',
  k: 'อุตสาหกรรมการผลิตโลหะขั้นมูลฐาน',
  l: 'อุตสาหกรรมการผลิตกระดาษและผลิตภัณฑ์จากกระดาษ ',
  m: 'อุตสาหกรรมการผลิตปิโตรเลียม',
  n: 'อุตสาหกรรมการผลิตผลิตภัณฑ์จากแร่อโลหะ แก้ว',
  o: 'อุตสาหกรรมการผลิตผลิตภัณฑ์ที่ทำจากโลหะประดิษฐ์',
  p: 'อุตสาหกรรมการผลิตผลิตภัณฑ์ยางและผลิตภัณฑ์พลาสติก',
  q: 'อุตสาหกรรมการผลิตผลิตภัณฑ์อาหารและเครื่องดื่ม',
  r: 'อุตสาหกรรมการผลิตยานยนต์ รถพ่วงและรถกึ่งรถพ่วง',
  s: 'อุตสาหกรรมการผลิตสิ่งทอสิ่งถัก',
  t: 'อุตสาหกรรมการผลิตอุปกรณ์และเครื่องมือทางวิทยุ โทรทัศน์และการสื่อสาร',
  u: 'อุตสาหกรรมการผลิตอุปกรณ์ไฟฟ้า',
  v: 'อุตสาหกรรมการฟอกย้อม',
  w: 'อุตสาหกรรมการรีไซเคิล & ไฟฟ้า แก๊ส ไอน้ำ และอากาศ'
}

const partnerSubTypeMapper = (subType) => {
  return {
    ['WHOLESALE/RETAIL']: "ภาคอุตสาหกรรมการค้าส่ง/ปลีก",
    ['SERVICES']: "ภาคอุตสาหกรรมการบริการ",
    ['MANUFACTURING']: "ภาคอุตสาหกรรมการผลิต",
  }[type]
}

const partnerTypeMapper = (type) => {
  return {
    ['WHOLESALE/RETAIL']: "ภาคอุตสาหกรรมการค้าส่ง/ปลีก",
    ['SERVICES']: "ภาคอุตสาหกรรมการบริการ",
    ['MANUFACTURING']: "ภาคอุตสาหกรรมการผลิต",
  }[type]
}

const PartnerList = ({ partners }) => {
  return (
    partners.map((partner, index) => (
      <Link className="row aabbaa" key={uuid()} to={`/partners/${partner.path}`}>
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

const Partners = (props) => {
  const [type, setType] = useState('all')

  const partnersType = useMemo(() => getPartnersType(props.data), [props.data])
  const partnersList = useMemo(() => getPartnersList(props.data), [props.data])

  const onFilterPartnerType = (_type) => {
    return type === _type || setType(_type)
  }

  const filterType = (type) => {
    return partnersList.filter((partner) => type === 'all' || partner.type === type)
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
            <PartnerList partners={filterType(type)} />
          </div>
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default Partners
