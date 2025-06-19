import React from 'react'
import ForeignTours from './ForeignTours/ForeignTours'
import LocalTours from './LocalTours/LocalTours'
import WorldTours from './WorldTours/WorldTours'

function Main() {
  return (
    <div>
      <ForeignTours />
      <LocalTours />
      <WorldTours />
    </div>
  )
}

export default Main