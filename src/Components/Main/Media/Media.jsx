import React from 'react'
import "./Media.css"
import InternalToursMedia from './InternalToursMedia/InternalToursMedia'
import ForeignToursMedia from './ForeignToursMedia/ForeignToursMedia'

function Media() {
  return (
    <div className='mediaContainer'>
        <InternalToursMedia />
        <ForeignToursMedia />
    </div>
  )
}

export default Media