import React from 'react'
import st from './style.module.css'

const getStrokeDasharray = (total, loaded) => {
  if (!total) {
    return '0,100'
  }
  const part = loaded / total * 100
  const width = 12 * Math.PI
  const result = width / 100 * part
  return `${result},${width}`
}

export default ({total, loaded, className}) => {
  const strokeDasharray = getStrokeDasharray(total, loaded)

  return (
    <svg
      className={className}
      width='24px'
      height='24px'
      viewBox='0 0 24 24'
      preserveAspectRatio='xMidYMid meet'>
      <circle
        className={st.sector}
        r='6'
        cx='12'
        cy='12'
        strokeDasharray={strokeDasharray} />
    </svg>
  )
}
