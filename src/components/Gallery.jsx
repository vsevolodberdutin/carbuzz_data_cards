import React from 'react'
import Card from './Card'

const Gallery = ({data}) => {
  return (
    <div className="wrapper">
      {data.map( el => 
        <Card  data={el.item} />
      )
      }
    </div>
  )
}

export default Gallery
