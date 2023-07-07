import React from "react";
import Input from "./Input";

export default function FormContact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };

    console.log(details);
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label className="mb-2" htmlFor="name">
          Name
        </label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder={"Enter Your Name"}
        />
        <label className="mb-2" htmlFor="email">
          Email
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder={"Enter Your Email"}
        />
        <label className="mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          className="mb-2 py-3 p-3 rounded-lg"
          id="message"
          name="message"
          placeholder={"Enter Your Message"}
        />
        <button className="mb-2 py-4 bg-blueSoft rounded-lg" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
