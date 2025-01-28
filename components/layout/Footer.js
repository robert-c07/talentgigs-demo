/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const Footer = () => {
    return (
        <>
            <footer className="footer mt-50">
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 text-center text-md-start">
                                {/* <Link href="/">
                                    <a>
                                        <img alt="Agon" src="/assets/imgs/template/logo.svg" />
                                    </a>
                                </Link> */}
                                <h4><img width="190px" src="/assets/imgs/template/logo1.png" ></img></h4>
                            </div>
                            {/* <div className="col-md-8 col-sm-6 text-center text-md-end">
                                <span className="color-gray-900 text-heading-6 mr-30 text-mb-sm-20">Ready to get started?</span>
                                <Link href="/page-signup">
                                    <a className="btn btn-square">Create an Account</a>
                                </Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 width-33">
                            <h4 className="text-heading-5">Contact Us</h4><br></br>
                            {/* <div className="mt-20 text-body-text color-gray-600 mb-20">Olympia Tech Park,<br></br> 9th Floor,Plot No. 1, 100 Feet Rd, SIDCO Industrial Estate, Guindy,<br></br> Chennai, Tamil Nadu 600032</div> */}
                            {/* <div className="text-body-text color-gray-600"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                                    </svg></span><a href="tel:8883336038" className="color-gray-600">&nbsp;&nbsp;+91 8883336038</a></div>

                            <div className="text-body-text color-gray-600"><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                                    </svg></span><a href="https://wa.me/8883336038" target="_blank" rel="noreferrer" className="color-gray-600" >&nbsp;&nbsp;+91 8883336038</a></div> */}

                            <div className="text-body-text color-gray-600"><span><a href="skype:talent.gigs"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-skype" viewBox="0 0 16 16">
                                    <path d="M4.671 0c.88 0 1.733.247 2.468.702a7.423 7.423 0 0 1 6.02 2.118 7.372 7.372 0 0 1 2.167 5.215c0 .344-.024.687-.072 1.026a4.662 4.662 0 0 1 .6 2.281 4.645 4.645 0 0 1-1.37 3.294A4.673 4.673 0 0 1 11.18 16c-.84 0-1.658-.226-2.37-.644a7.423 7.423 0 0 1-6.114-2.107A7.374 7.374 0 0 1 .529 8.035c0-.363.026-.724.08-1.081a4.644 4.644 0 0 1 .76-5.59A4.68 4.68 0 0 1 4.67 0zm.447 7.01c.18.309.43.572.729.769a7.07 7.07 0 0 0 1.257.653c.492.205.873.38 1.145.523.229.112.437.264.615.448.135.142.21.331.21.528a.872.872 0 0 1-.335.723c-.291.196-.64.289-.99.264a2.618 2.618 0 0 1-1.048-.206 11.44 11.44 0 0 1-.532-.253 1.284 1.284 0 0 0-.587-.15.717.717 0 0 0-.501.176.63.63 0 0 0-.195.491.796.796 0 0 0 .148.482 1.2 1.2 0 0 0 .456.354 5.113 5.113 0 0 0 2.212.419 4.554 4.554 0 0 0 1.624-.265 2.296 2.296 0 0 0 1.08-.801c.267-.39.402-.855.386-1.327a2.09 2.09 0 0 0-.279-1.101 2.53 2.53 0 0 0-.772-.792A7.198 7.198 0 0 0 8.486 7.3a1.05 1.05 0 0 0-.145-.058 18.182 18.182 0 0 1-1.013-.447 1.827 1.827 0 0 1-.54-.387.727.727 0 0 1-.2-.508.805.805 0 0 1 .385-.723 1.76 1.76 0 0 1 .968-.247c.26-.003.52.03.772.096.274.079.542.177.802.293.105.049.22.075.336.076a.6.6 0 0 0 .453-.19.69.69 0 0 0 .18-.496.717.717 0 0 0-.17-.476 1.374 1.374 0 0 0-.556-.354 3.69 3.69 0 0 0-.708-.183 5.963 5.963 0 0 0-1.022-.078 4.53 4.53 0 0 0-1.536.258 2.71 2.71 0 0 0-1.174.784 1.91 1.91 0 0 0-.45 1.287c-.01.37.076.736.25 1.063z"/>
                                    </svg></a></span><a href="skype:talent.gigs" className="color-gray-600">&nbsp;&nbsp; talent.gigs</a></div>

                            <div className="text-body-text color-gray-600"><span>
                            <a href="mailto:balaji@talentgigs.in">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                                    </svg></a>
                                    </span><a href="mailto:balaji@talentgigs.in" className="color-gray-600">&nbsp;&nbsp; balaji@talentgigs.in</a></div>

                            <div className="text-body-text color-gray-600">
                            <a href="https://forms.gle/SgDT3oDuAAnNAGST6">
                                <svg width="18" height="18" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M416 96C398.57 112.682 377.836 125.523 355.136 133.696C331.2 137.92 264.96 107.2 232.32 138.56C226.88 144 220.16 149.44 213.12 154.88C197.76 148.16 174.08 137.92 156.8 128C139.52 118.08 96 96 96 96L0 208C0 208 23.68 240 38.4 261.12C48 275.2 59.84 296.64 67.52 311.04L56.64 323.84C54.0345 329.016 53.0971 334.872 53.9566 340.603C54.8162 346.333 57.4306 351.656 61.44 355.84C66.0679 359.31 71.6987 361.18 77.4827 361.168C83.2667 361.157 88.89 359.264 93.504 355.776C91.7932 357.779 90.4984 360.103 89.6951 362.612C88.8919 365.121 88.5964 367.764 88.8257 370.389C89.0551 373.013 89.8048 375.565 91.0311 377.897C92.2573 380.228 93.9356 382.292 95.968 383.968C100.854 386.822 106.414 388.32 112.073 388.309C117.732 388.298 123.285 386.777 128.16 383.904C124.504 388.461 122.503 394.125 122.486 399.967C122.468 405.81 124.435 411.485 128.064 416.064C132.781 417.697 137.812 418.217 142.763 417.585C147.715 416.952 152.453 415.183 156.608 412.416C154.538 417.315 154.002 422.727 155.07 427.937C156.139 433.147 158.761 437.911 162.592 441.6C168.003 444.005 173.937 444.996 179.836 444.481C185.735 443.966 191.407 441.962 196.32 438.656L212.832 423.712C227.936 438.752 248.768 448.064 271.776 448.064L273.728 448.032C281.31 447.385 288.574 444.687 294.741 440.229C300.907 435.77 305.745 429.718 308.736 422.72C313.408 424.512 318.72 425.728 324.352 425.728C331.904 425.728 338.912 423.552 344.832 419.808C363.552 407.424 359.072 397.824 359.072 397.824C365.729 400.689 373.123 401.369 380.19 399.764C387.257 398.16 393.633 394.355 398.4 388.896C403.354 383.829 406.477 377.255 407.277 370.213C408.077 363.172 406.507 356.065 402.816 350.016C403.018 350.137 403.253 350.193 403.488 350.176C416.96 350.176 428.672 342.752 434.784 331.808C437.792 324.03 438.808 315.623 437.741 307.352C436.673 299.081 433.556 291.208 428.672 284.448L428.768 284.608C455.008 279.488 454.048 266.368 466.848 247.168C478.968 231.5 494.048 218.366 511.232 208.512L416 96ZM414.4 321.92C400.32 336 389.44 329.92 365.44 311.68C341.44 293.44 293.76 259.2 293.76 259.2C295.712 268.96 300.224 277.44 306.592 284.192C316.8 295.68 347.2 321.92 361.6 335.36C370.56 343.68 393.6 360.32 380.16 373.12C366.72 385.92 356.16 373.12 334.08 355.2C312 337.28 262.72 293.12 262.72 293.12C262.449 297.353 263.078 301.595 264.568 305.567C266.057 309.539 268.372 313.149 271.36 316.16C276.8 322.56 307.2 352 320 365.44C332.8 378.88 344 386.88 333.12 397.44C322.24 408 300.16 391.36 288 378.88C269.12 360.64 231.68 326.72 231.68 326.72L231.648 328.416C231.648 337.504 234.784 345.824 240.064 352.416C249.28 364.512 267.2 380.192 278.08 392.352C288.96 404.512 295.36 414.752 278.08 424.352C260.8 433.952 235.2 410.272 224 398.752V398.688C224.002 395.527 222.866 392.472 220.8 390.08C216.972 386.534 212.25 384.1 207.141 383.04C202.032 381.98 196.731 382.334 191.808 384.064C193.833 382.251 195.457 380.034 196.574 377.556C197.692 375.077 198.278 372.393 198.296 369.675C198.315 366.956 197.764 364.264 196.679 361.771C195.595 359.278 194.001 357.04 192 355.2C187.8 352.017 182.673 350.298 177.403 350.303C172.133 350.309 167.009 352.04 162.816 355.232C164.936 353.207 166.573 350.729 167.605 347.985C168.637 345.24 169.037 342.298 168.775 339.377C168.514 336.456 167.598 333.632 166.096 331.114C164.593 328.596 162.542 326.449 160.096 324.832C154.367 321.233 147.645 319.541 140.896 320.001C134.146 320.461 127.715 323.049 122.528 327.392C125.995 323.19 127.704 317.811 127.299 312.379C126.893 306.946 124.404 301.881 120.352 298.24C115.316 293.552 108.898 290.62 102.057 289.882C95.2164 289.144 88.3205 290.639 82.4 294.144L61.12 258.208C46.4 234.848 29.12 210.528 29.12 210.528L102.08 121.888C102.08 121.888 128 137.888 149.44 150.048C160 156.128 178.24 164.128 192 170.528C170.24 186.848 152 202.528 157.44 213.408C167.134 220.367 178.72 224.206 190.652 224.412C202.584 224.617 214.295 221.181 224.224 214.56C236.955 206.097 251.913 201.608 267.2 201.664C278.304 201.664 288.864 203.968 298.432 208.16C316.16 220.128 348.8 249.568 378.56 268.128C416 295.328 423.36 312.928 414.4 321.888V321.92Z" fill="#CF308A"/>
                                </svg></a>
                                <a href="https://forms.gle/SgDT3oDuAAnNAGST6" className="color-gray-600">&nbsp;&nbsp;Apply job</a>
                            </div>  
                            <div className="text-body-text color-gray-600">
                            <a href="https://www.linkedin.com/company/talentgigs/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg></a>
                            <a href="https://www.linkedin.com/company/talentgigs/" className="color-gray-600">&nbsp;&nbsp;&nbsp;Linkedin</a>
                            </div>
                            {/* <br></br> */}
                            {/* <ul>
                                <li>
                                <i href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                            </svg>
                            <a href="https://www.linkedin.com/company/talentgigs/" className="color-gray-600">&nbsp;&nbsp;&nbsp;Linkedin</a>
                            </i>&nbsp;&nbsp;
                                    
                                    <i href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                             <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                             </svg>&nbsp;&nbsp;</i>

                               
                                    <i href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                            </svg></i>

                                </li>
                            </ul> */}
                        </div>
                        {/* <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">About Us</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/#">
                                        <a>Mission &amp; Vision</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Our Team</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-career">
                                        <a>Careers</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Press &amp; Media</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Advertising</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Testimonials</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-lg-4 width-38">
                            <h4 className="text-heading-5">Quick links</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/">
                                        <a>Home</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a>About</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/branding">
                                        <a>Branding</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact">
                                        <a>Contact</a>
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/#">
                                        <a>Office Center</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog-1">
                                        <a>News &amp; Events</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                        {/* <div className="col-lg-3 width-20 mb-30">
                            <h4 className="text-heading-5">Support</h4>
                            <ul className="menu-footer mt-20">
                                <li>
                                    <Link href="/page-faqs-1">
                                        <a>FAQs</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Editor Help</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Community</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Live Chatting</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-contact">
                                        <a>Contact Us</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Support Center</a>
                                    </Link>
                                </li>
                            </ul>
                        </div> */}
                        <div className="col-lg-4 width-33">
                            <h4 className="text-heading-5">Address</h4>
                            <ul className="menu-footer">
                            <div className="mt-20 text-body-text color-gray-600 mb-20">5th Floor, Olympia Cyberspace,<br></br> Thiru Vi Ka Industrial Estate, <br></br>  Guindy, Chennai, <br></br> Tamil Nadu - 600032</div>
                                {/* <li>
                                    <Link href="/#">
                                        <a>Request an offer</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>How it works</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/page-pricing-2">
                                        <a>Pricing</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Reviews</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/#">
                                        <a>Stories</a>
                                    </Link>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom mt-20">
                        <div className="row">
                            <div className="d-flex col-md-6">
                                <p className="color-gray-400 text-body-lead mr-2">Created with &#10084; by&nbsp; <a href="https://www.indiespirit.in/" target={"_blank"} style={{color:"#d63384"}} rel="noreferrer" > Indie Spirit Technologies</a></p>
                                {/* <a href="/" className="menu-footer" >indiespirit</a> */}
                                {/* <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                                <Link href="/page-terms">
                                    <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                                </Link> */}
                                {/* <Link href="/page">
                                    <a className="text-body-text color-gray-400 ml-50">Terms of service</a>
                                </Link> */}
                            </div>
                            <div className="col-md-6 text-center text-lg-end text-md-end">
                                <Link href="/privacypolicy">
                                    <a className="text-body-lead color-gray-400 ml-50">Privacy policy</a>
                                </Link>
                            </div>
                            {/* <div className="col-md-6 text-center text-lg-end text-md-end">
                                <div className="footer-social">
                                    <Link href="https://facebook.com">
                                        <a className="icon-socials icon-facebook"></a>
                                    </Link> 

                                    <a href="https://facebook.com" target="_blank" rel="noreferrer"><img src="/assets/imgs/template/iconfacebook.png"></img>&nbsp;</a>

                                    <Link href="https://twitter.com">
                                        <a className="icon-socials icon-twitter"></a>
                                    </Link>

                                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><img src="/assets/imgs/template/icontwitter.png"></img>&nbsp;</a>

                                    <Link href="https://www.instagram.com">
                                        <a className="icon-socials icon-instagram"></a>
                                    </Link>

                                    <Link href="https://www.linkedin.com">
                                        <a className="icon-socials icon-linkedin"></a>
                                    </Link>

                                    <a href="https://linkedin.com" target="_blank" rel="noreferrer"><img src="/assets/imgs/template/iconlinkedin.png"></img></a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;