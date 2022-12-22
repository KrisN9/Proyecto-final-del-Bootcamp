import React from "react";

const ContactForm = () => {
  return (
    <div className="container">
      <div className="form-floating mb-3">
        <input
          type="name"
          className="form-control"
          id="floatingName"
          placeholder="Name and Last Name"
        />
        <label for="floatingName">Name and Last Name*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address*</label>
      </div>
      <div className="form-floating mb-3">
        <input
          type="phone-number"
          className="form-control"
          id="floatingNumber"
          placeholder="Phone Number"
        />
        <label for="floatingNumber">Phone Number</label>
      </div>
      <div className="form-floating mb-3">
        <label for="exampleFormControlMessage" class="form-label">
          Message*
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlMessage"
          placeholder="Message"
          rows="3"
        ></textarea>
      </div>
    </div>
  );
};

export default ContactForm;
