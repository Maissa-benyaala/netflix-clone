import React from 'react'

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landed-movie-description">
      <h2 className="name">
        Finding Nemo
      </h2>
      <p className="description">
        After his son gets abducted from the Great Barrier Reef and is dispatched to Sydney, Marlin, a meek clownfish, enlists the help of a forgetful fish and embarks on a journey to bring him home.
      </p>
      </div>
      <div className="buttons">
        <button className="play-info">
        <i class="fa-solid fa-play"></i> 
        Play
        </button>
        <button className="play-info info">
        <i class="fa-solid fa-circle-info"></i> 
        More info
        </button>
        </div>
    </div>
  )
}

export default LandingPage