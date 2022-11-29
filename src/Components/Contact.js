import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="inner-slider">
        <div className="slider-heading aos-init aos-animate" data-aos="fade-in">
          Contact Us
        </div>
      </section>

      <section className="our-team">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row">

            <div className="col-sm-4 pt-80">
              <div className="heading">Customer Support</div>
              <div className="light-green-bg p-30">
                <p><i className="bi bi-envelope-fill font-18 pr-10"></i> <a href="mailto:support@gopure.co.in">support@gopure.co.in</a></p>
                <p><i className="bi bi-telephone-fill font-18 pr-10"></i>
                  <a href="tel:0120- 425 6016">0120- 425 6016</a>, <a href="tel:9910125804">9910125804</a></p>
                <p><i className="bi bi-clock font-18 pr-10"></i> 10.00 am to 6.00 pm - (Monday to Friday)</p>
              </div>

            </div>
            <div className="contact-form mb-40 col-sm-6 offset-sm-1">
              <p className="mt-40 mb-40">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.</p>

              <form className="row g-3" action="#">
                <div className="col-12 mb-10">
                  <label htmlFor="inputName" className="form-label">Name</label>
                  <input type="text" name="fullname" className="form-control" id="inputName"/>
                </div>
                <div className="col-12 mb-10">
                  <label htmlFor="inputMobileNumber" className="form-label">Mobile</label>
                  <input type="text" name="phone"  className="form-control" id="inputMobileNumber"/>
                </div>

                <div className="col-12 mb-10">
                  <label htmlFor="inputEmail" className="form-label">Email</label>
                  <input type="email" name="email" className="form-control" id="inputEmail"/>
                </div>

                <div className="col-12 mb-10">
                  <label htmlFor="inputQuestion" className="form-label">Write your queries</label>
                  <textarea className="form-control" name="queries" id="inputQuestion"></textarea>
                </div>

                <div className="col-12">
                  <button type="submit" className="btn btn-md btn-success pl-40 pr-40">Send</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
