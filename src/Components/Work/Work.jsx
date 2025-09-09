import React, { useState } from 'react';
import './Work.css';
import WorkImg1  from '../../assets/work1.jpg';
import WorkImg2  from '../../assets/work2.jpg';
import WorkImg3  from '../../assets/work3.jpg';
import WorkImg4  from '../../assets/work4.jpg';
import WImg5  from '../../assets/img5.jpg';
import WImg6  from '../../assets/img6.jpg';
import { Link } from 'react-router-dom';

export default function Work() {

  const [showMore, setShowMore]= useState(false);
  const handleToggle =()=>{
    setShowMore(prev => !prev);
  }
  return (
    <>
    <div className='container-fluid work p-3 p-lg-5 bg-white' style={{minHeight:'100%'}}>
      <div class="section-box  mx-auto">
       <h6 className='section-subtitle'>my work</h6>
        <h2 className='section-title'>recent work</h2>

      


        <ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="graphicdesign-tab" data-bs-toggle="tab" data-bs-target="#graphic-design" type="button" role="tab" aria-controls="graphic-design" aria-selected="true">Graphic Design</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="apps-tab" data-bs-toggle="tab" data-bs-target="#apps" type="button" role="tab" aria-controls="apps" aria-selected="false">Apps</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link" id="software-tab" data-bs-toggle="tab" data-bs-target="#software" type="button" role="tab" aria-controls="software" aria-selected="false">Software</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="graphic-design" role="tabpanel" aria-labelledby="graphicdesign-tab">

  <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg1} className='img-fluid' alt="img1" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
                <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg2} className='img-fluid' alt="img2" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>

          <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg3} className='img-fluid' alt="img3" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg4} className='img-fluid' alt="img4" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>

          {showMore &&(

<div className='row'>
<div className='col-md-6 work-projects my-4'>
  <img src={WImg5} className='img-fluid' alt="img5" style={{minWidth:'100%',height:'400px'}}/>
  <div className='work-caption'>
    <h2 className='work-caption-heading'>
    <Link className='work-caption-link text-white' to='#'>work 02</Link>
    </h2>
    <h3 className='work-caption-subtitle'>animation</h3>
  </div>
</div>

<div className='col-md-6 work-projects my-4'>
  <img src={WImg6} className='img-fluid' alt="img6" style={{minWidth:'100%',height:'400px'}}/>
  <div className='work-caption'>
    <h2 className='work-caption-heading'>
    <Link className='work-caption-link text-white' href='#'>work 02</Link>
    </h2>
    <h3 className='work-caption-subtitle'>animation</h3>
  </div>
</div>

</div>

          )}
         


          <button className='btn btn-primary text-white text-capitalize' onClick={handleToggle}>
            {showMore ? 'Show Less': 'Show More'}
          </button>



  </div>
  <div class="tab-pane fade" id="apps" role="tabpanel" aria-labelledby="apps-tab">
  <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg3} className='img-fluid' alt="img3" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg4} className='img-fluid' alt="img4" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>

          {showMore &&(

<div className='row'>
<div className='col-md-6 work-projects my-4'>
  <img src={WImg5} className='img-fluid' alt="img5" style={{minWidth:'100%',height:'400px'}}/>
  <div className='work-caption'>
    <h2 className='work-caption-heading'>
    <Link className='work-caption-link text-white' to='#'>work 02</Link>
    </h2>
    <h3 className='work-caption-subtitle'>animation</h3>
  </div>
</div>

<div className='col-md-6 work-projects my-4'>
  <img src={WImg6} className='img-fluid' alt="img6" style={{minWidth:'100%',height:'400px'}}/>
  <div className='work-caption'>
    <h2 className='work-caption-heading'>
    <Link className='work-caption-link text-white' href='#'>work 02</Link>
    </h2>
    <h3 className='work-caption-subtitle'>animation</h3>
  </div>
</div>

</div>

          )}
         


          <button className='btn btn-primary text-white text-capitalize' onClick={handleToggle}>
            {showMore ? 'Show Less': 'Show More'}
          </button>


  </div>
  <div class="tab-pane fade" id="software" role="tabpanel" aria-labelledby="software-tab">
  <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg1} className='img-fluid' alt="img1" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
                <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg2} className='img-fluid' alt="img2" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>

          {showMore &&(

<div className='row'>
<div className='col-md-6 work-projects my-4'>
  <img src={WImg5} className='img-fluid' alt="img5" style={{minWidth:'100%',height:'400px'}}/>
  <div className='work-caption'>
    <h2 className='work-caption-heading'>
    <Link className='work-caption-link text-white' to='#'>work 02</Link>
    </h2>
    <h3 className='work-caption-subtitle'>animation</h3>
  </div>
</div>

<div className='col-md-6 work-projects my-4'>
  <img src={WImg6} className='img-fluid' alt="img6" style={{minWidth:'100%',height:'400px'}}/>
  <div className='work-caption'>
    <h2 className='work-caption-heading'>
    <Link className='work-caption-link text-white' href='#'>work 02</Link>
    </h2>
    <h3 className='work-caption-subtitle'>animation</h3>
  </div>
</div>

</div>

          )}
         


          <button className='btn btn-primary text-white text-capitalize' onClick={handleToggle}>
            {showMore ? 'Show Less': 'Show More'}
          </button>


          

  </div>
</div>















        {/* <ul className='list-unstyled'>
          <li className='active'>
            <Link to="#">graphic design</Link>
          </li>
          <li>
            <Link to="#">apps</Link>
          </li>
          <li>
            <Link to="#">software</Link>
          </li>
        </ul> */}


        {/* <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg1} className='img-fluid' alt="img1" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
                <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg2} className='img-fluid' alt="img2" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div>


         <div className='row'>
          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg3} className='img-fluid' alt="img3" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' to='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          <div className='col-md-6 work-projects my-4'>
            <img src={WorkImg4} className='img-fluid' alt="img4" style={{minWidth:'100%',height:'400px'}}/>
            <div className='work-caption'>
              <h2 className='work-caption-heading'>
              <Link className='work-caption-link text-white' href='#'>work 02</Link>
              </h2>
              <h3 className='work-caption-subtitle'>animation</h3>
            </div>
          </div>

          </div> */}

          

        
      </div>
    </div>
    </>
  )
}
