import React from "react";
import blogpic from '../img/blog-list-1.png';
import authpic from '../img/author.png';
import logo from '../img/blog-logo.png';
const Home = () =>{
  
return(
  <div>
    <header class="header">
      <div class="main-header">
        <div class="container">
          <nav class="navbar navbar-expand-lg">
          <a class="navbar-brand"><img src={logo}></img></a>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span class="fa fa-bars"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsibleNavbar">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link">Blogging Tools</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Google</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Internet Marketing</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link">Our Services</a>
                 </li>
                <li class="nav-item">
                  <a class="nav-link">Advertise With Us</a>
                </li>
              </ul>
              <div class="header-btn">
                <ul>
                  <li>
                    <a class="btn request-btn">Request a Free quote</a>
                  </li>
                  <li>
                    <a class="btn">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>



    <section class="newsletter-sec">
      <div class="container">
        <h1>Smart marketing <br />starts here</h1>
        <h4>Join over 150,000 marketing managers who get our best digital marketing insights, strategies and tips delivered straight to their inbox.</h4>
        <form action="" method="">
          <div class="service-form-box">
            <div class="form-group">
              <input type="email" name="" class="form-control" placeholder="ENTER YOUR WORK EMAIL"></input>
            </div>
          </div>
        </form>
      </div>
    </section>


    <section class="blog-page-sec">
      <div class="container">
        <div class="blog-page-in">
          <div class="blog-list-top">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="blog-list-top-img">
                  <a href="single-blog.html"><img src={blogpic}></img></a>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="blog-list-box">
                  <h3><a href="single-blog.html">Top Software Development Companies in London – Compare Quotes</a></h3>
                  <p class="blog-desc">Kickstart the growth of your business with a professionally designed website and software development services offered by Logicsofts, one of the leading software development</p>
                  <a href="single-blog.html" class="btn btn-white arrow-btn">Read more</a>
                  <div class="blog-list-author">
                    <div class="blog-author-img">
                      <img src={authpic}></img>
                    </div>
                    <div class="blog-author-name">
                      <h4><span>Author : </span><a href="#">Sam Singh</a></h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
             
        </div>  
        </div>
        </section>        


    
  </div>
);
}

export default Home;