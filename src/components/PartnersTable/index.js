import React, { Fragment, useRef, useState, useEffect } from 'react'
import classNames from 'classnames'
import Styled from 'styled-components'
import OutsideClickHandler from 'react-outside-click-handler';
import './index.css'

const TableStyled = Styled.div`
  display: flex;
  justify-content: center;
  transition: left 0.4s;
  animation: appear-left 1s ease;
  align-items: center;
  background-color: #fff;
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
  const dropdownRef = useRef()

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

  const setNewDropDown = (_type) => {
    setDropdown(isOpenDropdown.map((bool, i) => i === getIndexType(_type) && !bool))
  }

  return (
    <TableStyled>
      <OutsideClickHandler onOutsideClick={() => setDropdown([false, false, false, false])}>
        <div className='partner-table-list' ref={dropdownRef}>
          {partnersType.map((partner, index) => (
            <div css={{ position: 'relative' }}>
              <PartnersTableItem
                key={index}
                active={type === partner.type}
                onFilterPartnerType={(type) => {
                  onFilterPartnerType(type, () => setNewDropDown(type))
                }}
                {...partner}
              />
              {isOpenDropdown[index] && (
                <div className='dropdown-list'>
                  {
                    getSubType().map((subType => (
                      <div className='dropdown-item' onClick={() => {
                        onFilterSubType(subType.type, () => setNewDropDown(type))
                      }}>
                        {subType.name}
                      </div>
                    )))
                  }
                </div>
              )}
            </div>
          ))}
        </div>
      </OutsideClickHandler>
    </TableStyled>
  )
}

export default PartnersTable
