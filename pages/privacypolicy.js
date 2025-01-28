/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/layout/Layout";


function PrivacyPolicy() {
    return (
        <>
            <Layout>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h1 className="text-heading-2 color-gray-900 mb-20">
                                    Privacy Policy
                                </h1>
                                <p className="text-body-excerpt color-gray-600 mb-30">
                                This privacy notice discloses the privacy practices for www.talengigs.in
                                </p>
                            </div>
                            <div className="col-lg-12">
                                <h2 className="text-heading-4 color-gray-900 mb-20">Information Collection, Use, and Sharing</h2>
                                <ul style={{listStyleType:"disc"}} className="pl-10 mb-30" >
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily share with us via email or other direct contacts from you. We will not sell or rent this information to anyone.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products, services or changes to this privacy policy.
                                        </p>
                                    </li>
                                </ul>
                                <h2 className="text-heading-4 color-gray-900 mb-20">Your Access to and Control Over Information</h2>
                                <ul style={{listStyleType:"disc"}} className="pl-10 mb-30" >
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            You may opt out of any future contacts from us at any time. You can do the following by contacting us via the email address or phone number given on our website.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            Change/correct any data we have about you.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            Have us delete any data we have about you.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            Express any concern you have about our use of your data.
                                        </p>
                                    </li>
                                </ul>
                                <h2 className="text-heading-4 color-gray-900 mb-20">Security</h2>
                                <ul style={{listStyleType:"disc"}} className="pl-10 mb-40" >
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-body-excerpt color-gray-600 mb-10">
                                            The computers/servers in which we store personally identifiable information are kept in a secure environment.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            <div className="text-center">
                                <p className="text-body-excerpt color-black-900 mb-30" style={{fontStyle: "italic"}}>
                                If you feel that we are not abiding by this privacy policy, you should contact us immediately via telephone at  7200268282 or via hr@talentgigs.in
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>

        </>
    )
}

export default PrivacyPolicy;