import React from "react";

const Footer = () => {

    return (
        <div>

            <section class="service-contact-sec">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="service-contact-left">
                                <h3><b>Get in touch/ also schedule a call/meet</b> </h3>
                                <h4><span>Schedule a call or meeting</span> with our digital marketing expert for <span>FREE consultation</span>.</h4>
                                <a href="#" className="btn btn-primary" style={{ backgroundColor: "#be2664", borderColor: "#be2664", color: "#fff", fontSize: "18px", fontFamily: 'SegoeUI-Semibold', transition: "all 0.3s ease 0s", borderRadius: "40px", padding: "13px 55px 13px 40px" }}>Schedule Consultation</a>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="service-contact-form">
                                <h4><span>If you want us to prepare a digital marketing scope for your business,</span> please fill in the necessary information required for us to proceed.</h4>
                                <form action="" method="">
                                    <div class="service-form-box">
                                        <div class="form-group" style={{ padding: "10px" }}>
                                            <label>Full Name</label>
                                            <input type="text" name="" class="form-control"></input>
                                        </div>
                                        <div class="form-group" style={{ padding: "10px" }}>
                                            <label>Email</label>
                                            <input type="email" name="" class="form-control"></input>
                                        </div>
                                        <div class="form-group" style={{ padding: "10px" }}>
                                            <label>Phone</label>
                                            <input type="tel" name="" class="form-control"></input>
                                        </div>
                                        <div class="form-group" style={{ padding: "10px" }}>
                                            <label>Service Category</label>
                                            <select class="form-control">
                                                <option>Select</option>
                                                <option>Web Design</option>
                                                <option>Web Development</option>
                                                <option>Digital Marketing</option>
                                                <option>Graphic Design</option>
                                                <option>IT Services</option>
                                                <option>Mobile Apps</option>
                                                <option>White Label Solutions</option>
                                                <option>Outsourcing</option>
                                                <option>Printing</option>
                                                <option>Consultation</option>
                                            </select>
                                        </div>
                                        <div class="form-group" style={{ padding: "10px" }}>
                                            <label>Date</label>
                                            <input type="date" name="" class="form-control"></input>
                                        </div>
                                        <div class="form-group" style={{ padding: "10px" }}>
                                            <label>Time</label>
                                            <select class="form-control">
                                                <option>Morning</option>
                                                <option>Noon</option>
                                                <option>Evening</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="submit-btn text-right">
                                        <button type="submit" className="btn btn-primary" style={{ backgroundColor: "#be2664", borderColor: "#be2664", color: "#fff", fontSize: "18px", fontFamily: 'SegoeUI-Semibold', transition: "all 0.3s ease 0s", borderRadius: "40px", padding: "13px 30px 13px 25px" }}>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer class="footer">
                <div class="top-footer">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 col-6">
                                <div class="row">
                                    <div class="col-lg-3">
                                        <div class="footer-box">
                                            <ul class="footer-menu">
                                                <li>Home</li>
                                                <li>About Us</li>
                                                <li>Our Work</li>
                                                <li>Faq's</li>
                                                <li>How We Work</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-lg-9">
                                        <div class="footer-box">
                                            <h3 style={{ fontSize: "16px" }}><b>Services</b></h3>
                                            <ul class="footer-service-menu">
                                                <li>Web Design</li>
                                                <li>Web Development</li>
                                                <li>Digital Marketing</li>
                                                <li>Graphic Design</li>
                                                <li>IT Services</li>
                                                <li>Mobile Apps</li>
                                                <li>White Label Solutions</li>
                                                <li>Outsourcing</li>
                                                <li>Printing</li>
                                                <li>Consultation</li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 col-6">
                                <div class="footer-box footer-contact">
                                    <h3><b>Contact Us</b></h3>
                                    <ul>
                                        <li><span>Address: </span>Suite 6, 17 Comalco Ct Thomastown, 3074</li>
                                        <li><span>Telephone:</span><a href="tel:03 8595 5246">03 8595 5246</a></li>
                                        <li><span>Email:</span><a href="mailto:info@logicsofts.com.au">info@logicsofts.com.au</a></li>
                                    </ul>
                                </div>
                                <div class="footer-box footer-social">
                                </div>
                            </div>
                            <div class="col-lg-7 col-12 footer-tech-row">
                                <div class="footer-box">
                                    <div class="tech-img">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="copyright">
                    <div class="container">
                        <p>Copyright - 2020-2021 All Right Reserved - Logicsofts Australia Ptv Ltd. - ABN29611694529</p>
                    </div>
                </div>
            </footer>


        </div>
    );
}
export default Footer;