import React from 'react'

export default function Imgresult(props) {

  const img = `https://source.unsplash.com/1024x720?${props.name}`


  return (
    <div className='img_area'>
      <img src={img} alt=""  />
    </div>
  )
}
