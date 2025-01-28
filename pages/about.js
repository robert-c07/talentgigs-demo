/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import TeamSlider from "../components/slider/Team";
import TestimonialSlider from "../components/slider/Testimonial";
const ModalVideo = dynamic(import("react-modal-video"), {
    ssr: false,
});

function About1() {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <Layout>
                <section className="section-box">
                    <div className="banner-hero banner-2 bg-about-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7"><span className="tag-1 color-green-900">What We Do, What You Get</span>
                                    <h1 className="text-display-3 mt-30">We provide you with the <span className="color-green-900">most qualified talent</span> to meet your needs</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Get in touch to learn more</p>
                                    <div className="mt-40">
                                        <Link href="/contact"><a className="btn btn-black shape-square icon-arrow-right-white">Contact Us
                                        </a></Link>

                                        {/* <Link href="/contact"><a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">Contact Us
                                        </a></Link> */}
                                    </div>
                                </div>
                                <div className="col-lg-5 d-none d-lg-block">
                                    <div className="banner-imgs">
                                        <div className="block-1 shape-1"><img src="/assets/imgs/page/about/1/banner2.png" alt="Agon" /></div><img className="img-responsive shape-2" alt="Agon" src="assets/imgs/page/about/1/banner1.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="bd-bottom pb-20 mb-40 text-mb-center">
                                    <div className="row">
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={8} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years in Business</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={500} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Resource Hired</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={2} time={1}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Country / office</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900">+<CounterUp count={10} time={3}/></span>
                                            <p className="text-body-text color-gray-500 pl-40">Constant Clients</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                {/* <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">What We Do, What You Get</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">We believe in the power<br className="d-lg-block d-none" />of Digital Hiring</h2>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1" />
                            <div className="col-lg-10">
                                <div className="box-image">
                                    <a className="popup-youtube btn-play-video btn-play-middle" onClick={() => setOpen(true)}></a>
                                    <img className="img-responsive bdrd-16" src="assets/imgs/page/about/1/img-1.png" alt="Agon" /></div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </section> */}

                <section className="section-box mt-30">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">We believe in the power of Digital Hiring</h2>
                                <br></br><br></br>
                                <p className="text-body-lead-large color-gray-600 mt-20">Talentgigs is a unique startup to provide Digital HR Hiring to businesses of all scales. Based in Chennai, the company was born out of challenges faced by IT Industries and startups, small and mid-scale businesses in hiring.</p><hr></hr>
                                <p className="text-body-lead-large color-gray-600 mt-20">The company aims to change Hirning, and it is done by providing the “Right Talent Experience Journey” Using Digital Hirning.</p><hr></hr>
                                <p className="text-body-lead-large color-gray-600 mt-20">Talentgigs expertise in hiring the best IT and Non-IT talent, helping businesses to have the right candidate who matches their company culture. Our team has a proven track record of fulfilling the hiring criteria of various industries. </p><hr></hr>
                                <p className="text-body-lead-large color-gray-600 mt-20">Recruiting tech candidates requires the recruiter to have IT, analytical, and multitasking skills. Strong competition present in recruitment. The industry has to lead us to evolve our skills with changing times, and we are doing it by improvising our hiring strategy.</p><hr></hr>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div> */}

                <section className="section-box">
                    <div className="container mt-120">
                        <div className="bdrd-58 box-gray-100">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center">
                                    <h2 className="text-heading-1 color-gray-900 mt-30">We believe in the power of Digital Hiring</h2>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12"/>
                            </div>
                            <div className="container mt-70">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 hover-up col-sm-12">
                                        <div className="card-grid-style-2 shadow-sm p-3 mb-20">
                                            {/* <h5 className="text-heading-5 color-gray-900">Talentgigs is a unique startup to provide Digital HR Hiring to businesses of all scales. Based in Chennai, the company was born out of challenges faced by IT Industries and startups, small and mid-scale businesses in hiring.</h5> */}
                                            <h3 className="text-body-text ">Talentgigs is a unique startup to provide Digital HR Hiring to businesses of all scales. Based in Chennai, the company was born out of challenges faced by IT Industries and startups, small and mid-scale businesses in hiring.</h3>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 hover-up col-sm-12">
                                        <div className="card-grid-style-2 shadow-sm p-3 mb-20">
                                            {/* <h5 className="text-heading-5 color-gray-900">Talentgigs is a unique startup to provide Digital HR Hiring to businesses of all scales. Based in Chennai, the company was born out of challenges faced by IT Industries and startups, small and mid-scale businesses in hiring.</h5> */}
                                            <h6 className="text-body-text">Talentgigs expertise in hiring the best IT and Non-IT talent, helping businesses to have the right candidate who matches their company culture. Our team has a proven track record of fulfilling the hiring criteria of various industries.</h6>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 col-md-12 hover-up col-sm-12">
                                        <div className="card-grid-style-2 shadow-sm p-3 mb-20">
                                            {/* <h5 className="text-heading-5 color-gray-900">98% of residents recommend us</h5> */}
                                            <h6 className="text-body-text">The company aims to change Hirning, and it is done by providing the “Right Talent Experience Journey” Using Digital Hirning.</h6>
                                        </div>
                                    </div>
                        
                                   

                                    <div className="col-lg-6 col-md-12 hover-up col-sm-12">
                                        <div className="card-grid-style-2 shadow-sm p-3 mb-20">
                                            {/* <h5 className="text-heading-5 color-gray-900">Talentgigs is a unique startup to provide Digital HR Hiring to businesses of all scales. Based in Chennai, the company was born out of challenges faced by IT Industries and startups, small and mid-scale businesses in hiring.</h5> */}
                                            <h6 className="text-body-text">Recruiting tech candidates requires the recruiter to have IT, analytical, and multitasking skills. Strong competition present in recruitment. The industry has to lead us to evolve our skills with changing times, and we are doing it by improvising our hiring strategy.</h6>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-12 col-12 text-justify">
                                <h2 className="text-heading-1 color-gray-900 mb-10">We believe in the power of Digital Hiring</h2>
                                <br></br><br></br><br></br>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" container d-flex">
                    <div className="row">
                        <div className="col-sm-6 ">
                            <div className="card hover-up">
                                <div className="card-body">
                                    <p className="text-body-lead-large color-gray-600 mt-20">The company aims to change Hirning, and it is done by providing the “Right Talent Experience Journey” Using Digital Hirning.</p><br></br><br></br>
                                </div>
                            </div>
                            <br></br><br></br><br></br>
                            <div className="card hover-up">
                                <div className="card-body">
                                <p className="text-body-lead-large color-gray-600 mt-20">Talentgigs is a unique startup to provide Digital HR Hiring to businesses of all scales. Based in Chennai, the company was born out of challenges faced by IT Industries and startups, small and mid-scale businesses in hiring.</p><br></br>
                                </div>
                            </div>
                            <br></br>
                        </div>
                       
                        <div className="col-sm-6">

                            <div className="card hover-up">
                                <div className="card-body">
                                <p className="text-body-lead-large color-gray-600 mt-20">Talentgigs expertise in hiring the best IT and Non-IT talent, helping businesses to have the right candidate who matches their company culture. Our team has a proven track record of fulfilling the hiring criteria of various industries. </p><br></br>
                                </div>
                            </div>
                            <br></br>

                            <div className="card hover-up">
                                <div className="card-body">
                                <p className="text-body-lead-large color-gray-600 mt-20">Recruiting tech candidates requires the recruiter to have IT, analytical, and multitasking skills. Strong competition present in recruitment. The industry has to lead us to evolve our skills with changing times, and we are doing it by improvising our hiring strategy.</p>
                                </div>
                            </div>
                          </div>

                    </div>
                    </div> */}

        
                    <br></br><br></br>
                    <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-2 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase"></span>
                                            <h4 className="text-heading-3 mb-10 mt-10">Get in touch with us</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page"><a>Term &amp; Conditions</a></Link><br></br><br></br>
                                            <form className="form-newsletter"> <Link href="/contact"><a className="btn btn-black icon-arrow-right-white mb-15">Get Started</a></Link></form>           
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"><img src="/assets/imgs/template/chart.png" alt="Agon" /></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br></br><br></br>
                    {/* <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">1. Acquisition</h4>
                                        <p className="text-body-text color-gray-600 mt-15">The company aims to change Hirning, and it is done by providing the “Right Talent Experience Journey” Using Digital Hirning.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">2. Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Talentgigs expertise in hiring the best IT and Non-IT talent, helping businesses to have the right candidate who matches their company culture. Our team has a proven track record of fulfilling the hiring criteria of various industries. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">3. Retention</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Recruiting tech candidates requires the recruiter to have IT, analytical, and multitasking skills. Strong competition present in recruitment. The industry has to lead us to evolve our skills with changing times, and we are doing it by improvising our hiring strategy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </section>
                {/* <section className="section-box mt-100">
                    <div className="container">
                        <div className="text-center mb-20"><span className="tag-1 bg-6 color-green-900">What We Do, What You Get</span></div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900">Bringing the world's<br className="d-lg-block d-none" />ideas to life</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Developers are trusted to create an engaging experience for their companies, so we build tools to help them.</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Business Strategy</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bd-bg-6 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/local.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Local Marketing</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bg-2 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/social.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Social media</h3>
                                    <p className="text-body-excerpt mt-20">You are always welcome to visit our little den. Professional in teir craft! All products were super amazing with strong attension to details, comps and overall vibe.</p>
                                    <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-110">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Team</h3>
                                <p className="text-body-lead-large color-gray-600">Decades of experience in design and development</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TeamSlider/>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-10">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Happy Customers</h3>
                                <p className="text-body-lead-large color-gray-600">Know about our clients, we are a woldwide corporate brand</p>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <TestimonialSlider />
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-30">
                        <div className="row">
                            <div className="col-lg-8">
                                <h3 className="text-heading-1 mb-10">Latest News</h3>
                                <p className="text-body-lead-large color-gray-600">From Our blog and Event fanpage</p>
                            </div>
                            <div className="col-lg-4 text-lg-end text-start pt-30">
                                <Link href="/blog-1"><a className="btn btn-black icon-arrow-right-white">View More
                                </a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-90">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Company</span>
                                    <Link href="/blog-single"><a className="text-heading-4">We can blend colors multiple ways, the most common
                                    </a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-1.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Marketing Event</span>
                                    <Link href="/blog-single"><a className="text-heading-4">How To Blow Through Capital At An Incredible Rate
                                    </a></Link>

                                    <div className="grid-4-img">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-2.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 pr-30">
                                <div className="card-grid-style-4"><span className="tag-dot">Customer Services</span>
                                    <Link href="/blog-single"><a className="text-heading-4">Design Studios That Everyone Should Know About?
                                    </a></Link>

                                    <div className="grid-4-img color-bg-4">
                                        <Link href="/blog-single"><a><img src="/assets/imgs/page/homepage1/img-news-3.png" alt="Agon" />
                                        </a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="7e90gBu4pas"
                    onClose={() => setOpen(false)}
                />
            </Layout>

        </>
    )
}

export default About1;