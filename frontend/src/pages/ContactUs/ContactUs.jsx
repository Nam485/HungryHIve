import React from 'react';
import { useForm } from 'react-hook-form';
import './ContactUs.css';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    data.access_key = "4ac40cff-859d-4836-897c-1a95aa4fda37";
    
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(data)
    }).then((res) => res.json());

    if (res.success) {
        toast.success(res.message);
      reset();
    }
  };

  return (
    <section className="contact-section text-black-900">
      <div className="contact-container">
        <div className="contact-header text-center">
          
          <h1 className="contact-subtitle">We’d love to hear from you</h1>
          <p className="contact-description">Chat to our friendly team.</p>
        </div>

        <img className="contact-image" src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=100" alt="" />

        <div className="contact-grid">
          <div className="contact-info-grid">
            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="contact-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <h2 className="contact-info-title">Email</h2>
              <p className="contact-info-text">Our friendly team is here to help.</p>
              <p className="contact-info-link"><a href='mailto:contact@hungryhive.com'>contact@hungryhive.com</a></p>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="contact-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <h2 className="contact-info-title">Live chat</h2>
              <p className="contact-info-text">Our friendly team is here to help.</p>
              <p className="contact-info-link">Start new chat</p>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="contact-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </span>
              <h2 className="contact-info-title">Office</h2>
              <p className="contact-info-text">Come say hello at our office HQ.</p>
              <p className="contact-info-link"><a href="https://maps.app.goo.gl/gUk5NTZUYaktxigw8">Graphic Era University</a></p>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="contact-svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </span>
              <h2 className="contact-info-title">Phone</h2>
              <p className="contact-info-text">Mon-Fri from 8am to 5pm.</p>
              <p className="contact-info-link"><a href='tel:+91 8890758025'>+91 8890758025</a></p>
            </div>
          </div>



          <div className="contact-form-container">
          <ToastContainer />
            <form onSubmit={handleSubmit(onSubmit)} id="formId">
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label className="contact-form-label">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    className="contact-form-input"
                    {...register("firstName", { required: "First Name is required" })}
                  />
                  {errors.firstName && <p className="contact-form-error">{errors.firstName.message}</p>}
                </div>
                <div className="contact-form-group">
                  <label className="contact-form-label">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="contact-form-input"
                    {...register("lastName", { required: "Last Name is required" })}
                  />
                  {errors.lastName && <p className="contact-form-error">{errors.lastName.message}</p>}
                </div>
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">Email address</label>
                <input
                  type="email"
                  placeholder="johndoe@example.com"
                  className="contact-form-input"
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Entered value does not match email format" } })}
                />
                {errors.email && <p className="contact-form-error">{errors.email.message}</p>}
              </div>
              <div className="contact-form-group">
                <label className="contact-form-label">Message</label>
                <textarea
                  className="contact-form-textarea"
                  placeholder="Message"
                  {...register("message", { required: "Message is required" })}
                ></textarea>
                {errors.message && <p className="contact-form-error">{errors.message.message}</p>}
              </div>
              <button className="contact-form-button" type="submit">Send message</button>
            </form>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Contact;
