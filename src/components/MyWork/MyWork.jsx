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
          <div key={work.w_no} className="mywork-card">
            <div className="mywork-thumb">
              {work.w_img ? (
                <img src={work.w_img} alt={work.w_name} />
              ) : (
                <span className="mywork-initial">{work.w_name.charAt(0)}</span>
              )}
              <span className={`mywork-status mywork-status-${work.w_status}`}>
                {work.w_status_label}
              </span>
            </div>

            <div className="mywork-body">
              <h3>{work.w_name}</h3>
              <p className="mywork-tagline">{work.w_tagline}</p>
              <p className="mywork-desc">{work.w_desc}</p>

              <div className="mywork-tech">
                {work.w_tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {(work.w_link || work.w_link2) && (
                <div className="mywork-links">
                  {work.w_link && (
                    <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                      {work.w_link_label || 'Open'} →
                    </a>
                  )}
                  {work.w_link2 && (
                    <a href={work.w_link2} target="_blank" rel="noopener noreferrer">
                      {work.w_link2_label || 'Open'} →
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyWork
