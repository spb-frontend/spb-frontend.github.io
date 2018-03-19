import React from 'react'

export default ({
  node: {
    name,
    lastname,
    position,
    vk,
    telegram,
    twitter,
    slack,
    company,
    podcasts,
    photo,
  },
}) => {
  return (
    <div>
      <div>
        {name} {lastname}
      </div>
      <div>{company}</div>
      <div>
        {vk}
        {telegram}
        {twitter}
        {slack}
      </div>
      <div>{photo ? <img src={`https:${photo.file.url}?w=200`} /> : null}</div>
      {podcasts.map(({title, number}, index) => {
        return (
          <div key={index}>
            <a
              target='_blank'
              href={`/podcast/${number}`}>
              {title}
            </a>
          </div>
        )
      })}
      <hr />
    </div>
  )
}
