import React from 'react'
import './DashboardAdd.css'
import { cardsData } from '../../Cards/cardsData';
import Button from '@mui/material/Button';

function DashboardAdd() {

    const card1 = cardsData.find((card) => card.id === "32");
    const card2 = cardsData.find((card) => card.id === "28");
    const card3 = cardsData.find((card) => card.id === "19");

  return (
    <div className='dashboardAddContainer'>
        <div className='dashAddHeadingContainer'><h4 className='dashAddHeading'>Let's Enjoy Your Dream Vacation with us.</h4></div>
        <div className='dashAddButtonContainer'>
            <Button className='dashAddButton'
            sx={{
    bgcolor: "#0123FF",
    width: "46px",
    height: "46px",
    color: "#F8FCFF",
    textAlign: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    minWidth: "0",
    padding: "0",
    position: 'absolute',
    left: "8%",
    top: "36%",
    '&:hover': {
      bgcolor: "#577ee9",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    },
  }}
            ><svg xmlns="http://www.w3.org/2000/svg" width="19" height="16" viewBox="0 0 19 16" fill="none">
<path d="M17.4143 3.83953L14.7135 14.6179M17.4143 3.83953L6.63593 1.13875M17.4143 3.83953L1.68862 13.2633" stroke="#F8FCFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></Button>
        </div>
        <div className='firstCardContainer'><img className='firstCard' src={card1.img} alt={card1.title} /></div>
        <div className='secondCardContainer'><img className='secondCard' src={card2.img} alt={card2.title} /></div>
        <div className='thirdCardContainer'><img className='thirdCard' src={card3.img} alt={card3.title} /></div>
    </div>
  )
}

export default DashboardAdd