import React from 'react'
import './Experience.css';

export default function Experience() {
  return (
    <>
    <div className='container-fluid p-0 pt-3 p-lg-5 bg-white' style={{minHeight:"100vh"}}>
      <div className='section-box mx-auto'>
        <h6 className='section-subtitle'>experience</h6>
        <h2 className='section-title'>WORK EXPERIENCE</h2>

        <div className='d-none d-sm-block line'>
          <div className='vertical-line'></div>
        </div>

        <div className='icon-container'>
          <i className="d-none d-sm-block fa-solid fa-pencil icon-left bg-primary"></i>
          <div className='experience-text'>
            <h2>
              <a href='#'>full stack developer</a>
              <span>2017-2018</span>
              </h2>
            <p>Tolerably earnestly middleton extremely distrusts she boy now not.
              Add and offered prepare how cordial two promise. Greatly who affixed
              suppose but enquire compact prepare all put. Added forth chief trees
              but rooms think may.
            </p>
          </div>
         
        </div>

        
        <div className='icon-container'>
          <i className="d-none d-sm-block fa-solid fa-pencil icon-left bg-danger"></i>
          <div className='experience-text'>
            <h2>
              <a href='#'>Front End Developer at Google Company</a>
              <span>2017-2018</span>
            </h2>
            <p>Even the all-powerful Pointing has no control about the blind texts
              it is an almost unorthographic life One day however a small line of
                blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>
        </div>

        <div className='icon-container'>
          <i class="d-none d-sm-block fa-solid fa-pencil icon-left bg-warning"></i>
          <div className='experience-text'>
            <h2>
              <a href='#'>System Analyst</a>
              <span>2017-2018</span>
              </h2>
            <p>Even the all-powerful Pointing has no control about the blind texts
              it is an almost unorthographic life One day however a small line of
                blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
          </div>
        </div>




      </div>

    </div>
      
    </>
  )
}
