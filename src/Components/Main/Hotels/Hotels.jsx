import React from 'react'
import './Hotels.css'
import TopRatedPlaces from './TopRatedPlaces/TopRatedPlaces'
import MostPopularHotels from './MostPopularHotels/MostPopularHotels'
import HotelSearchByType from './HotelSearchByType/HotelSearchByType'

function Hotels() {
  return (
    <div className='hotelsContainer'>
      <TopRatedPlaces />
      <MostPopularHotels />
      <HotelSearchByType />
    </div>
  )
}

export default Hotels