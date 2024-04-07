import React, { useState } from "react";
import axios from "../api/axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="py-6 max-w-3xl">
            Here at Zuccker global relief grant, you are our number one
            priority. We're dedicated to providing exceptional service and
            support to ensure your experience with us is nothing short of
            outstanding. Feel free to reach out using the contact form below –
            we're always here to assist you!
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="full name"
                className="input input-bordered"
                required
              />
            </div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="label">
                <span className="label-text-alt">Message</span>
              </div>
            </label>
            <div className="form-control mt-6">
              <a
                className="btn btn-primary"
                disabled={!message || !name ? true : false}
                href={`mailto:claim@zuckerreliefglobalgrant.org?body=${message}?subject=Enquiry for zucker relief global grant by ${name}`}
              >
                Send
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
