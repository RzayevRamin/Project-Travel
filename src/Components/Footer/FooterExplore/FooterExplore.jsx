import React from 'react'
import './FooterExplore.css'

function FooterExplore() {
  return (
    <div className='footerExploreContainer'>
        <div className="footerExploreHeading"><h2>Explore</h2></div>
        <div className="footerExploreList">
            <ul className='footerExploreListItems'>
                <li><a href="" id='exploreHome'>Home</a></li>
                <li><a href="" id='exploreTours'>Tours</a></li>
                <li><a href="" id='exloreHotels'>Hotels</a></li>
                <li><a href="" id='exploreTransports'>Transports</a></li>
                <li><a href="" id='exploreMedia'>Media</a></li>
                <li><a href="" id='exploreForum'>Forum</a></li>
                <li id='exploreContactListItem'><a href="" id='exploreContact'>Contact</a></li>
                <li><a href="" id='exploreAbout'>About us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FooterExplore