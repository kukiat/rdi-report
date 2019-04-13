export const convertMoney = (label = '') => normalizeLabel(label) && `${label} บาท`
export const convertPeople = (label = '') => normalizeLabel(label) && `${label} คน`
export const convertYear = (label = '') => normalizeLabel(label) && `พ.ศ. ${label}`

export const normalizeLabel = (label) => label.replace(/ไม่ระบุ/g, '')
