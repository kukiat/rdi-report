import React, { Fragment, useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import Styled from 'styled-components'
import Modal from 'react-modal'
import './index.css'

const TableStyled = Styled.div`
  display: flex;
  justify-content: center;
  transition: left 0.4s;
  animation: appear-left 1s ease;
  align-items: center;
  background-color: #fff;
`

const ListsStyled = Styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  font-size: 16px;
  list-style-type: none;
  /* border: 1px solid #e2e2e2; */
  /* border-radius: 10px; */
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.2); */
  margin-top: 20px;
  margin-bottom: 30px;
`

const ListItemStyled = Styled.div`
  padding: 15px 20px;
  color: #5e5e5e;
`

const PartnersTableItem = ({
  active,
  onFilterPartnerType,
  type,
  name,
}) => {
  return (
    <ListItemStyled
      className={classNames('list-item', { active })}
      onClick={() => onFilterPartnerType(type)}
    >
      <div className="list-content">{name}</div>
    </ListItemStyled>
  )
}

const PartnersTable = ({ onFilterSubType, partnersType, onFilterPartnerType, type, filterSubType }) => {
  const [isOpenDropdown, setDropdown] = useState([false, false, false, false])

  const getSubType = () => {
    return partnersType.find(partner => partner.type === type).subType
  }
  const getIndexType = (type) => {
    return {
      'all': 0,
      'MANUFACTURING': 1,
      'SERVICES': 2,
      'SALES': 3
    }[type]
  }

  const getNewSubType = (type) => {
    return isOpenDropdown.map((bool, i) => i === getIndexType(type) && !bool)
  }

  return (
    <TableStyled>
      <ListsStyled>
        {partnersType.map((partner, index) => (
          <div css={{ position: 'relative' }}>
            <PartnersTableItem
              key={index}
              active={type === partner.type}
              onFilterPartnerType={(type) => {
                onFilterPartnerType(type, () => setDropdown(getNewSubType(type)))
              }}
              {...partner}
            />
            {isOpenDropdown[index] && (
              <div className='dropdown-list'>
                {
                  getSubType().map((subType => (
                    <div className='dropdown-item' onClick={() => {
                      onFilterSubType(subType.type, () => setDropdown(getNewSubType(type)))
                    }}>
                      {subType.name}
                    </div>
                  )))
                }
              </div>
            )}
          </div>
        ))}
      </ListsStyled>
    </TableStyled>
  )
}

export default PartnersTable
