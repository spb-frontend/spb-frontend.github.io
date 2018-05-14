import React from 'react'

function positionToTime(position) {
  const time = position / 1000
  const hours = Math.floor(time / 60 / 60)
  const minutes = Math.floor((time - hours * 60 * 60) / 60)
  const seconds = Math.floor(time - hours * 60 * 60 - minutes * 60)

  const minutesString = `${minutes}`.length === 1 ? `0${minutes}` : `${minutes}`
  const secondsString = `${seconds}`.length === 1 ? `0${seconds}` : `${seconds}`

  return `${hours > 0 ? hours + ':' : ''}${minutesString}:${secondsString}`
}

export const Timer = ({position, toggleTimerType, className}) => {
  return (
    <button className={className} onClick={toggleTimerType}>
      {positionToTime(position)}
    </button>
  )
}
