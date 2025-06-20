import React from 'react'
import Lottie from "lottie-react";
import MainLoadAnimation from "../../../assets/Loading/loading.json"

function MainLoading() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "white"
    }}>
      <Lottie
        animationData={MainLoadAnimation}
        loop={true}
        autoplay={true}
        style={{ width: 400, height: 400 }}
      />
    </div>
  )
}

export default MainLoading