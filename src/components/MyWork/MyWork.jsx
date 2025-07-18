import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/stripe.png'
import mywork_data from '../../assets/mywork'
import arrow_icon from '../../assets/stripe.png'


const MyWork = () => {
  return (
    <div className='mywork' id='portfolio'>
        <div className='mywork-title m-5'> 
            <h1>My latest Work</h1>
            {/* <img src={theme_pattern} alt="" height={40}/> */}
        </div>
        <div className='mywork-container'>
          {mywork_data.map((work, index) => (
  <a key={index} href={work.w_link}>
    <img src={work.w_img} alt="" height={400} />
  </a>
))}

        </div>
        {/* <div className='mywork-showmore'>
            <p>Show More</p>
            <img src={arrow_icon} alt="" height={40}/>
        </div> */}
    </div>
  )
}

export default MyWork