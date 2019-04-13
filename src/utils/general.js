export const convertMoney = (label = '') => normalizeLabel(label) && `${(Number(label)).toLocaleString()} บาท`
export const convertPeople = (label = '') => normalizeLabel(label) && `${(Number(label)).toLocaleString()}  คน`
export const convertYear = (label = '') => normalizeLabel(label) && `${label}`

export const normalizeLabel = (label) => label.replace(/ไม่ระบุ/g, '')
