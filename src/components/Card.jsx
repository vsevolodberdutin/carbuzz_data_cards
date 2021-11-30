import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'


const Card = ({data}) => {

if (!data?.featuredImages[0].url){
    return null
}

  return (
    <div className="card" style={{"width": "300px", margin: 30}}>
      <img src={data?.featuredImages[0].url} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title"><strong>{data?.title}</strong></h5>
        <h6 className="card-title">{data?.carName }</h6>
        <p className="card-text">
           {data?.previewText } 
        </p>
      </div>
    </div>
  )
}

export default Card
