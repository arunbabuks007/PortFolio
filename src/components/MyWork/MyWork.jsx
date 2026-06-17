import React from 'react'
import './MyWork.css'
import mywork_data from '../../assets/mywork'

const MyWork = () => {
  return (
    <div className='mywork' id='projects'>
      <div className='mywork-title m-5'>
        <h1>Featured Projects</h1>
      </div>

      <div className='mywork-container'>
  {mywork_data.map((work) => (
    <a
      key={work.w_no}
      href={work.w_link}
      target="_blank"
      rel="noopener noreferrer"
      className="mywork-card"
    >
      <img src={work.w_img} alt={work.w_name} />
      <div className="mywork-overlay">
        <span>{work.w_name}</span>
      </div>
    </a>
  ))}
</div>

    </div>
  )
}

export default MyWork
