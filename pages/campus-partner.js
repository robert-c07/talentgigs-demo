/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import Link from "next/link";
import { useState } from "react";
import 'react-modal-video/css/modal-video.css';
import CounterUp from "../components/elements/CounterUp";
import Layout from "../components/layout/Layout";
import ClientLogos from "../components/slider/ClientLogo";
import ContactForm from "../components/contact/contactform";
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
                                <div className="col-lg-7"><span className="tag-1 color-orange-900">What We Do, What You Get</span>
                                    <h1 className="text-display-3 mt-30">Empowering Colleges with Expert Placement Solutions</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">we act as a dedicated Placement Partner, connecting colleges with top recruiters to enhance student employability and campus placements.</p>
                                    <div className="mt-40">
                                        <Link href="#"><a className="btn btn-black shape-square icon-arrow-right-white">Partner with us 
                                        </a></Link>

                                        <Link href="/contact"><a className="btn btn-link color-gray-900 icon-arrow-right text-heading-6">Contact Us
                                        </a></Link>
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
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900"><CounterUp count={10} time={3}/>+</span>
                                            <p className="text-body-text color-gray-500 pl-40t">Years in Recruitment</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900"><CounterUp count={450} time={3}/>+</span>
                                            <p className="text-body-text color-gray-500 pl-40">Clients</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900"><CounterUp count={10} time={3}/>+</span>
                                            <p className="text-body-text color-gray-500 pl-40">College Partner</p>
                                        </div>
                                        <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30"><span className="text-display-3 color-green-900"><CounterUp count={1000} time={3}/>+</span>
                                            <p className="text-body-text color-gray-500 pl-40">Candidate Placed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-1" />
                        </div>
                    </div>
                </div>
                <section className="section-box mt-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <div className="text-center mb-20"><span className="tag-1">How We Do</span></div>
                                <h2 className="text-display-3 color-gray-900 mb-60">Campus to Corporate – A Smooth Journey with Talentgigs<br className="d-lg-block d-none" /></h2>
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
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-sm-1 col-12" />
                            <div className="col-lg-10 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900 mb-10">How to Partner with Talentgigs</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">We bridge the gap between students and employers through structured hiring programs<br className="d-lg-block d-none" /></p>
                            </div>
                            <div className="col-lg-1 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-40">
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-acquis.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">1. Consultation & Proposal </h4>
                                        <p className="text-body-text color-gray-600 mt-15">Schedule a free consultation to create a personalized placement plan aligned with your college’s needs and student potential.<br></br><br></br></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-active.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">2. Agreement & Onboarding</h4>
                                        <p className="text-body-text color-gray-600 mt-15">Once we formalize the partnership, Talentgigs becomes your official Campus Placement Partner.<br></br><br></br></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <div className="list-icons mt-50">
                                    <div className="item-icon"><span className="icon-left"><img src="/assets/imgs/page/homepage2/icon-retent.svg" alt="Agon" /></span>
                                        <h4 className="text-heading-4">3. Placement Activation</h4>
                                        <p className="text-body-text color-gray-600 mt-15">We evaluate student skills and conduct mock interviews for job readiness. Our corporate tie-ups and job drives connect students with top recruiters for successful placements.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-100">
                    <div className="container">
                        <div className="text-center mb-20"><span className="tag-1 bg-6 color-green-900">What You Get</span></div>
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center">
                                <h2 className="text-heading-1 color-gray-900">Unlocking Campus Opportunities with Talentgigs’ Recruitment Expertise <br className="d-lg-block d-none" /></h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">Seamless recruitment solutions that connect colleges with top recruiters</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-70">
                        <div className="row">
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 pb-40 bg-5 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/business-strategy.svg" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Stronger Corporate Tie-ups</h3>
                                    <p className="text-body-excerpt mt-20">Direct access to top recruiters and exclusive job drives for better placement opportunities.</p><br></br>
                                    {/* <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bd-bg-6 pb-55 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/icons8.png" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Faster & Higher Hiring Rates</h3>
                                    <p className="text-body-excerpt mt-20">Our extensive industry network ensures quicker and more successful placements.</p><br></br>
                                    {/* <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12">
                                <div className="card-grid-style-3 bg-2 pb-40 mb-30">
                                    <div className="grid-1-img"><img src="/assets/imgs/page/homepage1/icons6.png" alt="Agon" /></div>
                                    <h3 className="text-heading-3 mt-20">Seamless Placement Process</h3>
                                    <p className="text-body-excerpt mt-20">We manage the entire recruitment cycle, reducing the college’s effort while maximizing results.</p>
                                    {/* <div className="mt-30">
                                        <Link href="/page-service-1"><a className="btn btn-default icon-arrow-right">Learn more
                                        </a></Link>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box">
                    <div className="container mt-110 mb-10">
                        <div className="row">
                            <div className="col-lg-9 col-sm-8">
                                <h3 className="text-heading-1 mb-10">Our Top Hiring Clients</h3>
                                {/* <p className="text-body-lead-large color-gray-600">Decades of experience in design and development</p> */}
                            </div>
                        </div>
                    </div>
                    <div className="container mt-80">
                        <ClientLogos/>
                    </div>
                </section>
                {/* <section className="section-box">
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
                </section> */}
                {/* <section className="section-box">
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

                <ContactForm/>
                
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="M8qLrVQkxd8"
                    onClose={() => setOpen(false)}
                />
            </Layout>

        </>
    )
}

export default About1;