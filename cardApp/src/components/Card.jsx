import React from 'react'
import Unclicked from './Attribute'
import Attribute from './Attribute'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='top'>
            <img className='comlogo'>{}</img>
            <button className = "savebtn">Save</button>
        </div>
    
    <hr className="divider" />
      
      <div className='mid'>
            <div className = "cinfo">
            <span className='cname'>{props.name}</span>
            <span className = "day">Posted {props.day} days ago</span>
            </div>
            <span className = "role">{props.role}</span>
            {/* <button className='atrbtn'>{props.att}</button> */}
            <div className = "attributes">
            <Attribute caption = "Remote"/>
            <Attribute caption = "Full time"/>
            </div>
            
      </div>
      
    <hr className="divider" />

      <div className='bottom'>
            <div className = "foot">
                <span className='sal'>{props.salary}/hr</span>
                <span className='loc'>{props.loc}</span>
            </div>
            <button className = "aplbtn">Apply Now</button>
      </div>

    </div>
  )
}

export default Card
