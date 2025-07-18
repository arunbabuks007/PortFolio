import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/stripe.png'
import Services_Data from '../../assets/Services_Data'
const Services = () => {
  return (
    <div className='services' id='services'>
        <div class="services-title m-5">
            <h1>My Services</h1>
            {/* <img src={theme_pattern} alt="" height={40}/> */}
        </div>
        <div class="services-container">
            {Services_Data.map((service,index)=>{
                return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            {/* <div className='servies-readmore'>
                <p>Read More</p>
                <img src={theme_pattern} alt="" height={40}/>
            </div> */}
            </div>
            })}
        </div>
    </div>
  )
}
export default Services