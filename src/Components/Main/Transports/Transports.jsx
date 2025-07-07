import React from 'react'
import "./Transports.css"
import Airlines from './Airlines/Airlines'
import Trains from './Trains/Trains'
import BusCompanies from './BusCompanies/BusCompanies'
import CarRenting from './CarRenting/CarRenting'

function Transports() {
  return (
    <div className='transportsContainer'>
      <Airlines />
      <Trains />
      <BusCompanies />
      <CarRenting />
    </div>
  )
}

export default Transports