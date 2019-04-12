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

const customStyles = {
  overlay: {
    backgroundColor: 'transparent',
    position: 'fixed',
    zIndex: 1024,
  },
  content: {
    width: '500px',
    height: '300px',
    padding: '-20px',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%)'
  }
}

const ModalPartnerList = (props) => {
  return (
    <div>
      <Modal
        style={customStyles}
        isOpen={props.isOpen}
        onAfterOpen={() => document.body.style.overflow = 'hidden'}
        onRequestClose={() => {
          document.body.style.overflow = 'auto'
          props.setModal(false)
        }}
      >

        <div className=''>
          {props.subType.map((sub, index) => (
            <div className='dropdown-item' key={index}>{sub.name}</div>
          ))}
        </div>
      </Modal>
    </div>
  )
}
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

const PartnersTable = ({ partnersType, onFilterPartnerType, type }) => {
  const [isOpenModal, setModal] = useState(false)
  const getSubType = () => {
    return partnersType.find(partner => partner.type === type).subType
  }

  useEffect(() => {
    if (type === 'all') {

    }
  }, [type])

  return (
    <TableStyled>
      <ListsStyled>
        {partnersType.map((partner, index) => (
          <PartnersTableItem
            key={index}
            active={type === partner.type}
            onFilterPartnerType={(type) => {
              onFilterPartnerType(type, () => {
                setModal(true)
              })
            }}
            {...partner}
          />
        ))}
        <ModalPartnerList
          isOpen={isOpenModal}
          setModal={setModal}
          subType={getSubType()}
        />
      </ListsStyled>
    </TableStyled>
  )
}

export default PartnersTable
