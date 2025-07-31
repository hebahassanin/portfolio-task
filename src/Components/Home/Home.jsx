import React from 'react'
import imgBackGround from '../../assets/img-bg1.jpg';
import imgBackgroundt from '../../assets/img-bg2.jpg';

export default function Home() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
       <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imgBackGround} className="d-block w-100" style={{ height: '100vh', objectFit: 'cover' }} alt="..."/>
          <div className="custom-caption d-md-block">
            <h2>Hi! <br/>Im Jackson</h2>
            <p>100% html5 bootstrap templates Made <br/> By 
              <a href='https://colorlib.com/'> Colorlib.com</a>
            </p>
            <button className='btn btn-transparent btn-caption'>download cv</button>
          </div>
        </div>

        <div className="carousel-item">
        <img src={imgBackgroundt} className="d-block w-100" style={{height: '100vh', objectFit: 'cover' }} alt="..."/>
        <div className="custom-caption d-md-block">
          <h2>I am <br/>a Designer</h2>
            <p>100% html5 bootstrap templates Made <br/> By 
              <a href='https://colorlib.com/'> Colorlib.com</a>
            </p>
            <button className='btn btn-transparent btn-caption'>view portfolio</button>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}
