import TeamSlider from './TeamSlider'

export default function Team() {
  return (
    <div className="team">
    <div className="team-border"></div>
    <div className="team-title">
      <h2 className='fw-bold' data-aos="fade-up" data-aos-delay="" data-aos-offset="">$AUVA TEAM</h2>
    </div>
    <div className="team-slider">
      <TeamSlider />
    </div>
  </div>
  )
}
