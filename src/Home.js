import React from 'react';


function Home() {
  return (
    <div>
<div className="preloader">
     <div className="spinner">
          <span className="sk-inner-circle"></span>
     </div>
</div>



<div className="navbar custom-navbar navbar-fixed-top" role="navigation">
     <div className="container">

          
          <div className="navbar-header">
               <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
                    <span className="icon icon-bar"></span>
               </button>
              
               <a href="index.html" className="navbar-brand">Scenic</a>
          </div>
          <div className="collapse navbar-collapse">
               <ul className="nav navbar-nav navbar-right">
                    <li><a href="#home" className="smoothScroll">Home</a></li>
                    <li><a href="#about" className="smoothScroll">Studio</a></li>
                    <li><a href="#team" className="smoothScroll">Our People</a></li>  
                    <li><a href="#contact" className="smoothScroll">Let's talk</a></li>
               </ul>
          </div>

     </div>
</div>


<section id="home" className="parallax-section">
     <div className="overlay"></div>
     <div className="container">
          <div className="row">

               <div className="col-md-8 col-sm-12">
                    <div className="home-text">
                         <h1>Your Website has a video background!</h1>
                         <p>Feel free to download and use HTML templates from Tooplate</p>
                         <ul className="section-btn">
                              <a href="#about" className="smoothScroll"><span data-hover="Discover More">Discover More</span></a>
                         </ul>
                    </div>
               </div>

          </div>
     </div>
     <video controls autoPlay loop muted>
  <source src="videos/video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
     
     
</section>



<section id="about" className="parallax-section">
     <div className="container">
          <div className="row">

               <div className="col-md-offset-1 col-md-10 col-sm-12">
                    <div className="about-info">
                         <h3>Introducing Scenic</h3>
                         <h1>This template is designed for you. Sed ornare, tortor nec placerat lacinia, leo quam rutrum leo, eget posuere ipsum sem eu justo. Integer nunc libero.</h1>
                    </div>
               </div>

          </div>
     </div>
</section>

<section id="project" className="parallax-section">
     <div className="container">
          <div className="row">

               <div className="col-md-6 col-sm-6">
                   
                    <div className="project-item">
                         <a href="/images/project-image1.jpg" className="image-popup">
                              <img src="/images/project-image1.jpg" className="img-responsive" alt=""/>
                         
                              <div className="project-overlay">
                                   <div className="project-info">
                                        <h1>Beautiful Women</h1>
                                        <h3>Click to pop up!</h3>
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>

               <div className="col-md-6 col-sm-6">
                    
                    <div className="project-item">
                         <a href="/images/project-image2.jpg" className="image-popup">
                              <img src="/images/project-image2.jpg" className="img-responsive" alt=""/>
                         
                              <div className="project-overlay">
                                   <div className="project-info">
                                        <h1>Nulla efficitur quam</h1>
                                        <h3>Sed ligula accumsan</h3>
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>

               <div className="col-md-6 col-sm-6">
                   
                    <div className="project-item">
                         <a href="/images/project-image3.jpg" className="image-popup">
                              <img src="/images/project-image3.jpg" className="img-responsive" alt=""/>
                         
                              <div className="project-overlay">
                                   <div className="project-info">
                                        <h1>Large Sea Wave</h1>
                                        <h3>Nam feugiat dui in nisi</h3>
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>

               <div className="col-md-6 col-sm-6">
                    
                    <div className="project-item">
                         <a href="/images/project-image4.jpg" className="image-popup">
                              <img src="/images/project-image4.jpg" className="img-responsive" alt=""/>
                         
                              <div className="project-overlay">
                                   <div className="project-info">
                                        <h1>Lorem ipsum dolor</h1>
                                        <h3>Mollis aliquam faucibus urna</h3>
                                   </div>
                              </div>
                         </a>
                    </div>
               </div>               

          </div>
     </div>
</section>



<section id="team" classname="parallax-section">
  <div classname="container">
    <div classname="row">
      <div classname="col-md-offset-2 col-md-8 col-sm-12">
        <div classname="section-title">
          <h1>Meet Our People</h1>
        </div>
      </div>
      
      <div classname="clearfix" />
      <div id="owl-team" classname="owl-carousel inline-block">
       
        <div classname="col-md-4 col-sm-4 item">
          <div classname="team-item">
            <img src="/images/team-image2.jpg" classname="img-responsive" alt />
            <div classname="team-overlay">
              <ul classname="social-icon">
                <li><a href="#" classname="fa fa-instagram" /></li>
                <li><a href="#" classname="fa fa-github" /></li>
                <li><a href="#" classname="fa fa-facebook" /></li>
              </ul>
            </div>
          </div>
          <p>Luke Wara</p>
          <h3>Speciality Focus</h3>
        </div>
        <div classname="col-md-4 col-sm-4 item">
          <div classname="team-item">
            <img src="/images/team-image3.jpg" classname="img-responsive" alt />
            <div classname="team-overlay">
              <ul classname="social-icon">
                <li><a href="#" classname="fa fa-instagram" /></li>
                <li><a href="#" classname="fa fa-dribbble" /></li>
                <li><a href="#" classname="fa fa-behance" /></li>
              </ul>
            </div>
          </div>
          <p>Mono Mana</p>
          <h3>Art director</h3>
        </div>
        <div classname="col-md-4 col-sm-4 item">
          <div classname="team-item">
            <img src="/images/team-image4.jpg" classname="img-responsive" alt />
            <div classname="team-overlay">
              <ul classname="social-icon">
                <li><a href="#" classname="fa fa-twitter" /></li>
                <li><a href="#" classname="fa fa-facebook" /></li>
                <li><a href="#" classname="fa fa-envelope-o" /></li>
              </ul>
            </div>
          </div>
          <p>Phway Phyu</p>
          <h3>Designer in Chief</h3>
        </div>
        <div classname="col-md-4 col-sm-4 item">
          <div classname="team-item">
            <img src="/images/team-image1.jpg" classname="img-responsive" alt />
            <div classname="team-overlay">
              <ul classname="social-icon">
                <li><a href="#" classname="fa fa-twitter" /></li>
                <li><a href="#" classname="fa fa-linkedin" /></li>
              </ul>
            </div>
          </div>
          <p>Cherry Lynn</p>
          <h3>Marketing Manager</h3>
        </div>
      </div>
    </div>
  </div>
</section>



<section id="contact" className="parallax-section">
     <div className="container">
          <div className="row">

               <div className="col-md-offset-3 col-md-6 col-sm-12">
                    <div className="section-title">
                         <h1>Talk to us!</h1>
                    </div>
               </div>

               <div className="clearfix"></div>

               <div className="col-md-offset-2 col-md-8 col-sm-12">
                 
                    <form id="contact-form" action="#" method="get" role="form">

                       
                         <h6 className="text-success">Your message has been sent successfully. </h6>
                         
                       
                         <h6 className="text-danger">E-mail must be valid and message must be longer than 1 character.</h6>

                         <div className="col-md-6 col-sm-6">
                              <input type="text" className="form-control" id="cf-name" name="cf-name" placeholder="Name"/>
                         </div>

                         <div className="col-md-6 col-sm-6">
                              <input type="email" className="form-control" id="cf-email" name="cf-email" placeholder="Email Address"/>
                         </div>

                         <div className="col-md-12 col-sm-12">
                              <input type="text" className="form-control" id="cf-subject" name="subject" placeholder="Subject"/>
                              <textarea className="form-control" rows="5" id="cf-message" name="cf-message" placeholder="Message"></textarea>
                         </div>

                         <div className="col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4">
                              <div className="section-btn">
                                   <button type="submit" className="form-control" id="cf-submit" name="submit"><span data-hover="Send Message">Send Message</span></button>
                              </div>
                         </div>
                    </form>
               </div>

          </div>
     </div>
</section>
<footer>
  <div className="container">
    <div className="row">
      <div className="col-md-5 col-sm-6">
        <h2>Digital Studio</h2>
        <p>321 Donec et justo id risus, Malesuada pharetra,<br /> Tristique vestibulum,<br /> Lorem ipsum dolor</p>
      </div>
      <div className="col-md-4 col-sm-6">
        <div className="footer-info">
          <h2>Keep in touch</h2>
          <p><a href="tel:010-090-0780">010-090-0780</a></p>
          <p><a href="mailto:info@company.com">info@company.com</a></p>
          <p><a href="#">Our Location</a></p>
        </div>
      </div>
      <div className="col-md-3 col-sm-12">
        <h2>About Us</h2>
        <p>Sed vestibulum posuere ante, eget blandit metus. Morbi sodales feugiat erat, et placerat sapien suscipit ut.</p>
        <ul className="social-icon">
          <li><a href="#" className="fa fa-twitter" /></li>
          <li><a href="#" className="fa fa-facebook" /></li>
          <li><a href="#" className="fa fa-instagram" /></li>
          <li><a href="#" className="fa fa-linkedin" /></li>
        </ul>
      </div>
      <div className="clearfix" />
      <div className="col-md-12 col-sm-12">
        <div className="copyright-text">
          <p>Copyright © 2018 Company Name 
            | Design: Tooplate</p>
        </div>
      </div>
    </div>
  </div>
</footer>
</div>
  );
}

export default Home;
