import React from 'react';
import './work.css';
import WorkImg1  from '../../assets/work1.jpg';
import WorkImg2  from '../../assets/work2.jpg';
import WorkImg3  from '../../assets/work3.jpg';
import WorkImg4  from '../../assets/work4.jpg';
import { Link } from 'react-router-dom';

export default function Work() {
  return (
    <>
    <div className='container work p-5 bg-white' style={{height:' auto'}}>
      <div class="section-box mx-auto">
       <h6 className='section-subtitle'>my work</h6>
        <h2 className='section-title'>recent work</h2>

        <ul className='list-unstyled'>
          <li className='active'>
            <a href="#">graphic design</a>
          </li>
          <li>
            <a href="#">apps</a>
          </li>
          <li>
            <a href="#">software</a>
          </li>
        </ul>


        <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg1} className='img-fluid' alt="img1" style={{maxWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
                <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg2} className='img-fluid' alt="img2" style={{maxWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>


         <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg3} className='img-fluid' alt="img3" style={{maxWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg4} className='img-fluid' alt="img4" style={{maxWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>

          <button className='btn btn-primary text-white text-capitalize'>show more</button>


        
      </div>
    </div>
    </>
  )
}
