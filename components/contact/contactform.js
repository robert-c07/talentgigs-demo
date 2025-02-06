'use client';
import { React, useState } from 'react';

function ContactForm() {
  // Define states for form data and button disable state
  const [formData, setFormData] = useState({ Name: '', Email: '', Phone: '', Company: '', Message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(false); // Define button disabled state
  const [loading, setLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Disable the button to prevent multiple submissions
    setButtonDisabled(true);
    setLoading(true);

    try {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxnDvBfv4RuFt3r5xuV1FkRzNjThL-iyjwXspenokTIaKqR1kgR1qkc-LEK6Iwh7keCNw/exec'; // Replace with your Google Apps Script URL

      // Create form data to send
      const form = new FormData();
      form.append('Name', formData.Name);
      form.append('Company', formData.Company);
      form.append('Email', formData.Email);
      form.append('Phone', formData.Phone);
      form.append('Message', formData.Message);

      // Submit form data to Google Apps Script using fetch
      const response = await fetch(scriptURL, {
        mode: 'cors',
        method: 'POST',
        body: form,
        headers: {
          'Accept': 'application/json',
          // The Content-Type header is set automatically by the browser for FormData
        },
      });

      
      if (response.ok) {
        const result = await response.json();
        console.log(result);
        setFormStatus(result.result + "....!");
        setFormData({ Name: '', Email: '', Phone: '', Company: '', Message: '' });
      } else {
        setFormStatus('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setFormStatus('Error submitting the form. Please try again later.');
    } finally {
      // Re-enable the button after submission is done
      setButtonDisabled(false);
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (

    <section className="section-box">
        <div className="container mb-50 mt-70">
            <div className="bdrd-58 box-gray-100 icon-wave">
                <div className="row">
                    <div className="col-lg-12 mb-60"><span className="text-body-capitalized text-uppercase">Contact us</span>
                        <h2 className="text-heading-3 color-gray-900 mt-10">Ready to transform your College campus Hiring ?</h2>
                        <p className="text-body-text color-gray-600 mt-20">Reach out to us — Talentgigs is here to be your trusted partner and support your hiring success!<br className="d-lg-block d-none" /></p>
                    </div>
                    <div className="col-lg-4 mb-40">
                        <h4 className="text-heading-6 color-gray-900 mb-10 mt-10"><img width="150px" src="/assets/imgs/template/logo1.png" alt="logo image" ></img></h4>
                        <p className="text-body-text color-gray-600">5th Floor, Olympia Cyberspace,<br></br> Thiru Vi Ka Industrial Estate, <br></br> Guindy, Chennai,<br></br> Tamil Nadu - 600032</p>
                        <br></br>



                        <p className="text-body-text color-gray-600"><span><a href="mailto:balaji@talentgigs.in"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg></a></span><a href="mailto:balaji@talentgigs.in" className="color-gray-600">&nbsp;&nbsp; campus@talentgigs.in</a></p>
                        <p className="text-body-text color-gray-600"><span>
                            <a href="https://www.linkedin.com/company/talentgigs/">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                                </svg></a>
                        </span><a href="https://www.linkedin.com/company/talentgigs/" className="color-gray-600">&nbsp;&nbsp;&nbsp;Linkedin</a></p>
                        <br></br>

                    </div>
                    <div className="col-lg-8">
                            <form onSubmit={handleSubmit}>
                        <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            name="Name"
                                            className="form-control"
                                            placeholder="Enter your name"
                                            value={formData.Name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="Company"
                                            className="form-control"
                                            placeholder="Company (optional)"
                                            value={formData.Company}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="Email"
                                            className="form-control"
                                            placeholder="Your email"
                                            value={formData.Email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="Phone"
                                            className="form-control"
                                            placeholder="Phone number"
                                            value={formData.Phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <textarea
                                            name="Message"
                                            className="form-control"
                                            placeholder="Tell us about yourself"
                                            value={formData.Message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>

                                {loading && <p className='p-10'>Loading...</p>}
                                {formStatus && <p className='p-20'>{formStatus}</p>}

                                <div className="col-lg-12 mt-15">
                                    <button
                                        className="btn btn-black icon-arrow-right-white mr-40 mb-20"
                                        type="submit"
                                        disabled={buttonDisabled}>
                                        Send Message
                                    </button>
                                    <br className="d-lg-none d-block" /><span className="text-body-text-md color-gray-500 mb-20"><br />By clicking contact us button, you agree our terms and policy,</span>
                                </div>
                        </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  );
}

export default ContactForm;
