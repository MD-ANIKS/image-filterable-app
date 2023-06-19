import React, { useState } from 'react'
import Imgresult from './Imgresult';

export default function Search() {

  const [data , setData] = useState('');

  const inputEvent = (event) => {
    let text = event.target.value;
    setData(text)
  };


  return (
    <>
    <div className="search_area">
      <div className="container">
        <input type="text" placeholder='Search Anything !' name="search_input" id="search_input" value={data} onChange={inputEvent} />

        { data === '' ? null : <Imgresult name={data}/> }

      </div>
    </div>
    </>
  )
}
