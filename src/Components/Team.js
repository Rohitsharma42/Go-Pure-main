import React from 'react'
import Team1 from "../teams/atul.png"
import Team2 from "../teams/Bhasker.png"
import Team3 from "../teams/dinesh.png"
import Team4 from "../teams/manoj.png"
import Team5 from "../teams/sundar.png"
import Team6 from "../teams/Rohit.png"

const Team = () => {
  return (
    <div>
      <section className="inner-slider">
		<div className="slider-heading aos-init aos-animate" data-aos="fade-in">
            Our Team
        </div>
</section>

<section className="our-teams">
	<div className="container aos-init aos-animate" data-aos="fade-up">
     <div className="row g-4">
      <div className="col-sm-4">
        <div className="team-card">
            <div className="team-pic">
              <img src={Team2} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          <div className="teams-name">Bhasker Das</div>
          <div className="teams-designation">CEO and CTO</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="team-card">
            <div className="team-pic">
              <img src={Team3} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          <div className="teams-name">Dinesh Beniwal</div>
          <div className="teams-designation">CMO</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="team-card">
            <div className="team-pic">
              <img src={Team5} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          <div className="teams-name">Sundar Lal</div>
          <div className="teams-designation">COO and CFO</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="team-card">
            <div className="team-pic">
              <img src={Team1} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          <div className="teams-name">Atul Gupta</div>
          <div className="teams-designation">VP Marketing</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="team-card">
            <div className="team-pic">
              <img src={Team4} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          <div className="teams-name">Manoj Kumar</div>
          <div className="teams-designation">VP Operations</div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="team-card">
            <div className="team-pic">
              <img src={Team6} alt="" className="img-fluid mx-auto d-block"/>
            </div>
          <div className="teams-name">Rohit Sharma</div>
          <div className="teams-designation">Social Media Executive</div>
        </div>
      </div>


    </div>
	</div>
</section>
    </div>
  )
}

export default Team
