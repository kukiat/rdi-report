import numeral from 'numeral'

export const convertMoney = (label = '') => normalizeLabel(label) && `${numeral(label).format('0,0[.]00')} บาท`
export const convertPeople = (label = '') => normalizeLabel(label) && `${(Number(label)).toLocaleString()}  คน`
export const convertYear = (label = '') => normalizeLabel(label) && `${label}`

export const normalizeLabel = (label) => label.replace(/ไม่ระบุ/g, '')

export const parseLocaleString = (value) => numeral(value).format('0,0')