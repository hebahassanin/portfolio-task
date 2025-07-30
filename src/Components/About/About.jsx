import React from 'react'
import './About.css'

export default function About() {
  return (
    <>
    <div className='container p-5 bg-white' style={{height:'auto'}}>
      <div className='section-box mx-auto'>
      <h6 className='section-subtitle'>about us</h6>
      <h2 className='section-title'>who am i</h2>
      <p className='about-text'><strong>Hi Im Jackson Ford</strong> On her way she met a copy.
       The copy warned the Little Blind Text, that where it came from it would
       have been rewritten a thousand times and everything that was left from its
       origin would be the word (and) and the Little Blind Text should turn around
       and return to its own, safe country.      
      </p>

      <p className='about-text'>Even the all-powerful Pointing has no control about
       the blind texts it is an almost unorthographic life One day however a small
       line of blind text by the name of Lorem Ipsum decided to leave for the far
       World of Grammar.
      </p>

      <div className='row'>
        <div className='col-md-3'>
          <div className='services color-1'>
            <i className="fa-regular fa-lightbulb icon1"></i>
            <h3>Graphic Design</h3>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='services color-2'>
            <i className="fa-solid fa-earth-africa icon2"></i>
            <h3>Web Design</h3>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='services color-3'>
            <i className="fa-solid fa-database icon3"></i>
            <h3>Software</h3>
          </div>
        </div>
        <div className='col-md-3'>
          <div className='services color-4'>
            <i className="fa-solid fa-mobile-screen-button icon4"></i>
            <h3>Application</h3>
          </div>
        </div>
      </div>

      </div>
    </div>
      
    </>
  )
}
