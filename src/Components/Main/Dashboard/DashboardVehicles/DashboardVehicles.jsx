import React from 'react'
import "./DashboardVehicles.css"
import Button from '@mui/material/Button'
import planeImg from "../../../../assets/Transport/plane.jpeg"
import trainImg from "../../../../assets/Transport/train.jpeg"
import shipImg from "../../../../assets/Transport/ship.jpg"
import autoImg from "../../../../assets/Transport/auto.jpg"

function DashboardVehicles() {
  return (
    <div className='dashVehiclesContainer'>
        <div className='dashVehiclesHeadingBox'>
            <h4 className='dashVehiclesHeading'>Vehicles</h4>
        </div>
        <div className='dashVehiclesBox'>
            <Button className='vehicles plane'><img className='vehicles plane' src={planeImg} alt="plane" /></Button>
            <Button className='vehicles train'><img className='vehicles train' src={trainImg} alt="train" /></Button>
            <Button className='vehicles ship'><img className='vehicles ship' src={shipImg} alt="ship" /></Button>
            <Button className='vehicles auto'><img className='vehicles auto' src={autoImg} alt="auto" /></Button>
        </div>
    </div>
  )
}

export default DashboardVehicles