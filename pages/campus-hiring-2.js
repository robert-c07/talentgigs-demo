/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Accordion from "../components/elements/Accordion";
import Layout from "../components/layout/Layout";
// import OfferSlider from "../components/slider/Team";


function Service2() {
    return (
        <>

            <Layout>
                <section className="section-box">
                    <div className="banner-hero bg-service-2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <h1 className="text-display-2">Strong branding simplifies your <span className="color-green-900">hiring process </span>Easier</h1>
                                    <p className="text-body-lead-large color-gray-500 mt-40 pr-40">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                                    <div className="mt-40 text-center">
                                        <Link href="/contact"><a className="btn btn-black icon-arrow-right-white">Get Started</a></Link>

                                        {/* <Link href="/page"><a className="btn btn-link icon-triangle color-gray-900 ml-40">How it works</a></Link> */}
                                    </div>
                                </div>
                                <div className="col-lg-12 d-none d-lg-block">
                                    <div className="row">
                                        <div className="col-lg-2" />
                                        <div className="col-lg-8">
                                            <div className="banner-imgs">
                                                {/* <div className="block-1 shape-2"><img src="/assets/imgs/page/services/2/banner2.png" alt="Agon" /></div>
                                                <div className="block-2 shape-2"><img src="/assets/imgs/page/services/2/banner1.png" alt="Agon" /></div><div className="block-3 shape-2"><img src="/assets/imgs/page/services/2/banner3.png" alt="Agon" /></div> */}
                                                <img src="/assets/imgs/page/services/1/digital.jpg" alt="Agon" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mt-70">
                    <div className="container text-center">
                        <h2 className="text-heading-3  color-gray-900 mb-60">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>
                        <p className="text-body-lead-large color-gray-500 mt-40 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <br></br><br></br>
                        <div className="row">
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture1.png" width={"250px"}/><br></br>
                            </div>
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture6.png" width={"230px"} /><br></br>
                            </div>
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture3.png" width={"230px"} /><br></br>
                            </div>
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture4.png" width={"230px"} /><br></br>
                            </div>
                        </div>
                      
                        <div className="row">
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture5.png" width={"230px"} /><br></br>
                            </div>
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture2.png" width={"230px"}/><br></br>
                            </div>
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture7.png" width={"210px"}/><br></br>
                            </div>
                            <div className="col-sm-3">
                            <img className="box-hover-shadow rounded mx-auto d-block" alt="Agon" src="assets/imgs/slider/logo/Picture.png" width={"210px"}/>
                            </div> 
                        </div>
                        </div>
                            {/* <div className="col-sm-6">
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture1.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture2.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture3.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture4.png" /></a></Link>
                                    </li><br></br>
                                    
                            </div> */}
                            {/* <div className="col-sm-6">
                            <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture5.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture6.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture7.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture.png" /></a></Link>
                                    </li>
                            </div> */}


                            {/* <div className="col-lg-12">
                                <ul className="list-partners">
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture1.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture2.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture3.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture4.png" /></a></Link>
                                    </li><br></br>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture5.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture6.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture7.png" /></a></Link>
                                    </li>
                                    <li>
                                        <Link href="/#"><a className="item-logo box-hover-shadow"><img alt="Agon" src="assets/imgs/slider/logo/Picture.png" /></a></Link>
                                    </li>
                                </ul>
                            </div> */}
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-sm-1 col-12" />
                            <div className="col-lg-8 col-sm-10 col-12 text-center mt-40">
                                <h2 className="text-heading-1 color-gray-900 mb-10">The generated Lorem Ipsum</h2>
                                <p className="text-body-lead-large color-gray-600 mt-20">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised</p>
                            </div>
                            <div className="col-lg-2 col-sm-1 col-12" />
                        </div>
                    </div>
                    <div className="container mt-90 mb-100">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">BUILDS TRUST</h4>
                                    <p className="text-body-text-md color-gray-600">We can increase trust using effective branding</p>
                                    <div className="box-image-inner bg-color-1"><img width="90%" src="/assets/imgs/template/Digital-marketing-trends-2022.jpg" ></img></div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="bg-2 box-square hover-up">
                                    <h4 className="text-heading-4 color-gray-900 mb-15">ATTRACT TALENT</h4>
                                    <p className="text-body-text-md color-gray-600">Building a strong brand makes great talent to chase the company</p>
                                    <div className="box-image-inner bg-color-2"><img width="100%" src="/assets/imgs/template/employer-branding-examples.png"></img></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className="section-box">
                    <div className="container mt-120">
                        <div className="bg-2 bdrd-58 pattern-white none-pattern pb-60">
                            <div className="row">
                                <div className="col-lg-2 col-sm-1 col-12" />
                                <div className="col-lg-8 col-sm-10 col-12 text-center mt-70">
                                    <h2 className="text-heading-1">What <span className="weoffer">We Offer</span></h2>
                                    <p className="text-body-lead-large color-gray-600 mt-20">At Talentgigs, your Brand growth is all that matters. Our digital marketing services take your Brand to the next level.</p>
                                </div>
                                <div className="col-lg-2 col-sm-1 col-12" />
                            </div>
                            <div className="container mt-70">
                                <OfferSlider/>
                            </div>
                        </div>
                    </div>
                </section> */}
                {/* <section className="section-box pt-140 pb-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 mb-40">
                                <h3 className="text-heading-1">Frequently asked questions</h3>
                                <p className="text-body-text color-gray-600 mt-30">Feeling inquisitive? Have a read through some of our FAQs or contact our supporters for help</p>
                                <div className="row">
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Boost your sale</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                    <div className="col-lg-12 mt-50">
                                        <h4 className="text-heading-6 icon-leaf">Introducing New Features</h4>
                                        <p className="text-body-excerpt color-gray-600 mt-15">The latest design trends meet hand-crafted templates.</p>
                                    </div>
                                </div>
                                <div className="mt-60">
                                    <Link href="/page-contact"><a className="btn btn-black icon-arrow-right-white">Contact Us</a></Link>

                                    <Link href="/page-about-1"><a className="btn btn-link text-heading-6">Support Center</a></Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                            <Accordion/>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box overflow-visible mb-100">
                    <div className="container mt-100">
                        <div className="row">
                            <div className="col-lg-10 mx-auto">
                                <div className="bg-6 box-newsletter position-relative">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-7"><span className="text-body-capitalized color-gray-500 text-uppercase">newsletter</span>
                                            <h4 className="text-heading-2 mb-10 mt-10">Subscribe our newsletter</h4>
                                            <p className="text-body-text color-gray-500">By clicking the button, you are agreeing with our</p>
                                            <Link href="/page-terms"><a>Term &amp; Conditions</a></Link>

                                            <div className="box-form-newsletter mt-30">
                                                <form className="form-newsletter"><input className="input-newsletter"  placeholder="Enter you mail .." /><button className="btn btn-send" /></form>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-5 mt-30 mt-lg-0 mt-md-30 mt-sm-30 position-relative text-end">
                                            <div className="block-chart shape-1"></div><img className="img-responsive img-newsletter" src="assets/imgs/template/img-newsletter.png" alt="Agon" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </Layout>

        </>
    )
}

export default Service2;