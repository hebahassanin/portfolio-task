import React from 'react'
import './Skills.css';

export default function Skills() {
  return (
    <>
    <div className='container-fluid p-5 bg-white' style={{height:'auto'}}>
      <div className='section-box mx-auto'>
      <h6 className='section-subtitle'>MY SPECIALTY</h6>
      <h2 className='section-title'>MY SKILLS</h2>
      <p className='skills-text'>The Big Oxmox advised her not to do so,
       because there were thousands of bad Commas, wild Question Marks and
       devious Semikoli, but the Little Blind Text didn’t listen. She packed 
       her seven versalia, put her initial into the belt and made herself on the way.  
      </p>

      <div className='row'>
        <div className='col-md-6 my-3'>
          <h3 className="progress-title">photoshop</h3>
          <div className="progress">
             <div className="progress-bar" role="progressbar" style={{width:' 75%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
         
        </div>

        <div className='col-md-6 my-3'>
          <h3 className="progress-title">j query</h3>
          <div className="progress">
             <div className="progress-bar bg-danger" role="progressbar" style={{width:'60%'}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
          </div>
          
        </div>

        <div className='col-md-6 my-3'>
          <h3 className="progress-title">html5</h3>
          <div className="progress">
             <div className="progress-bar bg-warning" role="progressbar" style={{width:'85%'}} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          
        </div>

        <div className='col-md-6 my-3'>
          <h3 className="progress-title">Css3</h3>
          <div className="progress">
             <div className="progress-bar" role="progressbar" style={{width:'90%',backgroundColor:"#a84cb8"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
        </div>

        <div className='col-md-6 my-3'>
          <h3 className="progress-title">WordPress</h3>
          <div className="progress">
             <div className="progress-bar bg-success" role="progressbar" style={{width:'70%'}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">70%</div>
          </div>
        </div>

        <div className='col-md-6 my-3'>
          <h3 className="progress-title">SEO</h3>
          <div className="progress">
             <div className="progress-bar" role="progressbar" style={{width:'80%',backgroundColor:"#4054b2"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
        </div>


      </div>

      </div>

    </div>
      
    </>
  )
}
