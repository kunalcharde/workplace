import React from 'react'
// import user from '../../assets/user.png'
const FeedbackCard = () => {
  return (
    <div className="feedback-card-container">
      <div className="feedback-card">
        <div className='feeback-card-header'>
            
                <img src="user" alt= "" />
                <h3>Microsoft</h3>
                <p>freelancer</p>
              
        </div>
        <div className='feeback-card-desc-container'>
            <h2 className="feeback-card-position">Senior UI Designr</h2>
            <p className="feeback-card-role">Fulltime</p>
            <p className="feeback-card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat nunc ac a magna at elementum. Cras arcu varius in aliquam habitant fermentum. Mi sit lorem mollis vitae quis curabitur vestibulum.</p>
        </div>
        <div className='feeback-card-footer'>
            <div>$2500/month</div>
            <div><button>Apply Now</button></div>
        </div>
      </div>
    </div>
  )
}

export default FeedbackCard
